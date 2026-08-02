import { Link } from 'react-router-dom';
import { counts } from '../data/counts';
import { PageHeader, Callout } from '../components/ui';

interface Entry {
  to: string;
  title: string;
  desc: string;
  stat: string;
  use: string;
}

/**
 * L'encyclopédie, regroupée en quatre usages plutôt qu'en une grille de onze
 * rubriques équivalentes. Le groupement répond à la question « qu'est-ce que je
 * veux faire ? », pas « quels objets existent ? » — c'est ce qui manquait.
 */
const groups: { id: string; label: string; lead: string; entries: Entry[] }[] = [
  {
    id: 'situer',
    label: 'Situer',
    lead: 'Où, quand, dans quel monde. Les trois entrées qui répondent à « de quoi parle-t-on exactement ? ».',
    entries: [
      {
        to: '/traditions',
        title: 'Les traditions',
        desc: 'Une fiche par tradition, toutes construites sur la même trame — essence, question centrale, croyances, pratiques, éthique, histoire, branches, idées reçues, débats vivants — pour que la comparaison soit possible.',
        stat: `${counts.traditions} traditions`,
        use: 'Quand vous voulez une vue d’ensemble d’une religion.',
      },
      {
        to: '/chronologie',
        title: 'La chronologie',
        desc: 'De −100 000 à aujourd’hui, filtrable par époque, tradition et type d’événement. Les fourchettes de datation sont affichées comme telles.',
        stat: `${counts.events} événements`,
        use: 'Quand vous voulez savoir ce qui précède quoi.',
      },
      {
        to: '/carte',
        title: 'La carte',
        desc: 'Lieux et routes de diffusion, avec un curseur temporel : on voit ce qui existe à une date donnée, et par où cela a circulé. Sans frontières modernes, qui seraient anachroniques.',
        stat: `${counts.places} lieux · ${counts.routes} routes`,
        use: 'Quand la géographie éclaire mieux qu’un texte.',
      },
    ],
  },
  {
    id: 'personnes',
    label: 'Qui et quoi',
    lead: 'Les personnes et les livres, avec pour chacun ce que la tradition affirme et ce que l’histoire établit.',
    entries: [
      {
        to: '/personnages',
        title: 'Les personnages',
        desc: 'Fondateurs, prophètes, sages, mystiques, réformateurs. Chaque fiche porte un degré d’attestation historique explicite — attesté, probable, débattu, légendaire, mythique — et se laisse filtrer sur ce critère.',
        stat: `${counts.figures} personnages`,
        use: 'Quand un nom vous manque, ou que vous voulez peser une figure.',
      },
      {
        to: '/textes',
        title: 'Les textes',
        desc: 'Structure, enseignements majeurs, passages clés, histoire matérielle de la transmission, état de la recherche critique, et conseils de lecture pour aborder chaque corpus.',
        stat: `${counts.texts} textes`,
        use: 'Avant d’ouvrir un livre sacré pour la première fois.',
      },
      {
        to: '/notions',
        title: 'Le glossaire',
        desc: 'Karma, dharma, grâce, tawhid, canon, tabou. Avec, pour chaque notion, ses équivalents supposés dans les autres traditions — et les faux amis, qui sont la moitié de l’intérêt.',
        stat: `${counts.concepts} notions`,
        use: 'Quand un mot revient sans que son sens soit clair.',
      },
    ],
  },
  {
    id: 'comparer',
    label: 'Comparer',
    lead: 'Le cœur de l’atlas : ce qu’on ne voit qu’en mettant les traditions côte à côte.',
    entries: [
      {
        to: '/comparaisons',
        title: 'Les dossiers comparatifs',
        desc: 'Une question posée à toutes les traditions à la fois — Dieu, l’au-delà, le mal, la règle d’or, les femmes, la violence, le rite, la mystique, le salut, l’écologie — avec convergences, divergences réelles, et analyse.',
        stat: `${counts.themes} dossiers`,
        use: 'Quand la question vous intéresse plus que la religion.',
      },
      {
        to: '/influences',
        title: 'L’arbre des influences',
        desc: 'Qui a emprunté quoi à qui : filiations, schismes, emprunts, réactions, syncrétismes. Chaque lien est documenté et son degré de certitude indiqué.',
        stat: `${counts.influences} liens`,
        use: 'Quand deux traditions se ressemblent et que vous voulez savoir pourquoi.',
      },
      {
        to: '/emergence',
        title: 'Comment une religion naît',
        desc: 'Les mécanismes récurrents — crise fondatrice, autorité charismatique, clôture du canon, schisme de succession, alliance avec le pouvoir, retour aux sources — avec, pour chacun, ce qu’il n’explique pas.',
        stat: `${counts.mechanisms} mécanismes`,
        use: 'Quand vous voulez la mécanique plutôt que le récit.',
      },
    ],
  },
  {
    id: 'sources',
    label: 'Aller à la source',
    lead: 'Là où l’atlas cesse de résumer et vous met devant le texte lui-même.',
    entries: [
      {
        to: '/atelier',
        title: 'L’atelier de traduction',
        desc: 'Les passages dans leur écriture d’origine — hébreu, grec, arabe, sanskrit, pāli, chinois, gurmukhī — avec translittération, rendu mot à mot, traductions françaises datées confrontées, et l’analyse du choix opéré.',
        stat: `${counts.corpusBooks} corpus · ${counts.corpusUnits} passages`,
        use: 'Quand vous voulez vérifier plutôt que croire un résumé.',
      },
      {
        to: '/dialogues',
        title: 'Parler aux textes',
        desc: 'Interroger la voix divine telle que chacun des trois corpus monothéistes la met en scène, en choisissant la couche textuelle — et vérifier chaque réponse dans les passages qui l’ont produite.',
        stat: '3 voix · 8 registres',
        use: 'Quand vous voulez sentir la différence de ton entre deux couches d’un même livre.',
      },
      {
        to: '/parcours',
        title: 'Les parcours guidés',
        desc: 'Des itinéraires thématiques à travers l’encyclopédie, avec une consigne de lecture à chaque étape. Plus spécialisés que le cours, et à faire après lui.',
        stat: `${counts.paths} parcours`,
        use: 'Après le cours, pour approfondir un sujet précis.',
      },
    ],
  },
];

