import { Link, useParams } from 'react-router-dom';
import { themes } from '../data/themes';
import { traditionColor, traditionName } from '../data/traditions';
import { Callout, Prose, Section } from '../components/ui';
import NotFound from './NotFound';

export default function ThemeDetail() {
  const { id } = useParams();
  const t = themes.find((x) => x.id === id);
  if (!t) return <NotFound />;

  return (
    <article>
      <header className="border-b border-ink-200 bg-gradient-to-b from-white/70 to-transparent py-10 sm:py-14">
        <div className="container-page">
          <Link to="/comparaisons" className="text-xs text-ink-500 hover:text-ink-800">
            ← Toutes les comparaisons
          </Link>
          <div className="mt-5 flex items-start gap-5">
            <span className="text-4xl text-ink-400">{t.icon}</span>
            <div>
              <h1 className="font-serif text-3xl font-semibold text-ink-950 sm:text-[2.6rem]">{t.title}</h1>
              <p className="mt-3 max-w-3xl font-serif text-lg italic text-ink-600">{t.question}</p>
            </div>
          </div>
          <Prose>
            <p className="mt-6">{t.summary}</p>
          </Prose>
        </div>
      </header>

      <div className="container-page">
        <Section title="Les positions" id="positions">
          <div className="space-y-3">
            {t.positions.map((p, i) => {
              const color = traditionColor(p.traditionId);
              return (
                <div
                  key={`${p.traditionId}-${i}`}
                  className="card overflow-hidden"
                  style={{ borderLeftColor: color, borderLeftWidth: 4 }}
                >
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-6">
                    <div className="sm:w-52 sm:shrink-0">
                      <Link
                        to={`/traditions/${p.traditionId}`}
                        className="font-serif text-base font-semibold hover:underline"
                        style={{ color }}
                      >
                        {traditionName(p.traditionId)}
                      </Link>
                      <p className="mt-1 text-[0.82rem] font-medium text-ink-600">{p.label}</p>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-ink-800">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="lecture">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-300/50 bg-emerald-50/50 p-5">
              <h2 className="eyebrow mb-3 text-emerald-800">Ce qui converge</h2>
              <ul className="space-y-2.5">
                {t.convergences.map((c) => (
                  <li key={c} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-ink-800">
                    <span className="mt-1 text-emerald-600">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-rose-300/50 bg-rose-50/40 p-5">
              <h2 className="eyebrow mb-3 text-rose-800">Ce qui diverge</h2>
              <ul className="space-y-2.5">
                {t.divergences.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-ink-800">
                    <span className="mt-1 text-rose-500">↔</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Analyse" id="analyse">
          <Callout label="Comment lire ces écarts">{t.analysis}</Callout>
        </Section>

        <Section title="Autres comparaisons" id="autres">
          <div className="flex flex-wrap gap-2">
            {themes
              .filter((x) => x.id !== t.id)
              .map((x) => (
                <Link
                  key={x.id}
                  to={`/comparaisons/${x.id}`}
                  className="rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                >
                  {x.icon} {x.title}
                </Link>
              ))}
          </div>
        </Section>
      </div>
    </article>
  );
}
