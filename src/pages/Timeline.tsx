import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryLabels, eras, timeline } from '../data/timeline';
import { traditionColor, traditionName, traditions } from '../data/traditions';
import { figuresById } from '../data/figures';
import { PageHeader } from '../components/ui';
import { cx, normalize, tint } from '../lib/utils';

export default function Timeline() {
  const [tradition, setTradition] = useState('all');
  const [category, setCategory] = useState('all');
  const [era, setEra] = useState('all');
  const [importance, setImportance] = useState(3);
  const [q, setQ] = useState('');

  const usedTraditions = useMemo(() => {
    const set = new Set<string>();
    timeline.forEach((e) => e.traditions.forEach((t) => set.add(t)));
    return traditions.filter((t) => set.has(t.id));
  }, []);

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    const eraDef = eras.find((e) => e.id === era);
    return timeline
      .filter((e) => (tradition === 'all' ? true : e.traditions.includes(tradition)))
      .filter((e) => (category === 'all' ? true : e.category === category))
      .filter((e) => (eraDef ? e.year >= eraDef.from && e.year < eraDef.to : true))
      .filter((e) => e.importance <= importance)
      .filter((e) => (nq.length < 2 ? true : normalize([e.title, e.description].join(' ')).includes(nq)))
      .sort((a, b) => a.year - b.year);
  }, [tradition, category, era, importance, q]);

  return (
    <div>
      <PageHeader
        eyebrow={`${timeline.length} événements`}
        title="Chronologie des religions"
        lead="De Göbekli Tepe (9600 av. J.-C.) à aujourd’hui. Les repères archéologiques y côtoient les fondations, les schismes, les textes, les réformes et les conflits — parce qu’aucun de ces registres ne s’explique sans les autres."
      >
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            <FilterButton active={era === 'all'} onClick={() => setEra('all')}>
              Toutes les époques
            </FilterButton>
            {eras.map((e) => (
              <FilterButton key={e.id} active={era === e.id} onClick={() => setEra(e.id)} title={e.description}>
                {e.label}
              </FilterButton>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <FilterButton active={tradition === 'all'} onClick={() => setTradition('all')}>
              Toutes traditions
            </FilterButton>
            {usedTraditions.map((t) => (
              <button
                key={t.id}
                onClick={() => setTradition(t.id)}
                className={cx(
                  'rounded-full border px-2.5 py-1 text-[0.72rem] transition',
                  tradition === t.id ? 'text-white' : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
                )}
                style={tradition === t.id ? { backgroundColor: t.color, borderColor: t.color } : undefined}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <FilterButton active={category === 'all'} onClick={() => setCategory('all')}>
              Tous types
            </FilterButton>
            {Object.entries(categoryLabels).map(([key, v]) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className="rounded-full border px-2.5 py-1 text-[0.72rem] transition"
                style={
                  category === key
                    ? { backgroundColor: v.color, borderColor: v.color, color: 'white' }
                    : { borderColor: tint(v.color, 0.35), color: v.color }
                }
              >
                {v.label}
              </button>
            ))}

            <div className="ml-auto flex items-center gap-3">
              <label className="flex items-center gap-2 text-[0.72rem] text-ink-500">
                Densité
                <input
                  type="range"
                  min={1}
                  max={3}
                  value={importance}
                  onChange={(e) => setImportance(Number(e.target.value))}
                  className="w-24 accent-ink-800"
                />
              </label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filtrer…"
                className="w-36 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs outline-none focus:border-ink-400"
              />
            </div>
          </div>
        </div>
      </PageHeader>

      <div className="container-page py-10">
        <p className="mb-8 text-sm text-ink-500">
          {list.length} événement{list.length > 1 ? 's' : ''} affiché{list.length > 1 ? 's' : ''}
          {importance < 3 && ' · seuls les jalons majeurs'}
        </p>

        <div className="relative">
          <div className="timeline-rail absolute left-[9rem] top-0 hidden h-full w-px sm:block" />
          <div className="timeline-rail absolute left-2 top-0 h-full w-px sm:hidden" />

          <ol className="space-y-7">
            {list.map((e) => {
              const cat = categoryLabels[e.category];
              return (
                <li key={e.id} id={e.id} className="relative scroll-mt-24 pl-8 sm:pl-0">
                  <div className="sm:flex sm:gap-8">
                    <div className="sm:w-[9rem] sm:shrink-0 sm:pt-0.5 sm:text-right">
                      <p className="font-mono text-[0.7rem] font-medium leading-snug text-ink-600">{e.displayDate}</p>
                    </div>

                    <span
                      className="absolute left-[0.28rem] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-parchment sm:left-[8.79rem]"
                      style={{ backgroundColor: cat.color }}
                    />

                    <div className="min-w-0 flex-1 sm:pl-8">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2
                          className={cx(
                            'font-serif font-semibold text-ink-950',
                            e.importance === 1 ? 'text-xl' : 'text-lg',
                          )}
                        >
                          {e.title}
                        </h2>
                        <span
                          className="chip"
                          style={{
                            borderColor: tint(cat.color, 0.35),
                            backgroundColor: tint(cat.color, 0.09),
                            color: cat.color,
                          }}
                        >
                          {cat.label}
                        </span>
                        {e.place && <span className="text-xs text-ink-400">{e.place}</span>}
                      </div>

                      <p className="prose-serif mt-2 max-w-3xl text-[0.95rem]">{e.description}</p>

                      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                        {e.traditions.map((tr) => (
                          <Link
                            key={tr}
                            to={`/traditions/${tr}`}
                            className="text-[0.7rem] transition hover:underline"
                            style={{ color: traditionColor(tr) }}
                          >
                            {traditionName(tr)}
                          </Link>
                        ))}
                        {e.figures
                          ?.filter((f) => figuresById.has(f))
                          .map((f) => (
                            <Link
                              key={f}
                              to={`/personnages/${f}`}
                              className="rounded border border-ink-200 px-1.5 py-0.5 text-[0.68rem] text-ink-600 transition hover:border-ink-400"
                            >
                              {figuresById.get(f)!.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {list.length === 0 && (
          <p className="py-16 text-center text-sm text-ink-500">Aucun événement ne correspond à ces filtres.</p>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
  title,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={cx(
        'rounded-full border px-2.5 py-1 text-[0.72rem] transition',
        active
          ? 'border-ink-900 bg-ink-900 text-parchment'
          : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
      )}
    >
      {children}
    </button>
  );
}
