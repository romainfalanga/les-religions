import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { influences } from '../data/influences';
import { traditionColor, traditionName, traditions, traditionsById } from '../data/traditions';
import { PageHeader } from '../components/ui';
import { cx, tint } from '../lib/utils';
import type { InfluenceType } from '../data/types';

const typeInfo: Record<InfluenceType, { label: string; color: string; description: string }> = {
  filiation: { label: 'Filiation', color: '#2f855a', description: 'A engendre B : B se conçoit comme héritier direct.' },
  schisme: { label: 'Schisme', color: '#c53030', description: 'B se sépare de A à l’issue d’un conflit.' },
  emprunt: { label: 'Emprunt', color: '#3b6fb6', description: 'B reprend des éléments de A sans en descendre.' },
  reaction: { label: 'Réaction', color: '#b7791f', description: 'B se construit en s’opposant à A.' },
  syncretisme: { label: 'Syncrétisme', color: '#7c3aed', description: 'A et B fusionnent partiellement.' },
};

/** Diagramme simplifié : positionnement chronologique des grandes traditions. */
const graphNodes: { id: string; x: number; y: number }[] = [
  { id: 'religion-mesopotamienne', x: 5, y: 14 },
  { id: 'religion-egyptienne', x: 5, y: 42 },
  { id: 'religion-grecque', x: 20, y: 68 },
  { id: 'zoroastrisme', x: 20, y: 8 },
  { id: 'religion-nordique', x: 12, y: 88 },
  { id: 'judaisme', x: 34, y: 28 },
  { id: 'hindouisme', x: 20, y: 50 },
  { id: 'jainisme', x: 36, y: 62 },
  { id: 'bouddhisme', x: 36, y: 48 },
  { id: 'confucianisme', x: 30, y: 82 },
  { id: 'taoisme', x: 38, y: 92 },
  { id: 'gnosticisme', x: 50, y: 16 },
  { id: 'christianisme', x: 52, y: 32 },
  { id: 'manicheisme', x: 58, y: 8 },
  { id: 'mandeisme', x: 62, y: 18 },
  { id: 'shintoisme', x: 54, y: 88 },
  { id: 'samaritanisme', x: 44, y: 40 },
  { id: 'islam', x: 68, y: 40 },
  { id: 'druzisme', x: 78, y: 24 },
  { id: 'yezidisme', x: 78, y: 12 },
  { id: 'sikhisme', x: 76, y: 60 },
  { id: 'bahaisme', x: 88, y: 34 },
  { id: 'rastafari', x: 90, y: 52 },
  { id: 'neopaganisme', x: 88, y: 84 },
  { id: 'humanisme-seculier', x: 92, y: 70 },
];

