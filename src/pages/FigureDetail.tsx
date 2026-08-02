import { Link, useParams } from 'react-router-dom';
import { figuresById, getFigure, historicityLabels, inboundRelations } from '../data/figures';
import { traditionColor, traditionName } from '../data/traditions';
import { textsById } from '../data/texts';
import { timeline } from '../data/timeline';
import { Callout, Prose, QuoteBlock, Section, SectionList } from '../components/ui';
import { tint } from '../lib/utils';
import NotFound from './NotFound';

export default function FigureDetail() {
  const { id } = useParams();
  const f = id ? getFigure(id) : undefined;
  if (!f) return <NotFound />;

  const hist = historicityLabels[f.historicity];
  const inbound = inboundRelations(f.id);
  const events = timeline.filter((e) => e.figures?.includes(f.id));
  const mainColor = f.traditions[0] ? traditionColor(f.traditions[0]) : '#8d7f68';

  return (
    <article>
      <header className="border-b border-ink-200" style={{ backgroundColor: tint(mainColor, 0.06) }}>
        <div className="container-page py-10 sm:py-14">
          <Link to="/personnages" className="text-xs text-ink-500 hover:text-ink-800">
            ← Tous les personnages
          </Link>

          <div className="mt-5 flex flex-wrap items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <h1 className="font-serif text-3xl font-semibold text-ink-950 sm:text-[2.6rem]">{f.name}</h1>
              {f.altNames && <p className="mt-1 text-sm text-ink-500">{f.altNames.join(' · ')}</p>}
              <p className="mt-3 text-[1.02rem] text-ink-700">{f.role}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-ink-600">
                <span>{f.dates}</span>
                <span>{f.region}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {f.traditions.map((t) => (
                <Link
                  key={t}
                  to={`/traditions/${t}`}
                  className="chip transition hover:opacity-80"
                  style={{
                    borderColor: tint(traditionColor(t), 0.4),
                    backgroundColor: tint(traditionColor(t), 0.1),
                    color: traditionColor(t),
                  }}
                >
                  {traditionName(t)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container-page">
        <Section>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <Prose>
                <p className="text-[1.08rem]">{f.summary}</p>
              </Prose>
              <div className="mt-6 rounded-lg border-l-4 border-ink-800 bg-ink-50 p-5">
                <p className="eyebrow mb-1.5">Pourquoi ce personnage compte</p>
                <p className="font-serif text-[1.02rem] leading-relaxed text-ink-900">{f.whyItMatters}</p>
              </div>
            </div>

            <aside
              className="h-fit rounded-lg border p-5"
              style={{ borderColor: tint(hist.color, 0.4), backgroundColor: tint(hist.color, 0.06) }}
            >
              <p className="eyebrow mb-2">Historicité</p>
              <p className="font-serif text-xl font-semibold" style={{ color: hist.color }}>
                {hist.label}
              </p>
              <p className="mt-1 text-xs text-ink-500">{hist.description}</p>
              <p className="mt-3 border-t border-ink-200/60 pt-3 text-[0.88rem] leading-relaxed text-ink-700">
                {f.historicityNote}
              </p>
            </aside>
          </div>
        </Section>

        {f.life.length > 0 && (
          <Section title="Vie et parcours" id="vie">
            <ol className="space-y-6">
              {f.life.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span
                    className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold"
                    style={{ backgroundColor: tint(mainColor, 0.15), color: mainColor }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{s.title}</h3>
                    <p className="prose-serif mt-1.5">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {f.teachings.length > 0 && (
          <Section
            title="Enseignement"
            id="enseignement"
            subtitle="Ce que ce personnage a énoncé, incarné, ou fait advenir."
          >
            <SectionList items={f.teachings} />
          </Section>
        )}

        {f.quotes.length > 0 && (
          <Section title="Paroles" id="paroles">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {f.quotes.map((q) => (
                <QuoteBlock key={q.text} {...q} />
              ))}
            </div>
          </Section>
        )}

        {f.crossViews && f.crossViews.length > 0 && (
          <Section
            title="Lecture croisée"
            id="lectures"
            subtitle="Comment différentes traditions voient le même personnage — l’écart est souvent plus instructif que l’accord."
          >
            <div className="space-y-3">
              {f.crossViews.map((v) => (
                <div
                  key={v.tradition}
                  className="card flex flex-col gap-2 p-5 sm:flex-row sm:gap-6"
                  style={{ borderLeftColor: traditionColor(v.tradition), borderLeftWidth: 3 }}
                >
                  <Link
                    to={`/traditions/${v.tradition}`}
                    className="font-serif text-base font-semibold hover:underline sm:w-44 sm:shrink-0"
                    style={{ color: traditionColor(v.tradition) }}
                  >
                    {traditionName(v.tradition)}
                  </Link>
                  <p className="text-[0.93rem] leading-relaxed text-ink-700">{v.view}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Postérité" id="posterite">
          <Callout>{f.legacy}</Callout>
        </Section>

        {(f.relations.length > 0 || inbound.length > 0) && (
          <Section title="Relations" id="relations">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {f.relations.filter((r) => figuresById.has(r.figureId)).length > 0 && (
                <div>
                  <h3 className="eyebrow mb-3">Liens déclarés</h3>
                  <ul className="space-y-2">
                    {f.relations
                      .filter((r) => figuresById.has(r.figureId))
                      .map((r) => (
                        <li key={r.figureId}>
                          <Link
                            to={`/personnages/${r.figureId}`}
                            className="flex items-baseline gap-2 rounded-md border border-ink-200 bg-white/50 px-4 py-2.5 text-sm transition hover:border-ink-400"
                          >
                            <span className="font-medium text-ink-900">{figuresById.get(r.figureId)!.name}</span>
                            <span className="text-xs text-ink-500">— {r.label}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              {inbound.length > 0 && (
                <div>
                  <h3 className="eyebrow mb-3">Cité par</h3>
                  <ul className="space-y-2">
                    {inbound.map((r) => (
                      <li key={r.figure.id}>
                        <Link
                          to={`/personnages/${r.figure.id}`}
                          className="flex items-baseline gap-2 rounded-md border border-ink-200 bg-white/50 px-4 py-2.5 text-sm transition hover:border-ink-400"
                        >
                          <span className="font-medium text-ink-900">{r.figure.name}</span>
                          <span className="text-xs text-ink-500">— {r.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>
        )}

        {f.texts.filter((t) => textsById.has(t)).length > 0 && (
          <Section title="Textes associés" id="textes">
            <div className="flex flex-wrap gap-2">
              {f.texts
                .filter((t) => textsById.has(t))
                .map((t) => (
                  <Link
                    key={t}
                    to={`/textes/${t}`}
                    className="rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                  >
                    {textsById.get(t)!.title}
                  </Link>
                ))}
            </div>
          </Section>
        )}

        {events.length > 0 && (
          <Section title="Dans la chronologie" id="chronologie">
            <ul className="space-y-2">
              {events.map((e) => (
                <li key={e.id}>
                  <Link
                    to={`/chronologie#${e.id}`}
                    className="flex flex-col gap-0.5 rounded-md border border-ink-200 bg-white/50 px-4 py-3 transition hover:border-ink-400 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="font-mono text-xs text-ink-500 sm:w-40 sm:shrink-0">{e.displayDate}</span>
                    <span className="text-sm text-ink-800">{e.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </article>
  );
}
