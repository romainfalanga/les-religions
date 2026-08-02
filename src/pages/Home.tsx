import { Link } from 'react-router-dom';
import { traditions } from '../data/traditions';
import { figures } from '../data/figures';
import { texts } from '../data/texts';
import { timeline } from '../data/timeline';
import { themes } from '../data/themes';
import { concepts } from '../data/concepts';
import { learningPaths } from '../data/influences';
import { Chip, Stat } from '../components/ui';
import { tint } from '../lib/utils';

const entries = [
  {
    to: '/traditions',
    title: 'Les traditions',
    desc: 'Vingt-cinq familles religieuses : origines, croyances, pratiques, branches, idées reçues et débats vivants.',
    icon: '◍',
  },
  {
    to: '/personnages',
    title: 'Les personnages',
    desc: 'Fondateurs, prophètes, sages, mystiques et réformateurs — avec, pour chacun, ce que l’histoire établit et ce que la tradition affirme.',
    icon: '☗',
  },
  {
    to: '/textes',
    title: 'Les textes',
    desc: 'Structure, enseignements, passages clés, histoire de la transmission, apport de la recherche critique, et conseils de lecture.',
    icon: '❦',
  },
  {
    to: '/chronologie',
    title: 'La chronologie',
    desc: 'De Göbekli Tepe à nos jours : une frise filtrable par tradition, par époque et par type d’événement.',
    icon: '⟿',
  },
  {
    to: '/comparaisons',
    title: 'Les comparaisons',
    desc: 'Une question, toutes les réponses : Dieu, l’au-delà, le mal, la violence, les femmes, le rituel, la mystique.',
    icon: '⇹',
  },
  {
    to: '/influences',
    title: 'L’arbre des influences',
    desc: 'Qui a emprunté quoi à qui : filiations, schismes, emprunts, réactions et syncrétismes, documentés un par un.',
    icon: '❧',
  },
  {
    to: '/notions',
    title: 'Le glossaire',
    desc: 'Karma, dharma, grâce, tawhid, canon, tabou : les notions avec leurs équivalents croisés et les faux amis à éviter.',
    icon: '✱',
  },
  {
    to: '/parcours',
    title: 'Les parcours guidés',
    desc: 'Neuf itinéraires structurés, de la première approche à l’exégèse critique, pour ne pas se perdre.',
    icon: '⟐',
  },
];

export default function Home() {
  const featured = traditions.filter((t) =>
    ['judaisme', 'christianisme', 'islam', 'hindouisme', 'bouddhisme', 'taoisme'].includes(t.id),
  );

  return (
    <div>
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
          <p className="eyebrow mb-5">Histoire · Figures · Textes · Corrélations</p>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.1] text-ink-950 sm:text-6xl">
            Comprendre les religions — leur histoire, leurs textes et ce qu’elles ont en commun.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
            Un atlas construit pour saisir non seulement ce que chaque tradition affirme, mais{' '}
            <em>pourquoi</em> elle l’affirme, <em>d’où</em> cela vient, et <em>ce qui circule</em> d’une
            religion à l’autre. Les affirmations de foi y sont systématiquement distinguées de ce que la
            recherche historique établit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/parcours/decouverte"
              className="rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-medium text-parchment transition hover:bg-ink-800"
            >
              Commencer par le début
            </Link>
            <Link
              to="/chronologie"
              className="rounded-lg border border-ink-300 bg-white/60 px-5 py-2.5 text-sm font-medium text-ink-800 transition hover:border-ink-400"
            >
              Voir la chronologie
            </Link>
            <Link
              to="/methode"
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-ink-600 transition hover:text-ink-900"
            >
              Comment ce site est fait →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-ink-200 pt-8 sm:grid-cols-3 lg:grid-cols-6">
            <Stat value={String(traditions.length)} label="traditions" />
            <Stat value={String(figures.length)} label="personnages" />
            <Stat value={String(texts.length)} label="textes" />
            <Stat value={String(timeline.length)} label="événements" />
            <Stat value={String(themes.length)} label="comparaisons" />
            <Stat value={String(concepts.length)} label="notions" />
          </div>
        </div>
      </section>

      <div className="container-page">
        <section className="py-12 sm:py-16">
          <h2 className="section-title">Par où entrer</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {entries.map((e) => (
              <Link key={e.to} to={e.to} className="card card-hover group flex flex-col p-5">
                <span className="mb-3 text-2xl text-ink-400 transition group-hover:text-ink-700">{e.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-ink-950">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{e.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-ink-200 py-12 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Les grandes traditions</h2>
              <p className="mt-1.5 text-sm text-ink-600">
                Chaque fiche commence par une question : celle à laquelle la tradition répond en priorité.
              </p>
            </div>
            <Link to="/traditions" className="link-underline shrink-0 text-sm text-ink-700">
              Toutes les traditions →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <Link
                key={t.id}
                to={`/traditions/${t.id}`}
                className="card card-hover flex flex-col p-5"
                style={{ borderTopColor: t.color, borderTopWidth: 3 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-lg"
                    style={{ backgroundColor: tint(t.color, 0.14), color: t.color }}
                  >
                    {t.symbol}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-serif text-lg font-semibold text-ink-950">{t.name}</h3>
                    <p className="truncate text-xs text-ink-500">{t.adherents}</p>
                  </div>
                </div>
                <p className="prose-serif mt-3 text-[0.95rem]">{t.tagline}</p>
                <p className="mt-3 border-t border-ink-100 pt-3 text-xs italic text-ink-500">
                  {t.centralQuestion}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-ink-200 py-12 sm:py-16">
          <h2 className="section-title">Trois questions, toutes les réponses</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600">
            La comparaison est le meilleur instrument de compréhension : elle révèle qu’une tradition se
            définit autant par la question qu’elle pose que par la réponse qu’elle donne.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {themes.slice(0, 3).map((th) => (
              <Link key={th.id} to={`/comparaisons/${th.id}`} className="card card-hover p-6">
                <span className="text-2xl text-ink-400">{th.icon}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink-950">{th.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{th.question}</p>
                <p className="mt-4 text-xs text-ink-500">{th.positions.length} positions comparées</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-ink-200 py-12 sm:py-16">
          <h2 className="section-title">Parcours guidés</h2>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-600">
            Une masse de contenu sans itinéraire est inutilisable. Ces parcours enchaînent les fiches dans un
            ordre qui construit la compréhension.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningPaths.slice(0, 6).map((p) => (
              <Link key={p.id} to={`/parcours/${p.id}`} className="card card-hover p-5">
                <div className="flex items-center gap-2">
                  <Chip>{p.level}</Chip>
                  <span className="text-xs text-ink-500">{p.duration}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600">{p.subtitle}</p>
                <p className="mt-3 text-xs text-ink-500">{p.steps.length} étapes</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
