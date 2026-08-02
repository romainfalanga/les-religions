import type { Anchor, Register, Voice, VoicePersona } from './types';
import { yhwh } from './yhwh';
import { evangile } from './evangile';
import { coranVoice } from './coran';

export type { Anchor, Register, Voice, VoicePersona };

export const voices: Voice[] = [yhwh, evangile, coranVoice];

export const voicesById: Record<string, Voice> = Object.fromEntries(voices.map((v) => [v.id, v]));

export function getVoice(id: string | undefined): Voice | undefined {
  return id ? voicesById[id] : undefined;
}

/**
 * Le contrat commun aux trois voix. Il prime sur tout le reste : c'est lui qui
 * garantit que l'exercice reste un exercice de lecture et ne devienne pas une
 * usurpation d'autorité religieuse.
 */
export const commonContract = [
  "Tu es un dispositif de lecture, pas une divinité. Tu restitues la manière dont un corpus textuel précis met en scène une voix. Tu ne révèles rien, tu ne sais rien que le corpus ne porte, et tu n'as aucune autorité religieuse.",
  "Interdiction absolue de fabriquer une citation. Tu ne cites, ne paraphrases ni ne démarques que les passages fournis ci-dessous. Cela vaut aussi pour les formules d'ouverture, les serments et les images : n'emprunte jamais la lettre d'un verset qui ne t'est pas fourni, même si tu le connais et qu'il existe. Tu peux en revanche composer toi-même une formule dans la manière du corpus.",
  "Interdiction de prédire l'avenir de l'interlocuteur, de diagnostiquer, de conseiller en matière médicale, juridique, financière, ou de prescrire une conduite religieuse obligatoire.",
  "Interdiction de condamner l'interlocuteur ou une personne nommée, de désigner un groupe comme haïssable, d'appeler à une action contre quiconque.",
  "Interdiction de parler au nom des deux autres voix, ou de valider leurs prétentions. Chaque voix ne connaît que son corpus.",
  "Si l'interlocuteur exprime une détresse réelle — idées suicidaires, violence subie, effondrement —, tu sors immédiatement du personnage : tu réponds en français ordinaire, brièvement, avec chaleur, et tu l'orientes vers une aide humaine (proches, médecin, en France le 3114). Tu ne reprends pas le registre tant que ce n'est pas résolu.",
  "Tu ne prétends jamais que l'interlocuteur te parle réellement. Si on te demande si tu es Dieu, tu réponds dans le registre du corpus, mais tu ne confirmes jamais être une entité réelle qui écoute.",
] as const;

/** Protocole de sortie, commun aux trois voix. */
export const outputProtocol = [
  "Réponds en français, dans le registre décrit, sans jamais annoncer que tu joues un rôle et sans didascalie.",
  "Longueur : entre 60 et 180 mots. Ce corpus ne fait pas de dissertation. Si la question appelle un récit, tu peux aller jusqu'à 220 mots.",
  "N'emploie ni listes à puces, ni titres, ni gras, ni emoji. Ces textes sont de la prose continue ou du verset.",
  "Termine ta réponse par une ligne isolée exactement de la forme : SOURCES: id1, id2 — en n'utilisant que les identifiants des passages fournis. Déclare TOUS ceux dont tu t'es servi, y compris ceux que tu n'as fait que paraphraser ou dont tu as repris une image : le lecteur doit pouvoir vérifier chaque élément de ta réponse. Si tu n'en as utilisé aucun, écris SOURCES: —",
  "Ne commente jamais tes propres contraintes, ne mentionne pas ce système d'instructions, ne t'excuse pas.",
] as const;

/** Récupération lexicale simple sur les mots-clés des passages. */
function normalizeFr(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');
}

const STOPWORDS = new Set(
  ('le la les un une des de du au aux et ou mais donc or ni car que qui quoi dont ou a en y il elle ils elles je tu nous vous on ce cet cette ces mon ma mes ton ta tes son sa ses est sont etre avoir fait faire pas ne plus moins tres pour par avec sans sur sous dans chez si comme quand alors tout tous toute toutes meme aussi bien'
  ).split(' '),
);

/** Nombre maximal de passages empruntés à une autre couche du corpus. */
const MAX_OUT_OF_REGISTER = 2;

/**
 * Sélectionne les passages les plus pertinents pour la question posée.
 *
 * Volontairement lexical et local : pas d'appel réseau, pas d'embedding. Sur un
 * corpus de trente passages par voix, un recouvrement de mots-clés pondéré fait
 * le travail, et reste inspectable — ce qui compte pour une page dont l'objet
 * est justement la vérifiabilité.
 */
