/** Normalise une chaîne pour la recherche (sans accents, minuscules). */
export function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .toLowerCase();
}

/** Formate une année (négative = av. J.-C.). */
export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} av. J.-C.`;
  return `${year}`;
}

/** Formate une année de façon compacte pour les axes. */
export function compactYear(year: number): string {
  if (year <= -10000) return `${Math.round(Math.abs(year) / 1000)} 000 av.`;
  if (year < 0) return `-${Math.abs(year)}`;
  return `${year}`;
}

/** Couleur de texte lisible sur un fond donné. */
export function readableOn(hex: string): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#3b352e' : '#ffffff';
}

/** Teinte pâle à partir d'une couleur hexadécimale. */
export function tint(hex: string, alpha = 0.12): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}
