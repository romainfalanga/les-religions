import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { figures, historicityLabels } from '../data/figures';
import { traditionColor, traditionName, traditions } from '../data/traditions';
import { PageHeader } from '../components/ui';
import { cx, formatYear, normalize, tint } from '../lib/utils';
import type { Historicity } from '../data/types';

const historicityKeys: Historicity[] = ['attesté', 'probable', 'débattu', 'légendaire', 'mythique'];

export default function Figures() {
  const [tradition, setTradition] = useState('all');
  const [hist, setHist] = useState<string>('all');
  const [q, setQ] = useState('');

  const usedTraditions = useMemo(() => {
    const set = new Set<string>();
    figures.forEach((f) => f.traditions.forEach((t) => set.add(t)));
    return traditions.filter((t) => set.has(t.id));
  }, []);

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    return figures
      .filter((f) => (tradition === 'all' ? true : f.traditions.includes(tradition)))
      .filter((f) => (hist === 'all' ? true : f.historicity === hist))
      .filter((f) =>
        nq.length < 2
          ? true
          : normalize([f.name, ...(f.altNames ?? []), f.role, f.summary, f.region].join(' ')).includes(nq),
      );
  }, [tradition, hist, q]);

  return (
    <div>
      <PageHeader
        eyebrow={`${figures.length} personnages`}
        title="Les personnages"
        lead="Fondateurs, prophètes, sages, mystiques, réformateurs et critiques. Chaque fiche indique explicitement le degré d’attestation historique — un personnage peut être capital sans être historique, et l’inverse."
      >
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTradition('all')}
              className={cx(
                'rounded-full border px-3 py-1.5 text-xs transition',
                tradition === 'all'
                  ? 'border-ink-900 bg-ink-900 text-parchment'
                  : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
              )}
            >
              Toutes traditions
            </button>
            {usedTraditions.map((t) => (
              <button
                key={t.id}
                onClick={() => setTradition(t.id)}
                className={cx(
                  'rounded-full border px-3 py-1.5 text-xs transition',
                  tradition === t.id ? 'text-white' : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
                )}
                style={
                  tradition === t.id ? { backgroundColor: t.color, borderColor: t.color } : undefined
                }
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.7rem] uppercase tracking-wide text-ink-400">Historicité</span>
            <button
              onClick={() => setHist('all')}
              className={cx(
                'rounded-full border px-3 py-1 text-xs transition',
                hist === 'all' ? 'border-ink-900 bg-ink-900 text-parchment' : 'border-ink-200 text-ink-600',
              )}
            >
              tous
            </button>
            {historicityKeys.map((h) => (
              <button
                key={h}
                onClick={() => setHist(h)}
                title={historicityLabels[h].description}
                className={cx('rounded-full border px-3 py-1 text-xs transition')}
                style={
                  hist === h
                    ? { backgroundColor: historicityLabels[h].color, borderColor: historicityLabels[h].color, color: 'white' }
                    : { borderColor: tint(historicityLabels[h].color, 0.4), color: historicityLabels[h].color }
                }
              >
                {historicityLabels[h].label}
              </button>
            ))}
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filtrer…"
              className="ml-auto w-40 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs outline-none focus:border-ink-400"
            />
          </div>
        </div>
      </PageHeader>

      <div className="container-page py-10">
        <p className="mb-6 text-sm text-ink-500">
          {list.length} personnage{list.length > 1 ? 's' : ''}, par ordre chronologique.
        </p>

        <div className="grid gap-3">
          {list.map((f) => (
            <Link
              key={f.id}
              to={`/personnages/${f.id}`}
              className="card card-hover flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="sm:w-36 sm:shrink-0">
                <p className="font-mono text-xs text-ink-500">{formatYear(f.sortYear)}</p>
                <p className="mt-0.5 text-[0.7rem] text-ink-400">{f.dates}</p>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-serif text-lg font-semibold text-ink-950">{f.name}</h2>
                  {f.altNames && <span className="text-xs text-ink-400">{f.altNames.join(' · ')}</span>}
                </div>
                <p className="mt-0.5 text-sm text-ink-600">{f.role}</p>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-700">{f.summary}</p>
              </div>

              <div className="flex shrink-0 flex-wrap items-start gap-1.5 sm:w-48 sm:flex-col sm:items-end">
                <span
                  className="chip"
                  style={{
                    borderColor: tint(historicityLabels[f.historicity].color, 0.4),
                    backgroundColor: tint(historicityLabels[f.historicity].color, 0.1),
                    color: historicityLabels[f.historicity].color,
                  }}
                >
                  {historicityLabels[f.historicity].label}
                </span>
                {f.traditions.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="chip"
                    style={{
                      borderColor: tint(traditionColor(t), 0.35),
                      backgroundColor: tint(traditionColor(t), 0.08),
                      color: traditionColor(t),
                    }}
                  >
                    {traditionName(t)}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <p className="py-16 text-center text-sm text-ink-500">Aucun personnage ne correspond.</p>
        )}
      </div>
    </div>
  );
}
