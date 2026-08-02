import type { SacredText } from '../types';
import { textesAbrahamiques } from './abrahamiques';
import { textesOrientaux } from './orientaux';
import { textesComplements } from './complements';

export const texts: SacredText[] = [...textesAbrahamiques, ...textesOrientaux, ...textesComplements].sort(
  (a, b) => a.sortYear - b.sortYear,
);

export const textsById = new Map(texts.map((t) => [t.id, t]));

export function getText(id: string): SacredText | undefined {
  return textsById.get(id);
}

export function textTitle(id: string): string | undefined {
  return textsById.get(id)?.title;
}
