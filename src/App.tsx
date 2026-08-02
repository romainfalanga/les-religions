import { Suspense, lazy, useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { SearchDialog } from './components/SearchDialog';
import { cx } from './lib/utils';

import Home from './pages/Home';

// Toutes les autres pages sont chargées à la demande : les données de l'atlas
// pèsent plus d'un mégaoctet, et personne n'a besoin des 227 fiches de
// personnages pour lire la page d'accueil.
const Traditions = lazy(() => import('./pages/Traditions'));
const TraditionDetail = lazy(() => import('./pages/TraditionDetail'));
const Figures = lazy(() => import('./pages/Figures'));
const FigureDetail = lazy(() => import('./pages/FigureDetail'));
const Texts = lazy(() => import('./pages/Texts'));
const TextDetail = lazy(() => import('./pages/TextDetail'));
const Timeline = lazy(() => import('./pages/Timeline'));
const MapPage = lazy(() => import('./pages/MapPage'));
const Atelier = lazy(() => import('./pages/Atelier'));
const Emergence = lazy(() => import('./pages/Emergence'));
const Themes = lazy(() => import('./pages/Themes'));
const ThemeDetail = lazy(() => import('./pages/ThemeDetail'));
const Concepts = lazy(() => import('./pages/Concepts'));
const Influences = lazy(() => import('./pages/Influences'));
const Paths = lazy(() => import('./pages/Paths'));
const PathDetail = lazy(() => import('./pages/PathDetail'));
const Method = lazy(() => import('./pages/Method'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="container-page py-24 text-center text-sm text-ink-500">Chargement…</div>
  );
}

const nav = [
  { to: '/traditions', label: 'Traditions' },
  { to: '/personnages', label: 'Personnages' },
  { to: '/textes', label: 'Textes' },
  { to: '/chronologie', label: 'Chronologie' },
  { to: '/carte', label: 'Carte' },
  { to: '/atelier', label: 'Atelier' },
  { to: '/emergence', label: 'Émergence' },
  { to: '/comparaisons', label: 'Comparaisons' },
  { to: '/influences', label: 'Influences' },
  { to: '/notions', label: 'Notions' },
  { to: '/parcours', label: 'Parcours' },
];

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === '/' && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />

      <header className="sticky top-0 z-40 border-b border-ink-200 bg-parchment/90 backdrop-blur">
        <div className="container-page flex h-16 items-center gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-ink-900 font-serif text-sm text-parchment">
              A
            </span>
            <span className="font-serif text-[0.95rem] font-semibold leading-tight text-ink-950">
              Atlas des
              <br className="hidden sm:block" /> Religions
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-0 xl:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cx(
                    'whitespace-nowrap rounded-md px-2 py-1.5 text-[0.8rem] transition',
                    isActive ? 'bg-ink-900 text-parchment' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setSearchOpen(true)}
            className="ml-auto flex shrink-0 items-center gap-2 rounded-md border border-ink-200 bg-white/60 px-3 py-1.5 text-sm text-ink-500 transition hover:border-ink-300 xl:ml-2"
            aria-label="Rechercher"
          >
            <span>⌕</span>
            <span className="hidden sm:inline">Rechercher</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="shrink-0 rounded-md border border-ink-200 px-2.5 py-1.5 text-sm xl:hidden"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-ink-200 bg-parchment xl:hidden">
            <div className="container-page grid grid-cols-2 gap-1 py-3 sm:grid-cols-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    cx(
                      'rounded-md px-3 py-2 text-sm',
                      isActive ? 'bg-ink-900 text-parchment' : 'text-ink-700 hover:bg-ink-100',
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <NavLink to="/methode" className="rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-ink-100">
                Méthode
              </NavLink>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/traditions/:id" element={<TraditionDetail />} />
          <Route path="/personnages" element={<Figures />} />
          <Route path="/personnages/:id" element={<FigureDetail />} />
          <Route path="/textes" element={<Texts />} />
          <Route path="/textes/:id" element={<TextDetail />} />
          <Route path="/chronologie" element={<Timeline />} />
          <Route path="/carte" element={<MapPage />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/emergence" element={<Emergence />} />
          <Route path="/comparaisons" element={<Themes />} />
          <Route path="/comparaisons/:id" element={<ThemeDetail />} />
          <Route path="/notions" element={<Concepts />} />
          <Route path="/influences" element={<Influences />} />
          <Route path="/parcours" element={<Paths />} />
          <Route path="/parcours/:id" element={<PathDetail />} />
          <Route path="/methode" element={<Method />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>

      <footer className="mt-12 border-t border-ink-200 bg-white/40">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <p className="font-serif text-lg font-semibold text-ink-950">Atlas des Religions</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Un outil de compréhension : histoire, figures, textes, enseignements et corrélations entre les
              traditions religieuses du monde. Les affirmations historiques y sont distinguées des affirmations
              de foi.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <Link to="/methode" className="link-underline text-ink-700">
              Méthode et limites
            </Link>
            <Link to="/parcours" className="link-underline text-ink-700">
              Par où commencer
            </Link>
            <Link to="/notions" className="link-underline text-ink-700">
              Glossaire
            </Link>
            <Link to="/atelier" className="link-underline text-ink-700">
              Textes en langue originale
            </Link>
          </div>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
