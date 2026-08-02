import { voices, buildSystemPrompt, selectAnchors, splitSources } from './src/data/dialogue/index.ts';
import { ask } from './probe.mjs';

const cases: [string, string, string][] = [
  ['yhwh', 'torah', 'Pourquoi les justes souffrent-ils ?'],
  ['yhwh', 'sagesse', 'Pourquoi les justes souffrent-ils ?'],
  ['evangile', 'synoptiques', 'Comment aimer quelqu’un qui m’a fait du mal ?'],
  ['evangile', 'jean', 'Comment aimer quelqu’un qui m’a fait du mal ?'],
  ['coran', 'mecquois', 'Pourquoi tant de religions différentes ?'],
  ['coran', 'medinois', 'Pourquoi tant de religions différentes ?'],
];

for (const [vid, reg, q] of cases) {
  const v = voices.find((x) => x.id === vid)!;
  const anchors = selectAnchors(v, reg, [{ role: 'user', content: q }]);
  const sys = buildSystemPrompt(v, reg, anchors);
  const r = await ask(sys, [{ role: 'user', content: q }]);
  console.log('\n' + '═'.repeat(78));
  console.log(`${v.name} — registre « ${reg} »`);
  console.log(`Q: ${q}`);
  console.log('─'.repeat(78));
  if ('error' in r) { console.log('ERREUR', r.error, r.body); continue; }
  const { text, sourceIds } = splitSources(r.text);
  console.log(text);
  const known = new Set(v.anchors.map((a) => a.id));
  const bad = sourceIds.filter((s) => !known.has(s));
  console.log(`\n→ sources: ${sourceIds.join(', ') || '(aucune)'}${bad.length ? '  ⚠ INCONNUES: ' + bad.join(',') : ' ✓'}`);
  console.log(`→ ${text.split(/\s+/).length} mots`);
}
