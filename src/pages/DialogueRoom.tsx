import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { buildSystemPrompt, getVoice, selectAnchors } from '../data/dialogue';
import type { Anchor } from '../data/dialogue';
import { traditionName } from '../data/traditions';
import {
  checkAvailability,
  sendTurn,
  DialogueError,
  type Availability,
  type ChatMessage,
} from '../lib/dialogue';
import { Callout } from '../components/ui';
import { cx, tint } from '../lib/utils';
import NotFound from './NotFound';

export default function DialogueRoom() {
  const { id } = useParams();
  const voice = getVoice(id);

  const [registerId, setRegisterId] = useState(voice?.registers[0].id ?? '');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [streaming, setStreaming] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availability, setAvailability] = useState<Availability>({ state: 'checking' });
  const [showPrompt, setShowPrompt] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void checkAvailability().then(setAvailability);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length, streaming]);

  // Changer de registre en cours de conversation est le geste pédagogique
  // central : on repart d'une page blanche pour que la comparaison soit nette.
  const changeRegister = (next: string) => {
    if (next === registerId) return;
    abortRef.current?.abort();
    setRegisterId(next);
    setMessages([]);
    setStreaming('');
    setError(null);
    setBusy(false);
  };

  const previewAnchors: Anchor[] = useMemo(() => {
    if (!voice) return [];
    return selectAnchors(voice, registerId, draft.trim() ? [{ role: 'user', content: draft }] : []);
  }, [voice, registerId, draft]);

  const systemPreview = useMemo(
    () => (voice ? buildSystemPrompt(voice, registerId, previewAnchors) : ''),
    [voice, registerId, previewAnchors],
  );

  if (!voice) return <NotFound />;

  const register = voice.registers.find((r) => r.id === registerId) ?? voice.registers[0];
  const disabled = busy || availability.state === 'unconfigured' || availability.state === 'absent';

  const ask = async (question: string) => {
    const q = question.trim();
    if (!q || busy) return;

    const history: ChatMessage[] = [...messages, { role: 'user', content: q }];
    setMessages(history);
    setDraft('');
    setStreaming('');
    setError(null);
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const { text, offered, used } = await sendTurn({
        voice,
        registerId,
        history,
        signal: controller.signal,
        onDelta: (chunk) => setStreaming((s) => s + chunk),
      });
      setMessages([...history, { role: 'assistant', content: text, offered, used, registerId }]);
    } catch (e) {
      if (e instanceof DialogueError && e.kind === 'aborted') {
        setMessages(history);
      } else {
        setError(
          e instanceof DialogueError
            ? e.kind === 'not_configured'
              ? "La clé OpenRouter n'est pas définie sur ce déploiement. La page fonctionnera dès qu'elle le sera."
              : e.message
            : 'Erreur inattendue.',
        );
      }
    } finally {
      setStreaming('');
      setBusy(false);
      abortRef.current = null;
    }
  };

  return (
    <div>
      {/* En-tête ------------------------------------------------------------ */}
      <header
        className="border-b border-ink-200 py-8"
        style={{ background: `linear-gradient(to bottom, ${tint(voice.color, 0.09)}, transparent)` }}
      >
        <div className="container-page">
          <Link to="/dialogues" className="text-xs text-ink-500 hover:text-ink-900">
            ← Les trois voix
          </Link>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className={cx(voice.scriptClass, 'text-3xl')} style={{ color: voice.color }} aria-hidden>
              {voice.script}
            </span>
            <h1 className="font-serif text-2xl font-semibold text-ink-950 sm:text-3xl">
              {voice.name}
            </h1>
            <Link
              to={`/traditions/${voice.tradition}`}
              className="chip"
              style={{
                borderColor: tint(voice.color, 0.35),
                backgroundColor: tint(voice.color, 0.1),
                color: voice.color,
              }}
            >
              {traditionName(voice.tradition)}
            </Link>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-ink-600">{voice.caveat}</p>

          {/* Registres ----------------------------------------------------- */}
          <div className="mt-5">
            <p className="eyebrow mb-2">Depuis quelle couche du corpus ?</p>
            <div className="flex flex-wrap gap-2">
              {voice.registers.map((r) => (
                <button
                  key={r.id}
                  onClick={() => changeRegister(r.id)}
                  className={cx(
                    'rounded-lg border px-3 py-2 text-left text-xs transition',
                    r.id === registerId
                      ? 'text-white'
                      : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
                  )}
                  style={
                    r.id === registerId
                      ? { backgroundColor: voice.color, borderColor: voice.color }
                      : undefined
                  }
                >
                  <span className="block font-semibold">{r.label}</span>
                  <span className={cx('block', r.id === registerId ? 'text-white/70' : 'text-ink-400')}>
                    {r.period}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-3 max-w-3xl text-[0.85rem] leading-relaxed text-ink-600">
              {register.shift}
            </p>
          </div>
        </div>
      </header>

      <div className="container-page grid grid-cols-1 gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {/* Conversation ---------------------------------------------------- */}
        <div className="min-w-0">
          {availability.state === 'unconfigured' && (
            <div className="mb-6">
              <Callout label="Fonctionnalité en attente de configuration" tone="warning">
                Le relais est déployé, mais la variable <code>OPENROUTER_API_KEY</code> n’est pas
                encore définie dans les réglages Netlify. Tout le reste de la page — registres,
                passages, cahier des charges — est consultable dès maintenant.
              </Callout>
            </div>
          )}
          {availability.state === 'absent' && (
            <div className="mb-6">
              <Callout label="Relais indisponible" tone="warning">
                La fonction <code>/api/dialogue</code> ne répond pas. En développement local,
                lancez <code>npx netlify dev</code> plutôt que <code>npm run dev</code> : les
                fonctions serverless ne sont pas servies par Vite seul.
              </Callout>
            </div>
          )}

          {messages.length === 0 && !streaming && (
            <div className="card p-6">
              <p className="eyebrow mb-3">Questions qui font travailler le corpus</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {voice.openers.map((o) => (
                  <button
                    key={o}
                    onClick={() => void ask(o)}
                    disabled={disabled}
                    className="rounded-lg border border-ink-200 bg-white/60 px-4 py-3 text-left text-sm text-ink-700 transition hover:border-ink-400 disabled:opacity-40"
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-5">
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-ink-900 px-4 py-2.5 text-[0.95rem] text-parchment">
                    {m.content}
                  </p>
                </div>
              ) : (
                <article key={i} className="max-w-[92%]">
                  <div
                    className="rounded-2xl rounded-bl-sm border px-5 py-4"
                    style={{
                      borderColor: tint(voice.color, 0.3),
                      backgroundColor: tint(voice.color, 0.05),
                    }}
                  >
                    <p className="prose-serif whitespace-pre-line text-[1.02rem]">{m.content}</p>
                  </div>

                  {m.used && m.used.length > 0 && (
                    <div className="mt-2.5 pl-1">
                      <p className="eyebrow mb-1.5">Vérifier dans le texte</p>
                      <div className="space-y-1.5">
                        {m.used.map((a) => (
                          <details key={a.id} className="rounded-lg border border-ink-200 bg-white/50">
                            <summary className="cursor-pointer px-3.5 py-2 text-xs font-medium text-ink-700">
                              {a.ref}
                            </summary>
                            <div className="border-t border-ink-100 px-3.5 py-2.5">
                              <p className="prose-serif text-[0.9rem]">« {a.text} »</p>
                              {a.original && (
                                <p
                                  dir={voice.scriptClass === 'script-arabic' || voice.scriptClass === 'script-hebrew' ? 'rtl' : 'ltr'}
                                  className={cx(voice.scriptClass, 'mt-2 text-lg text-ink-800')}
                                >
                                  {a.original}
                                </p>
                              )}
                              {a.constraint && (
                                <p className="mt-2 border-t border-ink-100 pt-2 text-xs leading-relaxed text-ink-600">
                                  {a.constraint}
                                </p>
                              )}
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  )}

                  {m.used && m.used.length === 0 && (
                    <p className="mt-2 pl-1 text-xs italic text-ink-500">
                      Cette réponse ne s’appuie sur aucun passage déclaré — traitez-la avec d’autant
                      plus de méfiance.
                    </p>
                  )}
                </article>
              ),
            )}

            {streaming && (
              <article className="max-w-[92%]">
                <div
                  className="rounded-2xl rounded-bl-sm border px-5 py-4"
                  style={{
                    borderColor: tint(voice.color, 0.3),
                    backgroundColor: tint(voice.color, 0.05),
                  }}
                >
                  <p className="prose-serif whitespace-pre-line text-[1.02rem]">
                    {streaming}
                    <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-ink-400 align-middle" />
                  </p>
                </div>
              </article>
            )}

            {busy && !streaming && (
              <p className="text-sm italic text-ink-400">Le texte se cherche…</p>
            )}

            {error && (
              <Callout label="Échec" tone="warning">
                {error}
              </Callout>
            )}
          </div>

          <div ref={bottomRef} />

          {/* Saisie -------------------------------------------------------- */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void ask(draft);
            }}
            className="sticky bottom-0 mt-6 border-t border-ink-200 bg-parchment/95 py-4 backdrop-blur"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    void ask(draft);
                  }
                }}
                rows={2}
                maxLength={2000}
                disabled={disabled}
                placeholder={
                  disabled ? 'Dialogue indisponible pour le moment.' : 'Posez votre question…'
                }
                className="min-h-[3.25rem] flex-1 resize-y rounded-lg border border-ink-200 bg-white/70 px-4 py-2.5 text-[0.95rem] outline-none transition focus:border-ink-400 disabled:opacity-50"
              />
              {busy ? (
                <button
                  type="button"
                  onClick={() => abortRef.current?.abort()}
                  className="shrink-0 rounded-lg border border-ink-300 px-4 py-2.5 text-sm text-ink-700"
                >
                  Arrêter
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={disabled || !draft.trim()}
                  className="shrink-0 rounded-lg px-5 py-2.5 text-sm font-medium text-parchment transition disabled:opacity-30"
                  style={{ backgroundColor: voice.color }}
                >
                  Demander
                </button>
              )}
            </div>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-ink-500">
              Reconstitution littéraire à partir des textes. Sans autorité religieuse, sans
              révélation, sans avis juridique. Rien n’est conservé : la conversation disparaît si
              vous quittez la page.
            </p>
          </form>
        </div>

        {/* Colonne d'inspection ------------------------------------------- */}
        <aside className="space-y-5">
          <div className="card p-5">
            <p className="eyebrow mb-2">À surveiller pendant l’échange</p>
            <ul className="space-y-2">
              {voice.watchFor.map((w) => (
                <li key={w} className="flex gap-2 text-[0.85rem] leading-relaxed text-ink-700">
                  <span style={{ color: voice.color }}>—</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <p className="eyebrow mb-2">
              Passages qui seraient fournis {draft.trim() ? 'pour cette question' : 'par défaut'}
            </p>
            <ul className="space-y-1.5">
              {previewAnchors.slice(0, 6).map((a) => (
                <li key={a.id} className="text-[0.82rem] leading-snug text-ink-600">
                  <span className="font-mono text-[0.72rem] text-ink-400">{a.id}</span> — {a.ref}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-ink-500">
              La sélection change à mesure que vous écrivez : elle est purement lexicale, donc
              inspectable.
            </p>
          </div>

          <div className="card p-5">
            <p className="eyebrow mb-2">Ce que ce registre ignore</p>
            <ul className="space-y-2">
              {register.silences.map((s) => (
                <li key={s} className="text-[0.85rem] leading-relaxed text-ink-700">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <button
              onClick={() => setShowPrompt((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="eyebrow">Cahier des charges complet</span>
              <span className="text-ink-400">{showPrompt ? '−' : '+'}</span>
            </button>
            <p className="mt-2 text-xs leading-relaxed text-ink-500">
              L’instruction exacte envoyée au modèle. Elle est publiée ici parce qu’une page qui
              prétend restituer une voix divine doit pouvoir être auditée.
            </p>
            {showPrompt && (
              <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-ink-200 bg-white/60 p-3 text-[0.68rem] leading-relaxed text-ink-700">
                {systemPreview}
              </pre>
            )}
          </div>

          {availability.state === 'ready' && (
            <p className="text-xs text-ink-400">Modèle : {availability.model}</p>
          )}
        </aside>
      </div>
    </div>
  );
}