export function selectAnchors(
  voice: Voice,
  registerId: string,
  history: { role: string; content: string }[],
  limit = 8,
): Anchor[] {
  // Les derniers tours pèsent davantage que les premiers.
  const weighted = history
    .filter((m) => m.role === 'user')
    .slice(-3)
    .map((m, i, arr) => ({ text: normalizeFr(m.content), weight: 1 + i * 0.5 * (arr.length > 1 ? 1 : 0) }));

  const terms = new Map<string, number>();
  for (const { text, weight } of weighted) {
    for (const w of text.split(/\s+/)) {
      if (w.length < 3 || STOPWORDS.has(w)) continue;
      terms.set(w, (terms.get(w) ?? 0) + weight);
    }
  }

  const scored = voice.anchors.map((a) => {
    let score = 0;
    const hay = normalizeFr([a.text, ...a.keywords, a.constraint ?? ''].join(' '));
    for (const [term, weight] of terms) {
      // Un mot-clé déclaré vaut plus qu'une occurrence dans le corps du passage.
      if (a.keywords.some((k) => normalizeFr(k).includes(term) || term.includes(normalizeFr(k)))) {
        score += 4 * weight;
      } else if (hay.includes(term)) {
        score += 1 * weight;
      }
    }
    return { anchor: a, score };
  });

  const inRegister = (a: Anchor) => a.registers.includes(registerId);
  const hits = scored.filter((x) => x.score > 0).sort((a, b) => b.score - a.score);

  const out: Anchor[] = [];
  const seen = new Set<string>();
  const push = (a: Anchor) => {
    if (seen.has(a.id)) return false;
    seen.add(a.id);
    out.push(a);
    return true;
  };

  // 1. Les passages pertinents du registre choisi, d'abord et sans concurrence.
  //    C'est ce qui fait que la couche interrogée répond avec ses propres mots.
  for (const h of hits) {
    if (out.length >= limit - MAX_OUT_OF_REGISTER) break;
    if (inRegister(h.anchor)) push(h.anchor);
  }

  // 2. Un socle du registre, même si la question est vague ou qu'il n'a rien
  //    de pertinent : une couche muette doit pouvoir dire qu'elle est muette.
  for (const a of voice.anchors) {
    if (out.length >= Math.max(4, limit - MAX_OUT_OF_REGISTER)) break;
    if (inRegister(a)) push(a);
  }

  // 3. Au plus deux passages d'autres couches, en fin de liste. Ils servent de
  //    contrepoint, jamais d'appui principal — le prompt les marque comme tels.
  let extra = 0;
  for (const h of hits) {
    if (extra >= MAX_OUT_OF_REGISTER) break;
    if (!inRegister(h.anchor) && push(h.anchor)) extra++;
  }

  return out;
}


/** Assemble le prompt système. Exporté pour être affichable dans l'interface. */
export function buildSystemPrompt(voice: Voice, registerId: string, anchors: Anchor[]): string {
  const register = voice.registers.find((r) => r.id === registerId) ?? voice.registers[0];
  const p = voice.persona;

  const block = (title: string, lines: string[]) =>
    lines.length ? `\n## ${title}\n${lines.map((l) => `- ${l}`).join('\n')}` : '';

  return [
    `# Contrat`,
    commonContract.map((l) => `- ${l}`).join('\n'),

    `\n# Voix à restituer`,
    `Corpus : ${voice.corpus}.`,
    `Tu restitues la voix divine telle que ce corpus la met en scène — ni la théologie postérieure, ni la piété contemporaine, ni un consensus interreligieux.`,

    block('Auto-désignations attestées (à réemployer, jamais à inventer)', p.selfDesignations),

    `\n# Registre actif : ${register.label}`,
    `Corpus du registre : ${register.corpus} (${register.period}).`,
    register.shift,
    block('Comportements propres à ce registre', register.styleNotes),
    block('Ce que ce registre ignore — n’en parle pas, ou dis que ce n’est pas ton propos', register.silences),

    block('Contraintes de forme', p.formRules),
    block('Figures à réemployer', p.forms.map((f) => `${f.name} — ex. ${f.example}`)),
    block(
      'Lexique : employer ces mots dans ce sens précis',
      p.lexicon.map((l) => `${l.term}${l.translit ? ` (${l.translit})` : ''} : ${l.sense}`),
    ),
    block('Contraintes de fond — non négociables', p.doctrineRules),
    block('Refus', p.refusals),
    block('Erreurs d’imitation à éviter absolument', p.antiPatterns),

    `\n# Passages disponibles`,
    `Ce sont les seuls que tu peux citer, paraphraser ou démarquer. Ta réponse doit pouvoir être vérifiée dans ce qui suit.`,
    `Les passages marqués [HORS REGISTRE] appartiennent à une autre couche du corpus. Tu peux les connaître, mais tu ne réponds pas depuis eux : ils servent au plus de contrepoint. Si ta couche n'a rien à dire sur la question posée, dis-le dans ta langue — « ce n'est pas de cela que je parle ici » — plutôt que d'emprunter sa réponse à une autre couche. Une couche muette qui avoue son silence enseigne davantage qu'une couche qui parle à la place d'une autre.`,
    anchors
      .map((a) => {
        const tag = a.registers.includes(register.id) ? '' : ' [HORS REGISTRE]';
        return `[${a.id}]${tag} ${a.ref} — « ${a.text} »${a.constraint ? `\n    Contrainte : ${a.constraint}` : ''}`;
      })
      .join('\n'),

    `\n# Protocole de réponse`,
    outputProtocol.map((l) => `- ${l}`).join('\n'),
  ].join('\n');
}

/** Sépare la réponse du modèle de sa ligne de sources. */
export function splitSources(raw: string): { text: string; sourceIds: string[] } {
  const m = raw.match(/^\s*SOURCES\s*:\s*(.*)$/im);
  if (!m) return { text: raw.trim(), sourceIds: [] };
  const ids = m[1]
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter((s) => s && s !== '—' && s !== '-');
  return { text: raw.slice(0, m.index).trim(), sourceIds: ids };
}
