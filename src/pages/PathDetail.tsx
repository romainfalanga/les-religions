import { Link, useParams } from 'react-router-dom';
import { learningPaths } from '../data/influences';
import { traditionsById } from '../data/traditions';
import { figuresById } from '../data/figures';
import { textsById } from '../data/texts';
import { themes } from '../data/themes';
import { concepts } from '../data/concepts';
import { Callout, Chip } from '../components/ui';
import { tint } from '../lib/utils';
import type { PathStepKind } from '../data/types';
import NotFound from './NotFound';

const kindMeta: Record<PathStepKind, { label: string; color: string }> = {
  tradition: { label: 'Tradition', color: '#0f9d6b' },
  figure: { label: 'Personnage', color: '#8b5cf6' },
  text: { label: 'Texte', color: '#3b6fb6' },
  theme: { label: 'Comparaison', color: '#e0642e' },
  concept: { label: 'Notion', color: '#c9812a' },
  note: { label: 'Repère', color: '#78716c' },
};

function resolve(kind: PathStepKind, id?: string): { title: string; href: string } | null {
  if (!id) return null;
  switch (kind) {
    case 'tradition': {
      const t = traditionsById.get(id);
      return t ? { title: t.name, href: `/traditions/${t.id}` } : null;
    }
    case 'figure': {
      const f = figuresById.get(id);
      return f ? { title: f.name, href: `/personnages/${f.id}` } : null;
    }
    case 'text': {
      const t = textsById.get(id);
      return t ? { title: t.title, href: `/textes/${t.id}` } : null;
    }
    case 'theme': {
      const t = themes.find((x) => x.id === id);
      return t ? { title: t.title, href: `/comparaisons/${t.id}` } : null;
    }
    case 'concept': {
      const c = concepts.find((x) => x.id === id);
      return c ? { title: c.term, href: `/notions#${c.id}` } : null;
    }
    default:
      return null;
  }
}

export default function PathDetail() {
  const { id } = useParams();
  const p = learningPaths.find((x) => x.id === id);
  if (!p) return <NotFound />;

  return (
    <article>
      <header className="border-b border-ink-200 bg-gradient-to-b from-white/70 to-transparent py-10 sm:py-14">
        <div className="container-page">
          <Link to="/parcours" className="text-xs text-ink-500 hover:text-ink-800">
            ← Tous les parcours
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Chip>{p.level}</Chip>
            <span className="text-xs text-ink-500">{p.duration}</span>
            <span className="text-xs text-ink-400">· {p.steps.length} étapes</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-ink-950 sm:text-[2.6rem]">{p.title}</h1>
          <p className="mt-2 text-lg text-ink-600">{p.subtitle}</p>
          <div className="mt-6 max-w-3xl">
            <Callout label="Objectif">{p.goal}</Callout>
          </div>
        </div>
      </header>

      <div className="container-page py-10">
        <ol className="relative space-y-4 border-l-2 border-ink-200 pl-8">
          {p.steps.map((step, i) => {
            const meta = kindMeta[step.kind];
            const target = resolve(step.kind, step.id);
            const label = target?.title ?? step.title ?? 'Repère';

            return (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[2.3rem] top-4 grid h-6 w-6 place-items-center rounded-full text-[0.65rem] font-semibold ring-4 ring-parchment"
                  style={{ backgroundColor: tint(meta.color, 0.16), color: meta.color }}
                >
                  {i + 1}
                </span>

                {target ? (
                  <Link to={target.href} className="card card-hover block p-5">
                    <StepBody meta={meta} label={label} note={step.note} linked />
                  </Link>
                ) : (
                  <div
                    className="rounded-xl border border-dashed border-ink-300 bg-ink-50/60 p-5"
                  >
                    <StepBody meta={meta} label={label} note={step.note} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-12 border-t border-ink-200 pt-8">
          <h2 className="section-title mb-4">Poursuivre</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningPaths
              .filter((x) => x.id !== p.id)
              .slice(0, 3)
              .map((x) => (
                <Link key={x.id} to={`/parcours/${x.id}`} className="card card-hover p-5">
                  <Chip>{x.level}</Chip>
                  <h3 className="mt-2.5 font-serif text-lg font-semibold text-ink-950">{x.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{x.subtitle}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function StepBody({
  meta,
  label,
  note,
  linked,
}: {
  meta: { label: string; color: string };
  label: string;
  note: string;
  linked?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        <span
          className="chip"
          style={{ borderColor: tint(meta.color, 0.35), backgroundColor: tint(meta.color, 0.09), color: meta.color }}
        >
          {meta.label}
        </span>
        <h3 className="font-serif text-lg font-semibold text-ink-950">{label}</h3>
        {linked && <span className="text-xs text-ink-400">→</span>}
      </div>
      <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-700">{note}</p>
    </>
  );
}
