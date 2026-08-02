import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { families, traditions } from '../data/traditions';
import { PageHeader } from '../components/ui';
import { cx, normalize, tint } from '../lib/utils';

export default function Traditions() {
  const [family, setFamily] = useState<string>('all');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    return traditions
      .filter((t) => (family === 'all' ? true : t.family === family))
      .filter((t) =>
        nq.length < 2
          ? true
          : normalize([t.name, ...(t.altNames ?? []), t.tagline, t.summary].join(' ')).includes(nq),
      )
      .sort((a, b) => a.foundedYear - b.foundedYear);
  }, [family, q]);

  return (
    <div>
      <PageHeader
        eyebrow={`${traditions.length} traditions`}
        title="Les traditions religieuses"
        lead="Chaque fiche répond aux mêmes questions : quelle est l’intuition centrale ? Qu’est-ce qui est cru, pratiqué, exigé ? Comment cela s’est-il formé ? Qu’est-ce qu’on croit à tort ? Et quels débats la traversent aujourd’hui ?"
      >
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFamily('all')}
            className={cx(
              'rounded-full border px-3 py-1.5 text-xs transition',
              family === 'all'
                ? 'border-ink-900 bg-ink-900 text-parchment'
                : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
            )}
          >
            Toutes
          </button>
          {families.map((f) => (
            <button
              key={f.id}
              onClick={() => setFamily(f.id)}
              title={f.description}
              className={cx(
                'rounded-full border px-3 py-1.5 text-xs transition',
                family === f.id
                  ? 'border-ink-900 bg-ink-900 text-parchment'
                  : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
              )}
            >
              {f.label}
            </button>
          ))}
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filtrer…"
            className="ml-auto w-40 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs outline-none focus:border-ink-400"
          />
        </div>
      </PageHeader>

      <div className="container-page py-10">
        {family !== 'all' && (
          <p className="mb-6 max-w-3xl text-sm italic text-ink-600">
            {families.find((f) => f.id === family)?.description}
          </p>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {list.map((t) => (
            <Link
              key={t.id}
              to={`/traditions/${t.id}`}
              className="card card-hover flex flex-col overflow-hidden"
            >
              <div className="h-1" style={{ backgroundColor: t.color }} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-xl"
                    style={{ backgroundColor: tint(t.color, 0.14), color: t.color }}
                  >
                    {t.symbol}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-serif text-xl font-semibold text-ink-950">{t.name}</h2>
                    {t.altNames && (
                      <p className="text-xs text-ink-400">{t.altNames.join(' · ')}</p>
                    )}
                    <p className="mt-1 text-xs text-ink-500">
                      {t.founded} · {t.origin}
                    </p>
                  </div>
                  <span className="shrink-0 text-right text-xs text-ink-500">{t.adherents}</span>
                </div>

                <p className="prose-serif mt-4 flex-1 text-[0.95rem]">{t.tagline}</p>

                <div className="mt-4 rounded-md bg-ink-50 px-3.5 py-2.5">
                  <p className="text-[0.7rem] uppercase tracking-wide text-ink-400">Question centrale</p>
                  <p className="mt-1 text-[0.85rem] italic leading-snug text-ink-700">{t.centralQuestion}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <p className="py-16 text-center text-sm text-ink-500">Aucune tradition ne correspond.</p>
        )}
      </div>
    </div>
  );
}
