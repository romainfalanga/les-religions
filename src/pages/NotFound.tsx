import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-6xl text-ink-300">✧</p>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-ink-950">Cette page n’existe pas</h1>
      <p className="mt-3 max-w-md text-sm text-ink-600">
        Le lien est peut-être ancien, ou la fiche n’a pas encore été rédigée. Utilisez la recherche
        (⌘K) ou revenez au sommaire.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-medium text-parchment transition hover:bg-ink-800"
        >
          Accueil
        </Link>
        <Link
          to="/parcours"
          className="rounded-lg border border-ink-300 bg-white/60 px-5 py-2.5 text-sm font-medium text-ink-800 transition hover:border-ink-400"
        >
          Parcours guidés
        </Link>
      </div>
    </div>
  );
}
