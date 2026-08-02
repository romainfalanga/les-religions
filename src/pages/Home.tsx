import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { chapters, totalMinutes } from '../data/course';
import { keys } from '../data/orientation';
import { counts } from '../data/counts';
import { getDone, subscribeProgress } from '../lib/progress';

export default function Home() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setDone(getDone());
    sync();
    return subscribeProgress(sync);
  }, []);

  const doneSet = new Set(done);
  const next = chapters.find((c) => !doneSet.has(c.id));
  const started = doneSet.size > 0;

  return (
    <div>
      {/* Un seul point d'entrée dominant ---------------------------------- */}
      <section className="relative overflow-hidden border-b border-ink-200">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #3b352e 1px, transparent 1px), radial-gradient(circle at 70% 60%, #3b352e 1px, transparent 1px)',
            backgroundSize: '38px 38px, 52px 52px',
          }}
        />
        <div className="container-page relative py-16 sm:py-24">
          <p className="eyebrow mb-5">Un cours, puis une encyclopédie</p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] text-ink-950 sm:text-[3.4rem]">
            Comprendre les religions — dans l’ordre, sans se noyer.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-ink-700">
            Commencez par le cours : douze chapitres courts qui vous donnent de quoi situer
            n’importe quelle information. L’encyclopédie — {counts.figures} personnages,{' '}
            {counts.texts} textes, {counts.events} événements — vient après, quand vous saurez quoi
            en faire.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to={started && next ? `/cours/${next.id}` : '/commencer'}
              className="rounded-lg bg-ink-900 px-6 py-3.5 text-center text-[0.95rem] font-medium text-parchment transition hover:bg-ink-800"
            >
              {started && next
                ? `Reprendre — chapitre ${next.n}`
                : started
                  ? 'Cours terminé — relire'
                  : 'Commencer ici'}
            </Link>
            <Link
              to="/explorer"
              className="rounded-lg border border-ink-300 bg-white/60 px-6 py-3.5 text-center text-[0.95rem] text-ink-800 transition hover:border-ink-400"
            >
              Je sais déjà ce que je cherche
            </Link>
          </div>

          {started && (
            <div className="mt-6 max-w-xs">
              <div className="h-1.5 overflow-hidden rounded-full bg-ink-200">
                <div
                  className="h-full rounded-full bg-ink-800 transition-all"
                  style={{ width: `${(doneSet.size / chapters.length) * 100}%` }}
                />
              </div>
              <p className="mt-1.5 text-xs text-ink-500">
                {doneSet.size} chapitre{doneSet.size > 1 ? 's' : ''} sur {chapters.length}
              </p>
            </div>
          )}

          <p className="mt-8 text-sm text-ink-500">
            {totalMinutes} minutes de lecture pour le cours entier · gratuit · sans compte
          </p>
        </div>
      </section>

      <div className="container-page">
        {/* Ce que le cours défait ----------------------------------------- */}
        <section className="py-14 sm:py-16">
          <h2 className="section-title">Sept idées reçues, et ce qui les remplace</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600">
            Tant qu’une conception erronée n’est pas nommée, elle résiste à tout ce qu’on apprend
            ensuite et revient intacte. Le cours commence donc par les désigner.
          </p>
          <div className="mt-7 space-y-2.5">
            {keys.map((k) => (
              <Link
                key={k.id}
                to="/commencer"
                className="card card-hover flex flex-col gap-1.5 p-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-full text-sm text-ink-500 line-through decoration-ink-400 sm:w-[38%]">
                  {k.common}
                </span>
                <span className="hidden shrink-0 text-ink-300 sm:inline" aria-hidden>
                  →
                </span>
                <span className="flex-1 font-serif text-[1.02rem] font-semibold leading-snug text-ink-950">
                  {k.key}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Trois outils, pas onze ----------------------------------------- */}
        <section className="border-t border-ink-200 py-14 sm:py-16">
          <h2 className="section-title">Trois outils que vous ne trouverez pas ailleurs</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600">
            Le reste de l’atlas est une encyclopédie classique. Ces trois-là ne le sont pas.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Link to="/atelier" className="card card-hover flex flex-col p-6">
              <span className="text-2xl text-ink-400">ℵ</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink-950">
                L’atelier de traduction
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                Les textes dans leur écriture d’origine, confrontés à leurs traductions françaises
                successives. On y voit le moment exact où le sens bascule — et pourquoi certains de
                ces basculements ont déclenché des schismes.
              </p>
              <p className="mt-4 text-xs text-ink-500">
                {counts.corpusBooks} corpus · {counts.corpusUnits} passages
              </p>
            </Link>

            <Link to="/carte" className="card card-hover flex flex-col p-6">
              <span className="text-2xl text-ink-400">⌖</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink-950">La carte animée</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                Un curseur temporel de −100 000 à aujourd’hui, sans frontières modernes. On voit
                naître les foyers, s’ouvrir les routes, se déplacer les centres — ce qu’aucune
                chronologie linéaire ne montre.
              </p>
              <p className="mt-4 text-xs text-ink-500">
                {counts.places} lieux · {counts.routes} routes
              </p>
            </Link>

            <Link to="/dialogues" className="card card-hover flex flex-col p-6">
              <span className="text-2xl text-ink-400">✧</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink-950">
                Parler aux textes
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                Interroger la voix divine telle que chacun des trois corpus monothéistes la met en
                scène — et changer de couche textuelle pour entendre le même Dieu ne pas répondre
                pareil. Chaque réponse est vérifiable dans les passages fournis.
              </p>
              <p className="mt-4 text-xs text-ink-500">3 voix · 8 registres textuels</p>
            </Link>
          </div>
        </section>

        {/* Le parti pris --------------------------------------------------- */}
        <section className="border-t border-ink-200 py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="section-title">Le parti pris</h2>
              <p className="prose-serif mt-4">
                Trois registres sont distingués partout, systématiquement : ce qu’une tradition
                affirme d’elle-même, ce que la recherche historique permet d’établir, et ce que les
                autres traditions en disent. Quand ils divergent, l’atlas le signale au lieu de
                lisser.
              </p>
              <p className="prose-serif mt-3">
                Chaque personnage porte un degré d’attestation explicite. Chaque emprunt entre
                traditions est daté et pesé. Chaque traduction discutée est confrontée à ses
                concurrentes. Et chaque mécanisme d’explication est accompagné de ce qu’il
                n’explique pas — parce qu’une théorie qui explique tout n’explique rien.
              </p>
              <Link to="/methode" className="link-underline mt-5 inline-block text-sm text-ink-700">
                Méthode, partis pris et limites assumées →
              </Link>
            </div>

            <div className="card p-6">
              <p className="eyebrow mb-3">Ce que contient l’encyclopédie</p>
              <dl className="space-y-2 text-sm">
                {(
                  [
                    [counts.traditions, 'traditions'],
                    [counts.figures, 'personnages'],
                    [counts.texts, 'textes'],
                    [counts.events, 'événements'],
                    [counts.places, 'lieux cartographiés'],
                    [counts.themes, 'dossiers comparatifs'],
                    [counts.concepts, 'notions'],
                    [counts.influences, 'liens d’influence'],
                    [counts.corpusUnits, 'passages en langue originale'],
                  ] as [number, string][]
                ).map(([n, label]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-ink-600">{label}</dt>
                    <dd className="font-mono text-ink-950">{n}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/explorer"
                className="mt-5 block rounded-lg border border-ink-300 px-4 py-2 text-center text-sm text-ink-800 transition hover:border-ink-400"
              >
                Ouvrir l’encyclopédie
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
