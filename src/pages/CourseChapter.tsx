import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { chapters, chaptersById, parts } from '../data/course';
import type { ExploreLink } from '../data/course';
import { figureName } from '../data/figures';
import { textTitle } from '../data/texts';
import { timeline } from '../data/timeline';
import { themes } from '../data/themes';
import { concepts } from '../data/concepts';
import { traditionName } from '../data/traditions';
import { Callout } from '../components/ui';
import { isDone, markVisited, setDone, subscribeProgress } from '../lib/progress';
import { cx, tint } from '../lib/utils';
import NotFound from './NotFound';

function resolve(link: ExploreLink): { to: string; label: string } | null {
  switch (link.kind) {
    case 'tradition':
      return { to: `/traditions/${link.id}`, label: traditionName(link.id) };
    case 'figure': {
      const n = figureName(link.id);
      return n ? { to: `/personnages/${link.id}`, label: n } : null;
    }
    case 'text': {
      const t = textTitle(link.id);
      return t ? { to: `/textes/${link.id}`, label: t } : null;
    }
    case 'theme': {
      const t = themes.find((x) => x.id === link.id);
      return t ? { to: `/comparaisons/${link.id}`, label: t.title } : null;
    }
    case 'concept': {
      const c = concepts.find((x) => x.id === link.id);
      return c ? { to: `/notions#${link.id}`, label: c.term } : null;
    }
    case 'event': {
      const e = timeline.find((x) => x.id === link.id);
      return e ? { to: `/chronologie#${link.id}`, label: e.title } : null;
    }
    case 'page':
      return link.path ? { to: link.path, label: link.label ?? link.path } : null;
  }
}

