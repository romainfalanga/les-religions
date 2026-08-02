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
const DEFAULT_MODEL = 'anthropic/claude-sonnet-4.6';

const MAX_SYSTEM = 24_000;
const MAX_MESSAGE = 2_000;
const MAX_TURNS = 24;

interface Incoming {
  system?: unknown;
  messages?: unknown;
  temperature?: unknown;
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
      model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
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
        model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
        messages: [{ role: 'system', content: system }, ...messages],
        temperature,
        // Le corpus ne fait pas de dissertation ; le protocole borne déjà la
        // longueur, ceci en est le garde-fou dur.
        max_tokens: 900,
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
