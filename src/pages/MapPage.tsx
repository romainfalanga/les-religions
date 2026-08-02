import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo';
import { feature } from 'topojson-client';
import landTopo from 'world-atlas/land-110m.json';
import { places, placeKindInfo, routeKindInfo, routes, type Place, type PlaceKind } from '../data/geo';
import { traditionColor, traditionName, traditions } from '../data/traditions';
import { figuresById } from '../data/figures';
import { textsById } from '../data/texts';
import { timeline } from '../data/timeline';
import { PageHeader } from '../components/ui';
import { cx, formatYear, normalize, tint } from '../lib/utils';

const W = 980;
const H = 500;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const land = feature(landTopo as any, (landTopo as any).objects.land) as any;

const projection = geoNaturalEarth1().fitExtent(
  [
    [6, 6],
    [W - 6, H - 6],
  ],
  { type: 'Sphere' },
);
const pathGen = geoPath(projection);
const landPath = pathGen(land) ?? '';
const graticulePath = pathGen(geoGraticule10()) ?? '';
const spherePath = pathGen({ type: 'Sphere' }) ?? '';

function project(lon: number, lat: number): [number, number] | null {
  const p = projection([lon, lat]);
  return p ? [p[0], p[1]] : null;
}

/** Jalons du curseur temporel — échelle non linéaire, la préhistoire étant écrasée. */
const TICKS = [-100000, -10000, -3000, -1500, -800, -400, 0, 400, 800, 1200, 1500, 1750, 1900, 2030];

function sliderToYear(v: number): number {
  const i = Math.min(Math.floor(v), TICKS.length - 2);
  const frac = v - i;
  return Math.round(TICKS[i] + (TICKS[i + 1] - TICKS[i]) * frac);
}

