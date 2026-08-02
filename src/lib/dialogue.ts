import { buildSystemPrompt, selectAnchors, splitSources } from '../data/dialogue';
import type { Anchor, Voice } from '../data/dialogue';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  /** Passages fournis au modèle pour ce tour (rôle assistant). */
  offered?: Anchor[];
  /** Passages que le modèle déclare avoir utilisés. */
  used?: Anchor[];
  /** Registre depuis lequel la réponse a été produite. */
  registerId?: string;
}

const ENDPOINT = '/api/dialogue';

export type Availability =
  | { state: 'checking' }
  | { state: 'ready'; model: string }
  | { state: 'unconfigured' }
  | { state: 'absent' };

/**
 * Vérifie que le relais existe et qu'une clé y est définie.
 * `absent` signifie que la fonction n'est pas déployée — c'est le cas en
 * développement avec `vite dev`, où il faut passer par `netlify dev`.
 */
export async function checkAvailability(): Promise<Availability> {
  try {
    const res = await fetch(ENDPOINT, { method: 'GET' });
    if (!res.ok) return { state: 'absent' };
    const ct = res.headers.get('content-type') ?? '';
    if (!ct.includes('application/json')) return { state: 'absent' };
    const data = (await res.json()) as { configured?: boolean; model?: string };
    return data.configured
      ? { state: 'ready', model: data.model ?? 'inconnu' }
      : { state: 'unconfigured' };
  } catch {
    return { state: 'absent' };
  }
}

export class DialogueError extends Error {
  kind: 'not_configured' | 'network' | 'upstream' | 'aborted';
  constructor(message: string, kind: 'not_configured' | 'network' | 'upstream' | 'aborted') {
    super(message);
    this.kind = kind;
  }
}

/**
 * Envoie un tour de dialogue et diffuse la réponse au fil de l'eau.
 *
 * Le prompt système est reconstruit à chaque tour : les passages fournis
 * dépendent de la dernière question, ce qui permet à la voix de rester ancrée
 * dans le texte au fil d'une conversation qui dérive.
 */
export async function sendTurn(opts: {
  voice: Voice;
  registerId: string;
  history: ChatMessage[];
  signal?: AbortSignal;
  onDelta: (chunk: string) => void;
}): Promise<{ text: string; offered: Anchor[]; used: Anchor[] }> {
  const { voice, registerId, history, signal, onDelta } = opts;

  const offered = selectAnchors(voice, registerId, history);
  const system = buildSystemPrompt(voice, registerId, offered);

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal,
      body: JSON.stringify({
        system,
        messages: history.map((m) => ({ role: m.role, content: m.content })),
      }),
    });
  } catch (e) {
    if ((e as Error).name === 'AbortError') throw new DialogueError('Interrompu.', 'aborted');
    throw new DialogueError('Le relais est injoignable.', 'network');
  }

  if (res.status === 503) {
    throw new DialogueError(
      "La clé OpenRouter n'est pas encore définie sur ce déploiement.",
      'not_configured',
    );
  }
  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => '');
    throw new DialogueError(detail.slice(0, 300) || `Erreur ${res.status}.`, 'upstream');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let raw = '';
  let emitted = 0;

  // Le protocole demande une ligne « SOURCES: … » finale : on la retient pour
  // ne pas la faire apparaître dans la bulle de réponse.
  const visible = (s: string) => s.replace(/\n*^\s*SOURCES\s*:.*$/im, '');

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const payload = trimmed.slice(5).trim();
      if (!payload || payload === '[DONE]') continue;
      try {
        const parsed = JSON.parse(payload) as {
          choices?: { delta?: { content?: string } }[];
        };
        const delta = parsed.choices?.[0]?.delta?.content;
        if (!delta) continue;
        raw += delta;
        const shown = visible(raw);
        if (shown.length > emitted) {
          onDelta(shown.slice(emitted));
          emitted = shown.length;
        }
      } catch {
        // Commentaires de maintien de connexion et fragments : on ignore.
      }
    }
  }

  const { text, sourceIds } = splitSources(raw);
  const byId = new Map(voice.anchors.map((a) => [a.id, a]));
  const used = sourceIds.map((id) => byId.get(id)).filter((a): a is Anchor => Boolean(a));

  return { text: text || visible(raw).trim(), offered, used };
}

export { buildSystemPrompt, selectAnchors };
