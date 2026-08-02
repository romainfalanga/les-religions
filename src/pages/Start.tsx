import { Link } from 'react-router-dom';
import { doors, keys } from '../data/orientation';
import { chapters, totalMinutes } from '../data/course';
import { Callout } from '../components/ui';

export default function Start() {
  return (
    <div>
      <header className="border-b border-ink-200 bg-gradient-to-b from-white/80 to-transparent py-12 sm:py-16">
        <div className="container-page">
          <p className="eyebrow mb-4">Avant tout le reste</p>
          <h1 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink-950 sm:text-[2.7rem]">
            Sept idées qui rendent tout le reste lisible
          </h1>
          <p className="prose-serif mt-5 max-w-3xl">
            Cet atlas contient plus de huit cents fiches. Ouvertes dans le désordre, elles
            n’apprennent rien : il manque la structure à laquelle les accrocher. Ces sept idées sont
            cette structure. Elles se lisent en dix minutes, et chacune corrige une intuition
            courante qui, tant qu’elle tient, empêche de comprendre la suite.
          </p>
        </div>
      </header>

      <div className="container-page py-10">
        {/* Les clés ---------------------------------------------------------- */}
        <ol className="space-y-4">
          {keys.map((k) => (
            <li key={k.id} className="card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink-900 font-mono text-sm text-parchment">
                  {k.n}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-ink-500">
                    <span className="line-through decoration-ink-400">{k.common}</span>
                  </p>
                  <h2 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-ink-950">
                    {k.key}
                  </h2>
                  <p className="prose-serif mt-2.5 text-[0.98rem]">{k.text}</p>
                  <Link
                    to={k.path}
                    className="mt-3 inline-block text-sm text-ink-600 underline decoration-ink-300 underline-offset-4 transition hover:text-ink-900 hover:decoration-ink-800"
                  >
                    {k.pathLabel} →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Les trois portes -------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="section-title">Et maintenant, par où ?</h2>
          <p className="mt-1.5 max-w-3xl text-sm text-ink-600">
            Trois entrées, selon ce que vous venez chercher. Elles ne s’excluent pas : on peut
            suivre le cours et fouiller l’encyclopédie en parallèle.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {doors.map((d, i) => (
              <div key={d.id} className="card flex flex-col p-6">
                <p className="eyebrow">Entrée {i + 1}</p>
                <h3 className="mt-1.5 font-serif text-xl font-semibold text-ink-950">{d.label}</h3>
                <p className="mt-1.5 text-sm italic text-ink-500">{d.who}</p>
                <p className="prose-serif mt-3 flex-1 text-[0.95rem]">{d.text}</p>
                <p className="mt-4 text-xs text-ink-500">{d.minutes}</p>
                <Link
                  to={d.path}
                  className="mt-3 inline-block rounded-lg bg-ink-900 px-4 py-2 text-center text-sm font-medium text-parchment transition hover:bg-ink-800"
                >
                  {d.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Le plan du cours -------------------------------------------------- */}
        <section className="mt-14">
          <h2 className="section-title">Ce que couvre le cours</h2>
          <p className="mt-1.5 max-w-3xl text-sm text-ink-600">
            Douze chapitres, {totalMinutes} minutes de lecture au total. Vous pouvez tout lire d’une
            traite ou un chapitre par jour — la progression est retenue dans votre navigateur.
          </p>
          <ol className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {chapters.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/cours/${c.id}`}
                  className="flex items-baseline gap-3 rounded-lg border border-ink-200 bg-white/50 px-4 py-2.5 transition hover:border-ink-400"
                >
                  <span className="font-mono text-xs text-ink-400">
                    {String(c.n).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-sm text-ink-800">{c.title}</span>
                  <span className="text-[0.7rem] text-ink-400">{c.minutes} min</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12">
          <Callout label="Un mot sur la manière dont ce site est écrit" tone="neutral">
            Rien ici n’est neutre au sens de « sans point de vue » : la neutralité affichée cache
            toujours des choix. Le parti pris est explicite et constant — distinguer ce qu’une
            tradition affirme d’elle-même, ce que l’histoire permet d’établir, et ce que les autres
            traditions en disent. Quand ces trois plans divergent, l’atlas le signale plutôt que de
            lisser.{' '}
            <Link to="/methode" className="link-underline">
              Les limites assumées sont détaillées ici.
            </Link>
          </Callout>
        </div>
      </div>
    </div>
  );
}
