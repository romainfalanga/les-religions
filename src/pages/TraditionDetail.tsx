import { Link, useParams } from 'react-router-dom';
import { getTradition, traditionName } from '../data/traditions';
import { figuresById } from '../data/figures';
import { textsById } from '../data/texts';
import { timeline } from '../data/timeline';
import { influences } from '../data/influences';
import { Callout, Chip, Prose, Section, SectionList } from '../components/ui';
import { tint } from '../lib/utils';
import NotFound from './NotFound';

export default function TraditionDetail() {
  const { id } = useParams();
  const t = id ? getTradition(id) : undefined;
  if (!t) return <NotFound />;

  const events = timeline
    .filter((e) => e.traditions.includes(t.id))
    .sort((a, b) => a.year - b.year);

  const relatedInfluences = influences.filter((i) => i.from === t.id || i.to === t.id);

  return (
    <article>
      <header className="border-b border-ink-200" style={{ backgroundColor: tint(t.color, 0.07) }}>
        <div className="container-page py-10 sm:py-14">
          <Link to="/traditions" className="text-xs text-ink-500 hover:text-ink-800">
            ← Toutes les traditions
          </Link>
          <div className="mt-5 flex flex-wrap items-start gap-5">
            <span
              className="grid h-16 w-16 place-items-center rounded-xl text-3xl"
              style={{ backgroundColor: tint(t.color, 0.18), color: t.color }}
            >
              {t.symbol}
            </span>
            <div className="min-w-0 flex-1">
              <h1 className="font-serif text-3xl font-semibold text-ink-950 sm:text-[2.6rem]">{t.name}</h1>
              {t.altNames && <p className="mt-1 text-sm text-ink-500">{t.altNames.join(' · ')}</p>}
              <p className="prose-serif mt-3 max-w-3xl">{t.tagline}</p>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-ink-200/70 pt-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Apparition</dt>
              <dd className="mt-1 text-ink-800">{t.founded}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Origine</dt>
              <dd className="mt-1 text-ink-800">{t.origin}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Fidèles</dt>
              <dd className="mt-1 text-ink-800">{t.adherents}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Famille</dt>
              <dd className="mt-1 capitalize text-ink-800">{t.family}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container-page">
        <Section>
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h2 className="section-title">En bref</h2>
              <Prose>
                <p className="mt-4">{t.summary}</p>
              </Prose>
            </div>
            <div className="space-y-4">
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: tint(t.color, 0.35), backgroundColor: tint(t.color, 0.07) }}
              >
                <p className="eyebrow mb-2">L’essence</p>
                <p className="font-serif text-[1.02rem] leading-relaxed text-ink-900">{t.essence}</p>
              </div>
              <div className="rounded-lg border border-ink-200 bg-white/60 p-5">
                <p className="eyebrow mb-2">La question centrale</p>
                <p className="font-serif italic leading-relaxed text-ink-800">{t.centralQuestion}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Croyances centrales" id="croyances">
          <SectionList items={t.coreBeliefs} />
        </Section>

        <Section title="Pratiques" id="pratiques">
          <div className="grid gap-4 md:grid-cols-2">
            {t.practices.map((p) => (
              <div key={p.title} className="card p-5">
                <h3 className="font-serif text-lg font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-700">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Éthique" id="ethique">
          <SectionList items={t.ethics} />
        </Section>

        <Section title="Histoire" id="histoire" subtitle="Les étapes qui expliquent la forme actuelle de la tradition.">
          <ol className="space-y-6">
            {t.history.map((h, i) => (
              <li key={h.title} className="flex gap-5">
                <span
                  className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold"
                  style={{ backgroundColor: tint(t.color, 0.16), color: t.color }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink-950">{h.title}</h3>
                  <p className="prose-serif mt-1.5">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {t.branches.length > 0 && (
          <Section title="Branches et courants" id="branches">
            <div className="space-y-3">
              {t.branches.map((b) => (
                <div key={b.name} className="card flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
                  <div className="sm:w-64 sm:shrink-0">
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{b.name}</h3>
                    <p className="text-xs text-ink-500">{b.when}</p>
                  </div>
                  <p className="text-[0.93rem] leading-relaxed text-ink-700">{b.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Idées reçues" id="idees-recues" subtitle="Ce qu’on entend souvent, et ce que les sources permettent réellement de dire.">
          <div className="space-y-4">
            {t.misconceptions.map((m) => (
              <div key={m.claim} className="card overflow-hidden">
                <p className="border-b border-ink-200 bg-ink-50 px-5 py-3 text-[0.93rem] font-medium text-ink-700">
                  {m.claim}
                </p>
                <p className="px-5 py-4 text-[0.93rem] leading-relaxed text-ink-800">{m.reality}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Apport au patrimoine humain" id="apport">
          <Callout label="Ce que cette tradition a introduit">{t.contribution}</Callout>
        </Section>

        <Section title="Débats vivants" id="debats" subtitle="Ce qui se discute aujourd’hui à l’intérieur de la tradition.">
          <ul className="grid gap-2 sm:grid-cols-2">
            {t.livingDebates.map((d) => (
              <li key={d} className="flex gap-3 rounded-md border border-ink-200 bg-white/50 px-4 py-3 text-sm text-ink-700">
                <span className="text-ink-400">·</span>
                {d}
              </li>
            ))}
          </ul>
        </Section>

        {(t.keyFigures.length > 0 || t.keyTexts.length > 0) && (
          <Section title="Figures et textes" id="figures-textes">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="eyebrow mb-3">Personnages majeurs</h3>
                <div className="flex flex-wrap gap-2">
                  {t.keyFigures
                    .filter((f) => figuresById.has(f))
                    .map((f) => (
                      <Link
                        key={f}
                        to={`/personnages/${f}`}
                        className="rounded-full border border-ink-200 bg-white/60 px-3 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                      >
                        {figuresById.get(f)!.name}
                      </Link>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="eyebrow mb-3">Textes</h3>
                <div className="flex flex-wrap gap-2">
                  {t.keyTexts
                    .filter((x) => textsById.has(x))
                    .map((x) => (
                      <Link
                        key={x}
                        to={`/textes/${x}`}
                        className="rounded-full border border-ink-200 bg-white/60 px-3 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                      >
                        {textsById.get(x)!.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {relatedInfluences.length > 0 && (
          <Section title="Influences" id="influences" subtitle="Ce que cette tradition a reçu et transmis.">
            <div className="space-y-3">
              {relatedInfluences.map((inf, i) => (
                <div key={i} className="card p-5">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Link to={`/traditions/${inf.from}`} className="font-medium text-ink-900 hover:underline">
                      {traditionName(inf.from)}
                    </Link>
                    <span className="text-ink-400">→</span>
                    <Link to={`/traditions/${inf.to}`} className="font-medium text-ink-900 hover:underline">
                      {traditionName(inf.to)}
                    </Link>
                    <Chip>{inf.type}</Chip>
                    <span className="text-xs text-ink-500">{inf.period}</span>
                  </div>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-700">{inf.detail}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {events.length > 0 && (
          <Section title="Repères chronologiques" id="chronologie">
            <ol className="border-l-2 border-ink-200 pl-6">
              {events.map((e) => (
                <li key={e.id} className="relative pb-6 last:pb-0">
                  <span
                    className="absolute -left-[1.83rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-parchment"
                    style={{ backgroundColor: t.color }}
                  />
                  <p className="text-xs font-medium text-ink-500">{e.displayDate}</p>
                  <h3 className="font-serif text-base font-semibold text-ink-950">{e.title}</h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-600">{e.description}</p>
                </li>
              ))}
            </ol>
            <Link to="/chronologie" className="link-underline mt-6 inline-block text-sm text-ink-700">
              Voir la chronologie générale →
            </Link>
          </Section>
        )}
      </div>
    </article>
  );
}