export default function MapPage() {
  const [year, setYear] = useState(TICKS.length - 1);
  const [playing, setPlaying] = useState(false);
  const [tradition, setTradition] = useState('all');
  const [kind, setKind] = useState<string>('all');
  const [showRoutes, setShowRoutes] = useState(true);
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState<Place | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<[number, number]>([0, 0]);

  // Ouverture directe sur un lieu, depuis la recherche : /carte?lieu=jerusalem
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const id = searchParams.get('lieu');
    if (!id) return;
    const p = places.find((x) => x.id === id);
    if (p) {
      setSelected(p);
      setYear(TICKS.length - 1);
    }
  }, [searchParams]);
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const currentYear = sliderToYear(year);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setYear((y) => {
        const next = y + 0.06;
        if (next >= TICKS.length - 1) {
          setPlaying(false);
          return TICKS.length - 1;
        }
        return next;
      });
    }, 60);
    return () => clearInterval(t);
  }, [playing]);

  const usedTraditions = useMemo(() => {
    const set = new Set<string>();
    places.forEach((p) => p.traditions.forEach((t) => set.add(t)));
    routes.forEach((r) => r.traditions.forEach((t) => set.add(t)));
    return traditions.filter((t) => set.has(t.id));
  }, []);

  const visiblePlaces = useMemo(() => {
    const nq = normalize(q.trim());
    return places
      .filter((p) => p.fromYear <= currentYear)
      .filter((p) => (tradition === 'all' ? true : p.traditions.includes(tradition)))
      .filter((p) => (kind === 'all' ? true : p.kind === kind))
      .filter((p) => (nq.length < 2 ? true : normalize([p.name, p.summary, p.modern].join(' ')).includes(nq)));
  }, [currentYear, tradition, kind, q]);

  const visibleRoutes = useMemo(
    () =>
      showRoutes
        ? routes
            .filter((r) => r.fromYear <= currentYear)
            .filter((r) => (tradition === 'all' ? true : r.traditions.includes(tradition)))
        : [],
    [currentYear, tradition, showRoutes],
  );

  const eventsForPlace = (p: Place) =>
    (p.events ?? []).map((id) => timeline.find((e) => e.id === id)).filter(Boolean);

  return (
    <div>
      <PageHeader
        eyebrow={`${places.length} lieux · ${routes.length} routes`}
        title="Atlas géographique"
        lead="Les mêmes contenus, déployés dans l’espace. Faites glisser le curseur : les lieux apparaissent à mesure qu’ils entrent dans l’histoire religieuse, et les routes tracent la circulation des idées, des exils et des conquêtes."
      >
        <div className="space-y-3">
          {/* Curseur temporel */}
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-ink-200 bg-white/60 px-4 py-3">
            <button
              onClick={() => {
                if (year >= TICKS.length - 1) setYear(0);
                setPlaying((p) => !p);
              }}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-900 text-sm text-parchment transition hover:bg-ink-800"
              aria-label={playing ? 'Pause' : 'Animer'}
            >
              {playing ? '❚❚' : '▶'}
            </button>
            <div className="min-w-0 flex-1">
              <input
                type="range"
                min={0}
                max={TICKS.length - 1}
                step={0.01}
                value={year}
                onChange={(e) => {
                  setPlaying(false);
                  setYear(Number(e.target.value));
                }}
                className="w-full accent-ink-800"
              />
              <div className="mt-1 flex justify-between text-[0.6rem] text-ink-400">
                {TICKS.filter((_, i) => i % 2 === 0).map((t) => (
                  <span key={t}>{t < 0 ? `${Math.abs(t) >= 10000 ? '-' + Math.abs(t) / 1000 + 'k' : t}` : t}</span>
                ))}
              </div>
            </div>
            <div className="w-32 shrink-0 text-right">
              <div className="font-mono text-lg font-semibold text-ink-950">{formatYear(currentYear)}</div>
              <div className="text-[0.65rem] text-ink-500">{visiblePlaces.length} lieux visibles</div>
            </div>
            <button
              onClick={() => {
                setYear(TICKS.length - 1);
                setPlaying(false);
              }}
              className="shrink-0 rounded-md border border-ink-200 px-2.5 py-1 text-xs text-ink-600 transition hover:border-ink-400"
            >
              Tout
            </button>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-1.5">
            <Pill active={tradition === 'all'} onClick={() => setTradition('all')}>
              Toutes traditions
            </Pill>
            {usedTraditions.map((t) => (
              <button
                key={t.id}
                onClick={() => setTradition(tradition === t.id ? 'all' : t.id)}
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
            <Pill active={kind === 'all'} onClick={() => setKind('all')}>
              Tous types de lieux
            </Pill>
            {(Object.keys(placeKindInfo) as PlaceKind[]).map((k) => (
              <button
                key={k}
                onClick={() => setKind(kind === k ? 'all' : k)}
                title={placeKindInfo[k].description}
                className="rounded-full border px-2.5 py-1 text-[0.72rem] transition"
                style={
                  kind === k
                    ? { backgroundColor: placeKindInfo[k].color, borderColor: placeKindInfo[k].color, color: '#fff' }
                    : { borderColor: tint(placeKindInfo[k].color, 0.35), color: placeKindInfo[k].color }
                }
              >
                {placeKindInfo[k].label}
              </button>
            ))}
            <label className="ml-2 flex items-center gap-1.5 text-[0.72rem] text-ink-600">
              <input
                type="checkbox"
                checked={showRoutes}
                onChange={(e) => setShowRoutes(e.target.checked)}
                className="accent-ink-800"
              />
              Routes
            </label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filtrer les lieux…"
              className="ml-auto w-40 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs outline-none focus:border-ink-400"
            />
          </div>
        </div>
      </PageHeader>

      <div className="container-page py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_20rem]">
          {/* Carte */}
          <div className="relative overflow-hidden rounded-xl border border-ink-200 bg-[#eef2f5]">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full cursor-grab touch-none active:cursor-grabbing"
              onPointerDown={(e) => {
                dragRef.current = { x: e.clientX, y: e.clientY, px: pan[0], py: pan[1] };
                (e.target as Element).setPointerCapture?.(e.pointerId);
              }}
              onPointerMove={(e) => {
                if (!dragRef.current) return;
                const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
                const scale = W / rect.width;
                setPan([
                  dragRef.current.px + (e.clientX - dragRef.current.x) * scale,
                  dragRef.current.py + (e.clientY - dragRef.current.y) * scale,
                ]);
              }}
              onPointerUp={() => (dragRef.current = null)}
              onPointerLeave={() => (dragRef.current = null)}
            >
              <g transform={`translate(${pan[0]} ${pan[1]}) scale(${zoom}) translate(${(-W * (zoom - 1)) / 2 / zoom} ${(-H * (zoom - 1)) / 2 / zoom})`}>
                <path d={spherePath} fill="#dfe8ee" />
                <path d={graticulePath} fill="none" stroke="#c8d5de" strokeWidth={0.4} />
                <path d={landPath} fill="#f4f1ea" stroke="#c9c0ad" strokeWidth={0.5} />

                {/* Routes */}
                {visibleRoutes.map((r) => {
                  const pts = r.points
                    .map(([lon, lat]) => project(lon, lat))
                    .filter((p): p is [number, number] => !!p);
                  if (pts.length < 2) return null;
                  const d = pts
                    .map((p, i) => {
                      if (i === 0) return `M ${p[0]} ${p[1]}`;
                      const prev = pts[i - 1];
                      const mx = (prev[0] + p[0]) / 2;
                      const my = (prev[1] + p[1]) / 2 - Math.abs(p[0] - prev[0]) * 0.16;
                      return `Q ${mx} ${my} ${p[0]} ${p[1]}`;
                    })
                    .join(' ');
                  return (
                    <path
                      key={r.id}
                      d={d}
                      fill="none"
                      stroke={routeKindInfo[r.kind].color}
                      strokeWidth={1.4 / zoom}
                      strokeOpacity={0.55}
                      strokeDasharray={r.kind === 'exil' ? `${4 / zoom} ${3 / zoom}` : undefined}
                    />
                  );
                })}

                {/* Lieux */}
                {visiblePlaces.map((p) => {
                  const xy = project(p.lon, p.lat);
                  if (!xy) return null;
                  const color = p.traditions[0]
                    ? traditionColor(p.traditions[0])
                    : placeKindInfo[p.kind].color;
                  const r = (p.importance === 1 ? 4.4 : p.importance === 2 ? 3.2 : 2.4) / Math.sqrt(zoom);
                  const isSel = selected?.id === p.id;
                  return (
                    <g key={p.id} onClick={() => setSelected(p)} className="cursor-pointer">
                      {isSel && (
                        <circle cx={xy[0]} cy={xy[1]} r={r * 2.6} fill={color} fillOpacity={0.18} />
                      )}
                      <circle
                        cx={xy[0]}
                        cy={xy[1]}
                        r={r}
                        fill={color}
                        fillOpacity={0.82}
                        stroke="#fff"
                        strokeWidth={r * 0.32}
                      />
                      {(p.importance === 1 || isSel || zoom > 2.2) && (
                        <text
                          x={xy[0] + r + 2.5}
                          y={xy[1] + r * 0.5}
                          fontSize={7 / Math.sqrt(zoom)}
                          fill="#3b352e"
                          className="pointer-events-none select-none"
                          style={{ paintOrder: 'stroke', stroke: '#f4f1ea', strokeWidth: 2 / Math.sqrt(zoom) }}
                        >
                          {p.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>

            <div className="absolute right-3 top-3 flex flex-col gap-1">
              <button
                onClick={() => setZoom((z) => Math.min(z * 1.4, 8))}
                className="grid h-8 w-8 place-items-center rounded-md border border-ink-200 bg-white/90 text-sm text-ink-700 transition hover:border-ink-400"
              >
                +
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(z / 1.4, 1))}
                className="grid h-8 w-8 place-items-center rounded-md border border-ink-200 bg-white/90 text-sm text-ink-700 transition hover:border-ink-400"
              >
                −
              </button>
              <button
                onClick={() => {
                  setZoom(1);
                  setPan([0, 0]);
                }}
                className="grid h-8 w-8 place-items-center rounded-md border border-ink-200 bg-white/90 text-[0.6rem] text-ink-700 transition hover:border-ink-400"
                title="Recentrer"
              >
                ⤢
              </button>
            </div>

            <p className="absolute bottom-2 left-3 text-[0.6rem] text-ink-400">
              Projection Natural Earth · glisser pour déplacer
            </p>
          </div>

          {/* Panneau latéral */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            {selected ? (
              <div className="card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-ink-950">{selected.name}</h2>
                    {selected.altNames && (
                      <p className="text-xs text-ink-400">{selected.altNames.join(' · ')}</p>
                    )}
                    <p className="mt-0.5 text-xs text-ink-500">{selected.modern}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="shrink-0 text-ink-400 transition hover:text-ink-800"
                    aria-label="Fermer"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span
                    className="chip"
                    style={{
                      borderColor: tint(placeKindInfo[selected.kind].color, 0.4),
                      backgroundColor: tint(placeKindInfo[selected.kind].color, 0.1),
                      color: placeKindInfo[selected.kind].color,
                    }}
                  >
                    {placeKindInfo[selected.kind].label}
                  </span>
                  {selected.traditions.map((t) => (
                    <Link
                      key={t}
                      to={`/traditions/${t}`}
                      className="chip transition hover:opacity-80"
                      style={{
                        borderColor: tint(traditionColor(t), 0.35),
                        backgroundColor: tint(traditionColor(t), 0.08),
                        color: traditionColor(t),
                      }}
                    >
                      {traditionName(t)}
                    </Link>
                  ))}
                </div>

                <p className="prose-serif mt-3 text-[0.92rem]">{selected.summary}</p>

                <p className="mt-3 border-t border-ink-100 pt-2.5 font-mono text-[0.68rem] text-ink-500">
                  {formatYear(selected.fromYear)} → {selected.toYear >= 2000 ? 'aujourd’hui' : formatYear(selected.toYear)}
                  <span className="ml-2 text-ink-400">
                    {selected.lat.toFixed(2)}°, {selected.lon.toFixed(2)}°
                  </span>
                </p>

                {selected.figures && selected.figures.filter((f) => figuresById.has(f)).length > 0 && (
                  <div className="mt-3">
                    <p className="eyebrow mb-1.5">Personnages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.figures
                        .filter((f) => figuresById.has(f))
                        .map((f) => (
                          <Link
                            key={f}
                            to={`/personnages/${f}`}
                            className="rounded-full border border-ink-200 bg-white/60 px-2.5 py-0.5 text-[0.7rem] text-ink-700 transition hover:border-ink-400"
                          >
                            {figuresById.get(f)!.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}

                {selected.texts && selected.texts.filter((t) => textsById.has(t)).length > 0 && (
                  <div className="mt-3">
                    <p className="eyebrow mb-1.5">Textes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.texts
                        .filter((t) => textsById.has(t))
                        .map((t) => (
                          <Link
                            key={t}
                            to={`/textes/${t}`}
                            className="rounded-full border border-ink-200 bg-white/60 px-2.5 py-0.5 text-[0.7rem] text-ink-700 transition hover:border-ink-400"
                          >
                            {textsById.get(t)!.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}

                {eventsForPlace(selected).length > 0 && (
                  <div className="mt-3">
                    <p className="eyebrow mb-1.5">Chronologie</p>
                    <ul className="space-y-1">
                      {eventsForPlace(selected).map((e) => (
                        <li key={e!.id}>
                          <Link
                            to={`/chronologie#${e!.id}`}
                            className="block rounded-md border border-ink-200 bg-white/50 px-2.5 py-1.5 text-[0.75rem] text-ink-700 transition hover:border-ink-400"
                          >
                            <span className="font-mono text-[0.65rem] text-ink-500">{e!.displayDate}</span> —{' '}
                            {e!.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="card p-5">
                <p className="eyebrow mb-2">Mode d’emploi</p>
                <p className="text-[0.9rem] leading-relaxed text-ink-700">
                  Cliquez sur un point pour l’ouvrir. Le curseur temporel fait apparaître les lieux à mesure
                  qu’ils entrent dans l’histoire religieuse — appuyez sur ▶ pour voir la propagation.
                </p>
                <div className="mt-4 space-y-1.5 border-t border-ink-100 pt-3">
                  {(Object.keys(placeKindInfo) as PlaceKind[]).map((k) => (
                    <div key={k} className="flex items-center gap-2 text-[0.72rem] text-ink-600">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: placeKindInfo[k].color }}
                      />
                      <strong className="font-medium">{placeKindInfo[k].label}</strong>
                      <span className="text-ink-500">{placeKindInfo[k].description}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 border-t border-ink-100 pt-3 text-[0.72rem] text-ink-500">
                  La couleur d’un point suit sa tradition principale ; sa taille, son importance.
                </p>
              </div>
            )}

            {visibleRoutes.length > 0 && (
              <div className="card mt-4 p-5">
                <p className="eyebrow mb-2.5">Routes affichées</p>
                <ul className="space-y-2">
                  {visibleRoutes.map((r) => (
                    <li key={r.id} className="text-[0.78rem] leading-snug">
                      <span className="flex items-center gap-2">
                        <span
                          className="h-0.5 w-4 shrink-0"
                          style={{ backgroundColor: routeKindInfo[r.kind].color }}
                        />
                        <strong className="font-medium text-ink-900">{r.label}</strong>
                      </span>
                      <span className="ml-6 block text-[0.7rem] text-ink-500">{r.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* Détail des routes */}
        {visibleRoutes.length > 0 && (
          <section className="mt-10">
            <h2 className="section-title mb-4">Ce qui a circulé</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {visibleRoutes.map((r) => (
                <div
                  key={r.id}
                  className="card p-5"
                  style={{ borderLeftColor: routeKindInfo[r.kind].color, borderLeftWidth: 3 }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{r.label}</h3>
                    <span
                      className="chip"
                      style={{
                        borderColor: tint(routeKindInfo[r.kind].color, 0.35),
                        backgroundColor: tint(routeKindInfo[r.kind].color, 0.09),
                        color: routeKindInfo[r.kind].color,
                      }}
                    >
                      {routeKindInfo[r.kind].label}
                    </span>
                    <span className="text-xs text-ink-500">{r.period}</span>
                  </div>
                  <p className="prose-serif mt-2 text-[0.93rem]">{r.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
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