export default function CourseChapter() {
  const { id } = useParams();
  const chapter = id ? chaptersById[id] : undefined;

  const [done, setDoneState] = useState(false);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!chapter) return;
    markVisited(chapter.id);
    setRevealed(new Set());
    const sync = () => setDoneState(isDone(chapter.id));
    sync();
    return subscribeProgress(sync);
  }, [chapter]);

  if (!chapter) return <NotFound />;

  const part = parts.find((p) => p.id === chapter.part) ?? parts[0];
  const index = chapters.findIndex((c) => c.id === chapter.id);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <div>
      {/* En-tête ------------------------------------------------------------ */}
      <header
        className="border-b border-ink-200 py-8 sm:py-10"
        style={{ background: `linear-gradient(to bottom, ${tint(part.color, 0.09)}, transparent)` }}
      >
        <div className="container-page">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <Link to="/cours" className="hover:text-ink-900">
              Le cours
            </Link>
            <span aria-hidden>›</span>
            <span>{part.label}</span>
          </nav>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="font-mono text-sm" style={{ color: part.color }}>
              {String(chapter.n).padStart(2, '0')}
            </span>
            <h1 className="font-serif text-2xl font-semibold leading-tight text-ink-950 sm:text-4xl">
              {chapter.title}
            </h1>
          </div>

          <p className="prose-serif mt-4 max-w-3xl text-[1.05rem]">{chapter.question}</p>

          <div className="mt-4 h-1 w-full max-w-md overflow-hidden rounded-full bg-ink-200">
            <div
              className="h-full rounded-full"
              style={{ width: `${((chapter.n - 1) / chapters.length) * 100}%`, backgroundColor: part.color }}
            />
          </div>
          <p className="mt-1.5 text-xs text-ink-500">
            Chapitre {chapter.n} sur {chapters.length} · {chapter.minutes} minutes
          </p>
        </div>
      </header>

      <article className="container-page py-10">
        <div className="mx-auto max-w-3xl">
          {/* Activation ---------------------------------------------------- */}
          <section className="card overflow-hidden">
            <div className="border-b border-ink-100 bg-ink-50/60 px-6 py-3">
              <p className="eyebrow">Ce que vous pensez probablement</p>
            </div>
            <div className="p-6">
              <p className="font-serif text-lg italic leading-relaxed text-ink-800">
                « {chapter.activate.belief} »
              </p>
              <p className="prose-serif mt-4 text-[0.98rem]">{chapter.activate.trouble}</p>
            </div>
          </section>

          {/* Démonstration -------------------------------------------------- */}
          <section className="mt-10 space-y-8">
            {chapter.blocks.map((b, i) => (
              <div key={b.title}>
                <h2 className="flex items-baseline gap-2.5 font-serif text-xl font-semibold text-ink-950">
                  <span className="font-mono text-xs text-ink-400">
                    {chapter.n}.{i + 1}
                  </span>
                  {b.title}
                </h2>
                <p className="prose-serif mt-2.5">{renderEmphasis(b.text)}</p>
              </div>
            ))}
          </section>

          {/* Idée-clé ------------------------------------------------------- */}
          <section className="mt-10">
            <div
              className="rounded-xl border-l-4 p-6"
              style={{ borderColor: part.color, backgroundColor: tint(part.color, 0.07) }}
            >
              <p className="eyebrow mb-2" style={{ color: part.color }}>
                À retenir
              </p>
              <p className="font-serif text-[1.1rem] leading-relaxed text-ink-950">
                {chapter.keyIdea}
              </p>
            </div>
          </section>

          {/* Rappel actif --------------------------------------------------- */}
          <section className="mt-10">
            <h2 className="section-title">Vérifiez que ça tient</h2>
            <p className="mt-1.5 text-sm text-ink-600">
              Répondez mentalement avant d’ouvrir. L’effort de rappel est ce qui fixe la mémoire —
              lire la réponse tout de suite ne sert à rien.
            </p>
            <div className="mt-5 space-y-3">
              {chapter.checks.map((c, i) => {
                const open = revealed.has(i);
                return (
                  <div key={c.q} className="card overflow-hidden">
                    <button
                      onClick={() =>
                        setRevealed((s) => {
                          const n = new Set(s);
                          if (n.has(i)) n.delete(i);
                          else n.add(i);
                          return n;
                        })
                      }
                      className="flex w-full items-start gap-3 px-5 py-4 text-left"
                    >
                      <span className="mt-0.5 font-mono text-xs text-ink-400">{i + 1}</span>
                      <span className="flex-1 font-serif text-[1.02rem] text-ink-900">{c.q}</span>
                      <span className="shrink-0 text-xs text-ink-400">
                        {open ? 'masquer' : 'voir'}
                      </span>
                    </button>
                    {open && (
                      <div
                        className="border-t border-ink-100 px-5 py-4 pl-[3.1rem]"
                        style={{ backgroundColor: tint(part.color, 0.05) }}
                      >
                        <p className="prose-serif text-[0.97rem]">{c.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Intégration ---------------------------------------------------- */}
          <section className="mt-10">
            <h2 className="section-title">Pour aller au détail</h2>
            <p className="mt-1.5 text-sm text-ink-600">
              Les fiches de l’encyclopédie qui prolongent exactement ce chapitre.
            </p>
            <div className="mt-5 space-y-2.5">
              {chapter.explore.map((l) => {
                const r = resolve(l);
                if (!r) return null;
                return (
                  <Link
                    key={`${l.kind}-${l.id}-${l.path ?? ''}`}
                    to={r.to}
                    className="card card-hover flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="font-serif text-[1.02rem] font-semibold text-ink-950">
                      {r.label}
                    </span>
                    <span className="flex-1 text-sm text-ink-600">{l.why}</span>
                    <span className="shrink-0 text-xs text-ink-400">→</span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Progression et navigation -------------------------------------- */}
          <section className="mt-12 border-t border-ink-200 pt-8">
            <button
              onClick={() => setDone(chapter.id, !done)}
              className={cx(
                'w-full rounded-lg border px-5 py-3 text-sm font-medium transition',
                done
                  ? 'border-ink-300 bg-white/60 text-ink-600'
                  : 'border-transparent text-parchment',
              )}
              style={done ? undefined : { backgroundColor: part.color }}
            >
              {done ? '✓ Chapitre terminé — annuler' : 'Marquer ce chapitre comme lu'}
            </button>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {prev ? (
                <Link to={`/cours/${prev.id}`} className="card card-hover p-4">
                  <p className="text-xs text-ink-400">← Chapitre {prev.n}</p>
                  <p className="mt-0.5 font-serif text-[1rem] font-semibold text-ink-950">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <Link to="/commencer" className="card card-hover p-4">
                  <p className="text-xs text-ink-400">← Avant de commencer</p>
                  <p className="mt-0.5 font-serif text-[1rem] font-semibold text-ink-950">
                    Les sept idées
                  </p>
                </Link>
              )}
              {next ? (
                <Link to={`/cours/${next.id}`} className="card card-hover p-4 sm:text-right">
                  <p className="text-xs text-ink-400">Chapitre {next.n} →</p>
                  <p className="mt-0.5 font-serif text-[1rem] font-semibold text-ink-950">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <Link to="/explorer" className="card card-hover p-4 sm:text-right">
                  <p className="text-xs text-ink-400">Le cours est fini →</p>
                  <p className="mt-0.5 font-serif text-[1rem] font-semibold text-ink-950">
                    Explorer l’encyclopédie
                  </p>
                </Link>
              )}
            </div>

            {!next && (
              <div className="mt-6">
                <Callout label="Ce que vous savez faire maintenant" tone="neutral">
                  Situer une tradition dans le temps et dans l’espace, distinguer ce qu’elle affirme
                  de ce que l’histoire établit, repérer un emprunt et le peser, reconnaître une
                  couche textuelle, et poser les bonnes questions à n’importe quelle affirmation
                  rencontrée ailleurs. C’est le socle : le reste de l’atlas devient utilisable.
                </Callout>
              </div>
            )}
          </section>
        </div>
      </article>
    </div>
  );
}

/** Rend les **passages en gras** du texte source, sans dépendance markdown. */
function renderEmphasis(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} className="font-semibold text-ink-950">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}
