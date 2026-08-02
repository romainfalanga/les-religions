/**
 * Relais OpenRouter.
 *
 * La clé API ne doit jamais atteindre le navigateur : un site statique qui
 * appelle OpenRouter directement publie sa clé à quiconque ouvre l'inspecteur.
 * Cette fonction est donc le seul endroit où `OPENROUTER_API_KEY` existe.
 *
 * Elle fait volontairement peu de choses : elle vérifie la forme de la requête,
 * borne la taille, et retransmet le flux SSE tel quel. Toute la construction du
 * prompt reste dans `src/data/dialogue/`, côté application, pour rester lisible
 * et vérifiable.
 *
 * Variables d'environnement (à définir dans Netlify › Site settings › Environment) :
 *   OPENROUTER_API_KEY   obligatoire
 *   OPENROUTER_MODEL     facultatif, défaut : anthropic/claude-sonnet-4.6
 *   SITE_URL             facultatif, pour l'en-tête HTTP-Referer d'OpenRouter
 */

const ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';

/**
 * Modèle par défaut.
 *
 * Choisi après mesure sur la tâche réelle : restitution d'un registre
 * littéraire français sous contrainte stricte, avec déclaration exacte des
 * passages employés. Voir `scripts/bench-dialogue.ts` pour le protocole.
 */
const DEFAULT_MODEL = 'openai/gpt-5-mini';

/**
 * Modèles autorisés.
 *
 * Le paramètre `model` est accepté depuis le client, ce qui permet de comparer
 * les candidats sans redéployer. La liste ne contient que des modèles
 * économiques : le pire abus possible est donc quelques centimes, là où laisser
 * passer un modèle arbitraire exposerait à un usage coûteux.
 */
const ALLOWED_MODELS = new Set([
  'openai/gpt-5-mini',
  'openai/gpt-5-nano',
  'openai/gpt-5.6-luna',
  'openai/gpt-4.1-mini',
  'google/gemini-2.5-flash',
  'google/gemini-2.5-flash-lite',
  'mistralai/mistral-small-3.2-24b-instruct',
  'mistralai/mistral-medium-3.1',
  'deepseek/deepseek-v4-flash-0731',
  'z-ai/glm-4.7-flash',
  'qwen/qwen3.5-flash-02-23',
  'anthropic/claude-haiku-4.5',
]);

function resolveModel(requested: unknown): string {
  const envModel = process.env.OPENROUTER_MODEL;
  if (typeof requested === 'string' && ALLOWED_MODELS.has(requested)) return requested;
  // Une valeur d'environnement explicite prime sur le défaut, même hors liste :
  // c'est le propriétaire du site qui la fixe, pas un visiteur.
  if (envModel) return envModel;
  return DEFAULT_MODEL;
}

const MAX_SYSTEM = 24_000;
const MAX_MESSAGE = 2_000;
const MAX_TURNS = 24;

/**
 * Empreinte du prompt assemblé par `src/data/dialogue/buildSystemPrompt`.
 *
 * Sans cette vérification, l'endpoint est un proxy LLM public : n'importe qui
 * peut y poster une instruction arbitraire et consommer les crédits du compte.
 * Ces marqueurs ne sont pas un secret et n'authentifient personne — ils
 * empêchent seulement l'usage détourné trivial, ce qui est le cas de loin le
 * plus probable.
 */
const FINGERPRINTS = [
  '# Contrat',
  'Tu es un dispositif de lecture, pas une divinité.',
  '# Passages disponibles',
  '# Protocole de réponse',
];

/**
 * Limitation de débit par adresse, en mémoire du conteneur.
 *
 * Volontairement modeste : les fonctions serverless sont réparties sur
 * plusieurs instances, donc ce seuil n'est pas global. Il suffit à casser une
 * boucle d'appels sans introduire de dépendance à un stockage externe.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear(); // garde-fou mémoire
  return recent.length > MAX_PER_WINDOW;
}

interface Incoming {
  system?: unknown;
  messages?: unknown;
  temperature?: unknown;
  model?: unknown;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-headers': 'content-type',
      },
    });
  }

  if (request.method === 'GET') {
    // Sonde de configuration : permet à l'interface de dire proprement que la
    // fonctionnalité est indisponible plutôt que d'échouer à la première question.
    return json(200, {
      configured: Boolean(process.env.OPENROUTER_API_KEY),
      model: resolveModel(undefined),
      alternatives: [...ALLOWED_MODELS],
    });
  }

  if (request.method !== 'POST') {
    return json(405, { error: 'Méthode non autorisée.' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return json(503, {
      error: 'not_configured',
      message:
        "La variable d'environnement OPENROUTER_API_KEY n'est pas définie sur ce déploiement.",
    });
  }

  let body: Incoming;
  try {
    body = (await request.json()) as Incoming;
  } catch {
    return json(400, { error: 'Corps de requête illisible.' });
  }

  const system = typeof body.system === 'string' ? body.system : '';
  if (!system || system.length > MAX_SYSTEM) {
    return json(400, { error: 'Instruction système absente ou trop longue.' });
  }
  if (!FINGERPRINTS.every((f) => system.includes(f))) {
    return json(400, {
      error: 'unrecognized_prompt',
      message:
        "Ce relais ne sert que les dialogues de l'Atlas des Religions, pas des instructions arbitraires.",
    });
  }

  const ip =
    request.headers.get('x-nf-client-connection-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'inconnu';
  if (rateLimited(ip)) {
    return json(429, {
      error: 'rate_limited',
      message: 'Trop de demandes en peu de temps. Patientez une minute.',
    });
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return json(400, { error: 'Aucun message.' });
  }
  if (body.messages.length > MAX_TURNS) {
    return json(400, { error: 'Conversation trop longue.' });
  }

  const messages: { role: 'user' | 'assistant'; content: string }[] = [];
  for (const raw of body.messages) {
    const m = raw as { role?: unknown; content?: unknown };
    if (m.role !== 'user' && m.role !== 'assistant') {
      return json(400, { error: 'Rôle de message invalide.' });
    }
    if (typeof m.content !== 'string' || !m.content.trim()) {
      return json(400, { error: 'Message vide.' });
    }
    messages.push({ role: m.role, content: m.content.slice(0, MAX_MESSAGE) });
  }

  const temperature =
    typeof body.temperature === 'number' && body.temperature >= 0 && body.temperature <= 1.2
      ? body.temperature
      : 0.85;

  let upstream: Response;
  try {
    upstream = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
        'HTTP-Referer': process.env.SITE_URL || 'https://atlas-des-religions.netlify.app',
        'X-Title': 'Atlas des Religions',
      },
      body: JSON.stringify({
        model: resolveModel(body.model),
        messages: [{ role: 'system', content: system }, ...messages],
        temperature,
        // Les modèles à raisonnement (famille GPT-5) imputent leurs jetons de
        // réflexion sur ce budget : à 900 jetons, ils le consommaient
        // entièrement et renvoyaient une réponse vide. On élargit, et on
        // demande un effort de raisonnement minimal — la tâche est une
        // restitution de style, pas une résolution de problème.
        max_tokens: 2000,
        reasoning: { effort: 'low' },
        stream: true,
      }),
    });
  } catch {
    return json(502, { error: 'upstream_unreachable', message: 'OpenRouter est injoignable.' });
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    return json(upstream.status === 401 ? 401 : 502, {
      error: 'upstream_error',
      status: upstream.status,
      message: detail.slice(0, 500),
    });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-cache, no-transform',
      connection: 'keep-alive',
    },
  });
}

export const config = { path: '/api/dialogue' };