export default function Explore() {
  return (
    <div>
      <PageHeader
        eyebrow="Encyclopédie"
        title="Explorer"
        lead="Tout le contenu de référence, rangé par ce que vous cherchez à faire plutôt que par type d’objet. Si vous découvrez le sujet, le cours est un meilleur point de départ : ces fiches sont conçues pour vérifier et approfondir, pas pour apprendre depuis zéro."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/cours"
            className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-parchment transition hover:bg-ink-800"
          >
            Je préfère le cours
          </Link>
          <Link
            to="/commencer"
            className="rounded-lg border border-ink-300 bg-white/60 px-4 py-2 text-sm text-ink-800 transition hover:border-ink-400"
          >
            Les sept idées de base
          </Link>
        </div>
      </PageHeader>

      <div className="container-page py-10">
        {groups.map((g) => (
          <section key={g.id} className="mb-12">
            <h2 className="section-title">{g.label}</h2>
            <p className="mt-1.5 max-w-3xl text-sm text-ink-600">{g.lead}</p>
            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {g.entries.map((e) => (
                <Link key={e.to} to={e.to} className="card card-hover flex flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{e.title}</h3>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{e.desc}</p>
                  <p className="mt-3 border-t border-ink-100 pt-3 text-xs italic text-ink-500">
                    {e.use}
                  </p>
                  <p className="mt-1.5 text-xs text-ink-400">{e.stat}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <Callout label="Deux raccourcis" tone="neutral">
          La recherche globale s’ouvre partout avec <kbd className="rounded border border-ink-300 px-1 text-[0.7rem]">⌘K</kbd>{' '}
          ou <kbd className="rounded border border-ink-300 px-1 text-[0.7rem]">/</kbd> : elle indexe
          les traditions, les personnages, les textes, les événements, les lieux, les notions et les
          passages en langue originale. Et la page{' '}
          <Link to="/methode" className="link-underline">Méthode</Link> explique comment chaque fiche
          est faite, ce qui est délibérément absent, et où l’atlas est faible.
        </Callout>
      </div>
    </div>
  );
}
