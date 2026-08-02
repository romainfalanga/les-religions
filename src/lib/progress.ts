/**
 * Suivi de progression, en local et sans compte.
 *
 * Deux raisons de le faire : un cours sans repère de progression décourage
 * (on ne sait jamais où l'on en est), et la reprise différée est le mode de
 * lecture réel des gens. Rien n'est envoyé nulle part.
 */

const KEY = 'atlas.cours.v1';

interface State {
  done: string[];
  last?: string;
}

function read(): State {
  if (typeof localStorage === 'undefined') return { done: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { done: [] };
    const parsed = JSON.parse(raw) as State;
    return { done: Array.isArray(parsed.done) ? parsed.done : [], last: parsed.last };
  } catch {
    return { done: [] };
  }
}

function write(state: State) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Navigation privée, quota plein : la progression est un confort, pas une
    // fonctionnalité critique. On échoue en silence.
  }
  listeners.forEach((l) => l());
}

const listeners = new Set<() => void>();

export function subscribeProgress(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getDone(): string[] {
  return read().done;
}

export function isDone(id: string): boolean {
  return read().done.includes(id);
}

export function setDone(id: string, value: boolean) {
  const state = read();
  const done = new Set(state.done);
  if (value) done.add(id);
  else done.delete(id);
  write({ done: [...done], last: value ? id : state.last });
}

export function getLast(): string | undefined {
  return read().last;
}

export function markVisited(id: string) {
  const state = read();
  write({ ...state, last: id });
}

export function resetProgress() {
  write({ done: [] });
}
