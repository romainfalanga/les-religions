import { useState } from 'react';
import { Link } from 'react-router-dom';
import { canonLadder, mechanisms, stageInfo, stages } from '../data/emergence';
import type { Mechanism } from '../data/emergence';
import { figureName } from '../data/figures';
import { textTitle } from '../data/texts';
import { timeline } from '../data/timeline';
import { traditionColor, traditionName } from '../data/traditions';
import { Callout, PageHeader } from '../components/ui';
import { cx, tint } from '../lib/utils';

const eventTitle = (id: string) => timeline.find((e) => e.id === id)?.title ?? id;

export default function Emergence() {
  const [stage, setStage] = useState<Mechanism['stage'] | 'all'>('all');
  const [open, setOpen] = useState<string | null>(mechanisms[0].id);

  const list = mechanisms.filter((m) => (stage === 'all' ? true : m.stage === stage));

  return (
    <div>
      <PageHeader
        eyebrow={`${mechanisms.length} mécanismes`}
        title="Comment une religion naît"
        lead="Les pages précédentes racontent ce qui s’est passé. Celle-ci décrit comment cela se passe : les mécanismes récurrents par lesquels une prédication devient un mouvement, un mouvement une institution, une institution une civilisation — et pourquoi chacun de ces passages a un coût."
      >
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setStage('all')}
            className={cx(
              'rounded-full border px-3 py-1.5 text-xs transition',
              stage === 'all'
                ? 'border-ink-900 bg-ink-900 text-parchment'
                : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
            )}
          >
            Tout le cycle
          </button>
          {stages.map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={cx(
                'rounded-full border px-3 py-1.5 text-xs transition',
                stage === s ? 'text-white' : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
              )}
              style={
                stage === s
                  ? { backgroundColor: stageInfo[s].color, borderColor: stageInfo[s].color }
                  : undefined
              }
            >
              {stageInfo[s].label}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="container-page py-10">
        {/* Le cycle en cinq temps ------------------------------------------- */}
        <section className="mb-12">
          <h2 className="section-title mb-1">Le cycle</h2>
          <p className="mb-5 max-w-3xl text-sm text-ink-600">
            Ce n’est pas une loi, et l’ordre n’est pas strict : des traditions sautent des étapes,
            d’autres les parcourent plusieurs fois. Mais aucune n’en évite la totalité.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => {
              const info = stageInfo[s];
              const count = mechanisms.filter((m) => m.stage === s).length;
              return (
                <button
                  key={s}
                  onClick={() => setStage(s)}
                  className="card card-hover p-5 text-left"
                  style={{ borderColor: tint(info.color, 0.35) }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs" style={{ color: info.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{info.label}</h3>
                  </div>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">{info.text}</p>
                  <p className="mt-3 text-xs" style={{ color: info.color }}>
                    {count} mécanisme{count > 1 ? 's' : ''}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Les mécanismes ---------------------------------------------------- */}
        <section className="space-y-4">
          {list.map((m) => {
            const info = stageInfo[m.stage];
            const isOpen = open === m.id;
            return (
              <article
                key={m.id}
                id={m.id}
                className="card scroll-mt-24 overflow-hidden"
                style={{ borderColor: isOpen ? tint(info.color, 0.4) : undefined }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : m.id)}
                  className="flex w-full items-start gap-4 p-6 text-left"
                >
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: info.color }}
                  />
                  <div className="flex-1">
                    <p className="eyebrow" style={{ color: info.color }}>
                      {info.label}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-ink-950">{m.title}</h3>
                    <p className="prose-serif mt-1.5 text-[1rem] italic">{m.claim}</p>
                  </div>
                  <span className="mt-1 shrink-0 text-ink-400">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="border-t border-ink-100 px-6 pb-6 pt-5 sm:px-14">
                    <p className="prose-serif">{m.description}</p>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
                      <div>
                        <p className="eyebrow mb-3">Les cas</p>
                        <div className="space-y-4">
                          {m.cases.map((c) => {
                            const color = traditionColor(c.tradition);
                            return (
                              <div
                                key={c.title}
                                className="rounded-lg border-l-2 bg-white/50 py-3 pl-5 pr-4"
                                style={{ borderColor: tint(color, 0.55) }}
                              >
                                <div className="flex flex-wrap items-baseline gap-2">
                                  <h4 className="font-serif text-[1.05rem] font-semibold text-ink-950">
                                    {c.title}
                                  </h4>
                                  <Link
                                    to={`/traditions/${c.tradition}`}
                                    className="chip"
                                    style={{
                                      borderColor: tint(color, 0.35),
                                      backgroundColor: tint(color, 0.08),
                                      color,
                                    }}
                                  >
                                    {traditionName(c.tradition)}
                                  </Link>
                                </div>
                                <p className="prose-serif mt-1.5 text-[0.97rem]">{c.text}</p>
                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                  {c.figures?.map((f) => (
                                    <Link
                                      key={f}
                                      to={`/personnages/${f}`}
                                      className="chip border-ink-200 bg-ink-50 text-ink-600 hover:border-ink-400"
                                    >
                                      {figureName(f) ?? f}
                                    </Link>
                                  ))}
                                  {c.texts?.map((t) => (
                                    <Link
                                      key={t}
                                      to={`/textes/${t}`}
                                      className="chip border-ink-200 bg-ink-50 text-ink-600 hover:border-ink-400"
                                    >
                                      {textTitle(t) ?? t}
                                    </Link>
                                  ))}
                                  {c.events?.map((e) => (
                                    <Link
                                      key={e}
                                      to={`/chronologie#${e}`}
                                      className="chip border-ink-200 bg-ink-50 text-ink-600 hover:border-ink-400"
                                    >
                                      ⌛ {eventTitle(e)}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <aside className="space-y-4">
                        <div className="rounded-lg border border-ink-200 bg-ink-50/60 p-4">
                          <p className="eyebrow mb-2">À quoi on le reconnaît</p>
                          <ul className="space-y-1.5">
                            {m.signals.map((s) => (
                              <li key={s} className="flex gap-2 text-[0.85rem] leading-relaxed text-ink-700">
                                <span style={{ color: info.color }}>—</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Callout label="Ce que ce mécanisme n’explique pas" tone="warning">
                          {m.limit}
                        </Callout>
                      </aside>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {/* L'échelle de canonisation ----------------------------------------- */}
        <section id="canon" className="mt-16 scroll-mt-24">
          <h2 className="section-title mb-1">Comment un texte devient une Écriture</h2>
          <p className="mb-6 max-w-3xl text-sm text-ink-600">
            Aucun texte sacré n’est né sacré. Il le devient par une série d’opérations dont chacune
            laisse des traces repérables — et dont l’atelier de traduction montre la dernière à
            l’œuvre.
          </p>
          <ol className="relative space-y-4 border-l border-ink-200 pl-6 sm:pl-8">
            {canonLadder.map((s) => (
              <li key={s.step} className="relative">
                <span className="absolute -left-[1.9rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-ink-900 font-mono text-[0.65rem] text-parchment sm:-left-[2.4rem]">
                  {s.step}
                </span>
                <div className="card p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink-950">{s.title}</h3>
                  <p className="prose-serif mt-1.5 text-[0.97rem]">{s.text}</p>
                  <p className="mt-2.5 border-t border-ink-100 pt-2.5 text-xs italic leading-relaxed text-ink-600">
                    {s.example}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link to="/atelier" className="card card-hover p-6">
              <p className="eyebrow">Étape 8, en pratique</p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-ink-950">
                Atelier de traduction →
              </h3>
              <p className="prose-serif mt-2 text-[0.95rem]">
                Les textes dans leur écriture d’origine, confrontés à leurs traductions françaises
                successives : le moment exact où le sens bascule.
              </p>
            </Link>
            <Link to="/carte" className="card card-hover p-6">
              <p className="eyebrow">Étapes 3 à 5, en géographie</p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-ink-950">
                Carte des circulations →
              </h3>
              <p className="prose-serif mt-2 text-[0.95rem]">
                Où les textes ont été écrits, les conciles tenus, les routes empruntées — et à quelle
                époque.
              </p>
            </Link>
          </div>
        </section>

        <div className="mt-12">
          <Callout label="Une mise en garde méthodologique" tone="neutral">
            Décrire des mécanismes n’est pas expliquer une religion par eux. Une même mécanique de
            crise produit un mouvement pacifiste ici, militaire ailleurs, et rien du tout la plupart
            du temps. Ce que ces pages offrent est un jeu de questions à poser à un cas — pas une
            machine à en déduire la réponse. La différence entre les deux est exactement ce qui
            sépare l’histoire des religions de la théorie qui prétend s’en passer.
          </Callout>
        </div>
      </div>
    </div>
  );
}
