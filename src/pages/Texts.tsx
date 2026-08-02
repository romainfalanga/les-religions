import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { texts } from '../data/texts';
import { traditionColor, traditionName, traditions } from '../data/traditions';
import { PageHeader } from '../components/ui';
import { cx, formatYear, normalize, tint } from '../lib/utils';

export default function Texts() {
  const [tradition, setTradition] = useState('all');
  const [q, setQ] = useState('');

  const usedTraditions = useMemo(() => {
    const set = new Set<string>();
    texts.forEach((t) => t.traditions.forEach((x) => set.add(x)));
    return traditions.filter((t) => set.has(t.id));
  }, []);

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    return texts
      .filter((t) => (tradition === 'all' ? true : t.traditions.includes(tradition)))
      .filter((t) =>
        nq.length < 2 ? true : normalize([t.title, t.originalTitle ?? '', t.genre, t.summary].join(' ')).includes(nq),
      );
  }, [tradition, q]);

  return (
    <div>
      <PageHeader
        eyebrow={`${texts.length} textes`}
        title="Les textes"
        lead="Pour chaque corpus : sa structure, ses enseignements majeurs, ses passages clés, l’histoire matérielle de sa transmission, ce que la recherche critique en dit — et par où commencer sa lecture."
      >
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setTradition('all')}
            className={cx(
              'rounded-full border px-3 py-1.5 text-xs transition',
              tradition === 'all'
                ? 'border-ink-900 bg-ink-900 text-parchment'
                : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
            )}
          >
            Tous
          </button>
          {usedTraditions.map((t) => (
            <button
              key={t.id}
              onClick={() => setTradition(t.id)}
              className={cx(
                'rounded-full border px-3 py-1.5 text-xs transition',
                tradition === t.id ? 'text-white' : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
              )}
              style={tradition === t.id ? { backgroundColor: t.color, borderColor: t.color } : undefined}
            >
              {t.name}
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {list.map((t) => {
            const color = t.traditions[0] ? traditionColor(t.traditions[0]) : '#8d7f68';
            return (
              <Link key={t.id} to={`/textes/${t.id}`} className="card card-hover flex flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-serif text-xl font-semibold text-ink-950">{t.title}</h2>
                  <span className="shrink-0 font-mono text-xs text-ink-400">{formatYear(t.sortYear)}</span>
                </div>
                {t.originalTitle && <p className="mt-0.5 text-sm text-ink-500">{t.originalTitle}</p>}
                <p className="mt-1 text-xs text-ink-500">
                  {t.genre} · {t.language}
                </p>
                <p className="prose-serif mt-3 flex-1 text-[0.95rem]">{t.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.traditions.map((tr) => (
                    <span
                      key={tr}
                      className="chip"
                      style={{
                        borderColor: tint(traditionColor(tr), 0.35),
                        backgroundColor: tint(traditionColor(tr), 0.08),
                        color: traditionColor(tr),
                      }}
                    >
                      {traditionName(tr)}
                    </span>
                  ))}
                </div>
                <p className="mt-3 border-t border-ink-100 pt-3 text-xs text-ink-500" style={{ color }}>
                  {t.composed}
                </p>
              </Link>
            );
          })}
        </div>

        {list.length === 0 && <p className="py-16 text-center text-sm text-ink-500">Aucun texte ne correspond.</p>}
      </div>
    </div>
  );
}
