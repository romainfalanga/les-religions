import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { chapters, parts, totalMinutes } from '../data/course';
import { PageHeader, Callout } from '../components/ui';
import { getDone, getLast, resetProgress, subscribeProgress } from '../lib/progress';
import { cx, tint } from '../lib/utils';

export default function Course() {
  const [done, setDone] = useState<string[]>([]);
  const [last, setLast] = useState<string | undefined>();

  useEffect(() => {
    const sync = () => {
      setDone(getDone());
      setLast(getLast());
    };
    sync();
    return subscribeProgress(sync);
  }, []);

  const doneSet = new Set(done);
  const nextChapter = chapters.find((c) => !doneSet.has(c.id)) ?? chapters[0];
  const pct = Math.round((doneSet.size / chapters.length) * 100);

  return (
    <div>
      <PageHeader
        eyebrow={`12 chapitres · ${totalMinutes} minutes`}
        title="Le cours"
        lead="Une traversée ordonnée, de la question « qu’est-ce qu’une religion ? » à « comment sait-on ce qu’on sait ? ». Chaque chapitre part d’un problème, désamorce une idée reçue, expose l’essentiel en trois ou quatre blocs, puis vous fait rappeler ce que vous venez de lire — parce que se tester retient mieux que relire."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={`/cours/${nextChapter.id}`}
            className="rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-medium text-parchment transition hover:bg-ink-800"
          >
            {doneSet.size === 0
              ? 'Commencer par le chapitre 1'
              : doneSet.size === chapters.length
                ? 'Relire le chapitre 1'
                : `Reprendre au chapitre ${nextChapter.n}`}
          </Link>
          {last && !doneSet.has(last) && last !== nextChapter.id && (
            <Link to={`/cours/${last}`} className="link-underline text-sm text-ink-600">
              Ou revenir où vous vous étiez arrêté
            </Link>
          )}
        </div>

        {doneSet.size > 0 && (
          <div className="mt-5 max-w-md">
            <div className="flex items-baseline justify-between text-xs text-ink-500">
              <span>
                {doneSet.size} chapitre{doneSet.size > 1 ? 's' : ''} sur {chapters.length}
              </span>
              <button onClick={() => resetProgress()} className="hover:text-ink-900">
                réinitialiser
              </button>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-200">
              <div className="h-full rounded-full bg-ink-800 transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}
      </PageHeader>

      <div className="container-page py-10">
        {parts.map((part) => {
          const list = chapters.filter((c) => c.part === part.id);
          return (
            <section key={part.id} className="mb-10">
              <div className="mb-4 border-l-2 pl-4" style={{ borderColor: part.color }}>
                <h2 className="font-serif text-xl font-semibold text-ink-950">{part.label}</h2>
                <p className="mt-1 max-w-3xl text-sm text-ink-600">{part.description}</p>
              </div>

              <ol className="space-y-3">
                {list.map((c) => {
                  const isDoneHere = doneSet.has(c.id);
                  return (
                    <li key={c.id}>
                      <Link
                        to={`/cours/${c.id}`}
                        className="card card-hover flex gap-4 p-5"
                        style={{ borderLeftColor: part.color, borderLeftWidth: 3 }}
                      >
                        <span
                          className={cx(
                            'grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs',
                            isDoneHere ? 'text-parchment' : 'border border-ink-300 text-ink-500',
                          )}
                          style={isDoneHere ? { backgroundColor: part.color } : undefined}
                          aria-hidden
                        >
                          {isDoneHere ? '✓' : String(c.n).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-3">
                            <h3 className="font-serif text-lg font-semibold text-ink-950">{c.title}</h3>
                            <span className="text-[0.7rem] text-ink-400">{c.minutes} min</span>
                          </div>
                          <p className="prose-serif mt-1 text-[0.95rem] italic">{c.question}</p>
                          <p
                            className="mt-2 text-xs leading-relaxed"
                            style={{ color: tint(part.color, 0.95) }}
                          >
                            Idée reçue traitée : {c.activate.belief}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}

        <Callout label="Pourquoi ce cours est construit ainsi" tone="info">
          Quatre principes, empruntés à la recherche en pédagogie. <strong>Un problème d’abord</strong> :
          on retient mieux ce qui répond à une question qu’on s’est posée (Merrill). <strong>L’idée
          reçue nommée</strong> : une conception erronée non explicitée résiste à l’enseignement et
          revient intacte. <strong>La charge bornée</strong> : quatre blocs maximum par chapitre,
          aucun choix à faire en cours de lecture, parce que la mémoire de travail sature vite
          (Sweller). <strong>Le rappel plutôt que la relecture</strong> : se tester produit une
          rétention nettement supérieure à relire, même quand la relecture donne l’impression
          inverse.
        </Callout>
      </div>
    </div>
  );
}
