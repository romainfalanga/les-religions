import type { Tradition } from '../types';
import { traditionsAbrahamiques } from './abrahamiques';
import { traditionsOrientales } from './orientales';
import { traditionsAnciennes } from './anciennes';

export const traditions: Tradition[] = [
  ...traditionsAbrahamiques,
  ...traditionsOrientales,
  ...traditionsAnciennes,
];

export const traditionsById = new Map(traditions.map((t) => [t.id, t]));

export function getTradition(id: string): Tradition | undefined {
  return traditionsById.get(id);
}

/** Nom lisible d'une tradition, même si elle n'a pas de fiche complète. */
const aliases: Record<string, string> = {
  'religion-cananeenne': 'Religion cananéenne',
  'religion-vedique': 'Religion védique',
  'religion-indus': 'Civilisation de l’Indus',
  'religion-indo-europeenne': 'Religion indo-européenne',
  'religion-indo-iranienne': 'Religion indo-iranienne',
  'religion-chinoise-ancienne': 'Religion chinoise archaïque',
  'religion-arabe-preislamique': 'Religion arabe préislamique',
  'religion-celtique': 'Religions celtiques',
  'religions-tribales-inde': 'Religions tribales de l’Inde',
  'chamanisme-siberien': 'Chamanisme sibérien',
  'chamanisme-chinois': 'Chamanisme chinois (wu)',
  platonisme: 'Platonisme et néoplatonisme',
  sramana: 'Mouvement shramana',
  bhakti: 'Mouvement bhakti',
  soufisme: 'Soufisme',
  'chiisme-duodecimain': 'Chiisme duodécimain',
  bon: 'Bön tibétain',
  mithraisme: 'Mithraïsme',
  hermetisme: 'Hermétisme',
  catharisme: 'Catharisme',
  bogomilisme: 'Bogomilisme',
  theosophie: 'Théosophie',
  jungisme: 'Psychologie analytique (Jung)',
  'esoterisme-occidental': 'Ésotérisme occidental',
  'medecine-chinoise': 'Médecine chinoise',
  'contreculture-occidentale': 'Contre-culture occidentale',
  'lumieres-europeennes': 'Lumières européennes',
  'neoconfucianisme-coreen': 'Néo-confucianisme coréen',
  'bouddhisme-tibetain': 'Bouddhisme tibétain',
  'bouddhisme-japonais': 'Bouddhisme japonais',
  'nouvelles-religions-japonaises': 'Nouvelles religions japonaises',
  'christianisme-africain': 'Christianismes africains',
  vodou: 'Vodou',
  candomble: 'Candomblé',
  santeria: 'Santería',
  'blues-gospel': 'Blues et gospel',
  garveyisme: 'Garveyisme',
  panafricanisme: 'Panafricanisme',
  reggae: 'Reggae',
  gandhisme: 'Gandhisme',
  'ecologie-profonde': 'Écologie profonde',
  ecofeminisme: 'Écoféminisme',
  'culture-populaire': 'Culture populaire',
  'fantasy-moderne': 'Fantasy moderne',
  neochamanisme: 'Néochamanisme',
  'droit-nature': 'Droits de la nature',
  'droits-humains': 'Droits humains',
  bioethique: 'Bioéthique',
  astrologie: 'Astrologie',
  'nation-of-islam': 'Nation of Islam',
  neoconfucianisme: 'Néo-confucianisme',
  'sramana-jain': 'Shramanisme jaïn',
};

/** Identifiants tolérés sans fiche propre : courants, milieux, mouvances. */
export const traditionAliases = aliases;

export function isKnownTradition(id: string): boolean {
  return traditionsById.has(id) || id in aliases;
}

export function traditionName(id: string): string {
  return traditionsById.get(id)?.name ?? aliases[id] ?? id;
}

export function traditionColor(id: string): string {
  return traditionsById.get(id)?.color ?? '#8d7f68';
}

export const families: { id: Tradition['family']; label: string; description: string }[] = [
  { id: 'abrahamique', label: 'Abrahamiques', description: 'Issues de la figure d’Abraham et du monothéisme proche-oriental' },
  { id: 'dharmique', label: 'Dharmiques (indiennes)', description: 'Nées dans le sous-continent indien autour du dharma, du karma et de la libération' },
  { id: 'est-asiatique', label: 'Est-asiatiques', description: 'Chine, Japon, Corée, Vietnam : harmonie, rite, ancêtres' },
  { id: 'iranienne', label: 'Iraniennes et dualistes', description: 'Zoroastrisme et ses héritiers dualistes ou gnostiques' },
  { id: 'antique', label: 'Antiques', description: 'Religions disparues du monde ancien, à l’influence persistante' },
  { id: 'indigene', label: 'Autochtones', description: 'Traditions orales, territoriales et ancestrales' },
  { id: 'moderne', label: 'Modernes et séculières', description: 'Mouvements récents et sorties de religion' },
];
