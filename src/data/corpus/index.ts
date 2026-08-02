import type { CorpusBook, CorpusUnit } from './types';
import { corpusHebreu } from './hebreu';
import { corpusGrecArabe } from './grec-arabe';
import { corpusOrient } from './orient';

export type { CorpusBook, CorpusUnit };

export const corpusBooks: CorpusBook[] = [...corpusHebreu, ...corpusGrecArabe, ...corpusOrient];

export const corpusBooksById: Record<string, CorpusBook> = Object.fromEntries(
  corpusBooks.map((b) => [b.id, b]),
);

export function getCorpusBook(id: string | undefined): CorpusBook | undefined {
  return id ? corpusBooksById[id] : undefined;
}

/** Familles d'écriture, pour le regroupement et le choix de police. */
export const scriptFamilies: { id: string; label: string; books: string[] }[] = [
  { id: 'hebreu', label: 'Hébreu', books: corpusHebreu.map((b) => b.id) },
  {
    id: 'grec',
    label: 'Grec',
    books: corpusGrecArabe.filter((b) => b.language.startsWith('Grec')).map((b) => b.id),
  },
  {
    id: 'arabe',
    label: 'Arabe',
    books: corpusGrecArabe.filter((b) => b.language.startsWith('Arabe')).map((b) => b.id),
  },
  {
    id: 'indien',
    label: 'Sanskrit et pāli',
    books: corpusOrient.filter((b) => /Sanskrit|Pāli/i.test(b.language)).map((b) => b.id),
  },
  {
    id: 'sinique',
    label: 'Chinois',
    books: corpusOrient.filter((b) => /Chinois/i.test(b.language)).map((b) => b.id),
  },
  {
    id: 'gurmukhi',
    label: 'Gurmukhī',
    books: corpusOrient.filter((b) => /Pañjābī/i.test(b.language)).map((b) => b.id),
  },
];

/** Classe CSS de police adaptée à l'écriture du livre. */
export function scriptClass(book: CorpusBook): string {
  if (book.rtl) return book.language.startsWith('Arabe') ? 'script-arabic' : 'script-hebrew';
  if (/Sanskrit/i.test(book.language)) return 'script-devanagari';
  if (/Chinois/i.test(book.language)) return 'script-han';
  if (/Pañjābī/i.test(book.language)) return 'script-gurmukhi';
  if (/Grec/i.test(book.language)) return 'script-greek';
  return 'script-latin';
}

export const corpusUnitCount = corpusBooks.reduce((n, b) => n + b.units.length, 0);

/** Toutes les unités portant une analyse de biais de traduction. */
export const corpusIssues: { book: CorpusBook; unit: CorpusUnit }[] = corpusBooks.flatMap((book) =>
  book.units.filter((u) => u.issue).map((unit) => ({ book, unit })),
);
