import type { Figure } from '../types';
import { figuresFondateurs } from './fondateurs';
import { figuresBibleHebraique } from './bible-hebraique';
import { figuresChristianisme } from './christianisme';
import { figuresJudaisme } from './judaisme';
import { figuresIslam } from './islam';
import { figuresOrient } from './orient';
import { figuresAutres } from './autres';

export const figures: Figure[] = [
  ...figuresFondateurs,
  ...figuresBibleHebraique,
  ...figuresJudaisme,
  ...figuresChristianisme,
  ...figuresIslam,
  ...figuresOrient,
  ...figuresAutres,
].sort((a, b) => a.sortYear - b.sortYear);

export const figuresById = new Map(figures.map((f) => [f.id, f]));

export function getFigure(id: string): Figure | undefined {
  return figuresById.get(id);
}

export function figureName(id: string): string | undefined {
  return figuresById.get(id)?.name;
}

/** Relations réciproques : qui mentionne ce personnage ? */
export function inboundRelations(id: string): { figure: Figure; label: string }[] {
  const out: { figure: Figure; label: string }[] = [];
  for (const f of figures) {
    if (f.id === id) continue;
    const rel = f.relations.find((r) => r.figureId === id);
    if (rel) out.push({ figure: f, label: rel.label });
  }
  return out;
}

export const historicityOrder: Record<Figure['historicity'], number> = {
  attesté: 0,
  probable: 1,
  débattu: 2,
  légendaire: 3,
  mythique: 4,
};

export const historicityLabels: Record<Figure['historicity'], { label: string; description: string; color: string }> = {
  attesté: {
    label: 'Attesté',
    description: 'Existence établie par des sources contemporaines ou quasi contemporaines ; consensus large.',
    color: '#2f855a',
  },
  probable: {
    label: 'Probable',
    description: 'Existence acceptée par la majorité des chercheurs, mais biographie largement incertaine.',
    color: '#38856b',
  },
  débattu: {
    label: 'Débattu',
    description: 'Les spécialistes sont partagés sur l’existence ou sur l’essentiel des faits rapportés.',
    color: '#b7791f',
  },
  légendaire: {
    label: 'Légendaire',
    description: 'Un noyau historique est possible mais irrécupérable ; le récit est une construction.',
    color: '#c05621',
  },
  mythique: {
    label: 'Mythique',
    description: 'Personnage de récit, sans prétention à l’historicité au sens moderne.',
    color: '#9b2c2c',
  },
};