export default function Influences() {
  const [type, setType] = useState<string>('all');
  const [focus, setFocus] = useState<string | null>(null);

  const list = useMemo(
    () =>
      influences
        .filter((i) => (type === 'all' ? true : i.type === type))
        .filter((i) => (focus ? i.from === focus || i.to === focus : true)),
    [type, focus],
  );

  const nodePos = useMemo(() => new Map(graphNodes.map((n) => [n.id, n])), []);

  const drawableEdges = useMemo(
    () => list.filter((i) => nodePos.has(i.from) && nodePos.has(i.to)),
    [list, nodePos],
  );

  return (
    <div>
      <PageHeader
        eyebrow={`${influences.length} liens documentés`}
        title="L’arbre des influences"
        lead="Aucune religion n’est née de rien. Cette carte recense les filiations, les schismes, les emprunts, les réactions et les syncrétismes — avec, pour chacun, ce qui a circulé et à quelle époque."
      >
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setType('all')}
            className={cx(
              'rounded-full border px-3 py-1.5 text-xs transition',
              type === 'all'
                ? 'border-ink-900 bg-ink-900 text-parchment'
                : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
            )}
          >
            Tous les liens
          </button>
          {Object.entries(typeInfo).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setType(k)}
              title={v.description}
              className="rounded-full border px-3 py-1.5 text-xs transition"
              style={
                type === k
                  ? { backgroundColor: v.color, borderColor: v.color, color: 'white' }
                  : { borderColor: tint(v.color, 0.35), color: v.color }
              }
            >
              {v.label}
            </button>
          ))}
          {focus && (
            <button
              onClick={() => setFocus(null)}
              className="ml-auto rounded-full border border-ink-300 bg-white px-3 py-1.5 text-xs text-ink-700"
            >
              ✕ {traditionName(focus)}
            </button>
          )}
        </div>
      </PageHeader>

      <div className="container-page py-10">
        <section className="mb-12">
          <h2 className="section-title mb-1">Carte</h2>
          <p className="mb-5 max-w-3xl text-sm text-ink-600">
            Disposition approximative : plus une tradition est à gauche, plus elle est ancienne. Cliquez sur un
            nom pour n’afficher que ses liens.
          </p>

          <div className="relative w-full overflow-hidden rounded-xl border border-ink-200 bg-white/50">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[560px] w-full sm:h-[620px]">
              {drawableEdges.map((e, i) => {
                const a = nodePos.get(e.from)!;
                const b = nodePos.get(e.to)!;
                const mx = (a.x + b.x) / 2;
                const my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.08;
                return (
                  <path
                    key={i}
                    d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
                    fill="none"
                    stroke={typeInfo[e.type].color}
                    strokeWidth={focus ? 1.8 : 1.1}
                    strokeOpacity={focus ? 0.8 : 0.45}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            <div className="pointer-events-none absolute inset-0">
              {graphNodes.map((n) => {
                const tr = traditionsById.get(n.id);
                if (!tr) return null;
                const dim = focus && focus !== n.id && !list.some((i) => i.from === n.id || i.to === n.id);
                return (
                  <button
                    key={n.id}
                    onClick={() => setFocus(focus === n.id ? null : n.id)}
                    className={cx(
                      'pointer-events-auto absolute -translate-y-1/2 whitespace-nowrap rounded-full border px-2 py-0.5 text-[0.65rem] font-medium transition sm:text-[0.7rem]',
                      n.x < 18 ? 'translate-x-0' : n.x > 82 ? '-translate-x-full' : '-translate-x-1/2',
                      dim ? 'opacity-25' : 'opacity-100',
                    )}
                    style={{
                      left: `${n.x}%`,
                      top: `${n.y}%`,
                      borderColor: tr.color,
                      backgroundColor: focus === n.id ? tr.color : tint(tr.color, 0.12),
                      color: focus === n.id ? '#fff' : tr.color,
                    }}
                    title={tr.tagline}
                  >
                    {tr.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-600">
            {Object.entries(typeInfo).map(([k, v]) => (
              <span key={k} className="flex items-center gap-2">
                <span className="h-0.5 w-6" style={{ backgroundColor: v.color }} />
                <strong className="font-medium">{v.label}</strong>
                <span className="text-ink-500">{v.description}</span>
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title mb-1">Les liens, un par un</h2>
          <p className="mb-5 text-sm text-ink-600">
            {list.length} lien{list.length > 1 ? 's' : ''} affiché{list.length > 1 ? 's' : ''}.
          </p>

          <div className="space-y-3">
            {list.map((inf, i) => {
              const info = typeInfo[inf.type];
              return (
                <div
                  key={i}
                  className="card p-5"
                  style={{ borderLeftColor: info.color, borderLeftWidth: 3 }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <TraditionRef id={inf.from} />
                    <span className="text-ink-400">→</span>
                    <TraditionRef id={inf.to} />
                    <span
                      className="chip"
                      style={{
                        borderColor: tint(info.color, 0.35),
                        backgroundColor: tint(info.color, 0.09),
                        color: info.color,
                      }}
                    >
                      {info.label}
                    </span>
                    <span className="text-xs text-ink-500">{inf.period}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink-700">{inf.label}</p>
                  <p className="prose-serif mt-2 text-[0.94rem]">{inf.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12 border-t border-ink-200 pt-8">
          <h2 className="section-title mb-3">Toutes les traditions</h2>
          <div className="flex flex-wrap gap-2">
            {traditions.map((t) => (
              <Link
                key={t.id}
                to={`/traditions/${t.id}`}
                className="chip transition hover:opacity-80"
                style={{
                  borderColor: tint(t.color, 0.35),
                  backgroundColor: tint(t.color, 0.08),
                  color: t.color,
                }}
              >
                {t.symbol} {t.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function TraditionRef({ id }: { id: string }) {
  const known = traditionsById.has(id);
  const color = traditionColor(id);
  if (!known) {
    return (
      <span className="font-medium text-ink-600" style={{ color }}>
        {traditionName(id)}
      </span>
    );
  }
  return (
    <Link to={`/traditions/${id}`} className="font-medium hover:underline" style={{ color }}>
      {traditionName(id)}
    </Link>
  );
}
