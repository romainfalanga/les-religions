import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { SearchDialog } from './components/SearchDialog';
import { cx } from './lib/utils';

import Home from './pages/Home';

// Toutes les autres pages sont chargées à la demande : les données de l'atlas
// pèsent plus d'un mégaoctet, et personne n'a besoin des 227 fiches de
// personnages pour lire la page d'accueil.
const Start = lazy(() => import('./pages/Start'));
const Course = lazy(() => import('./pages/Course'));
const CourseChapter = lazy(() => import('./pages/CourseChapter'));
const Explore = lazy(() => import('./pages/Explore'));
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
const Dialogues = lazy(() => import('./pages/Dialogues'));
const DialogueRoom = lazy(() => import('./pages/DialogueRoom'));
const Themes = lazy(() => import('./pages/Themes'));
const ThemeDetail = lazy(() => import('./pages/ThemeDetail'));
const Concepts = lazy(() => import('./pages/Concepts'));
const Influences = lazy(() => import('./pages/Influences'));
const Paths = lazy(() => import('./pages/Paths'));
const PathDetail = lazy(() => import('./pages/PathDetail'));
const Method = lazy(() => import('./pages/Method'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return <div className="container-page py-24 text-center text-sm text-ink-500">Chargement…</div>;
}

/**
 * Navigation : quatre entrées visibles, le reste replié.
 *
 * L'ancienne barre alignait onze rubriques de même poids, ce qui obligeait à
 * choisir avant de savoir quoi choisir. On applique ici la divulgation
 * progressive : un chemin d'apprentissage devant, la référence derrière un
 * menu, et le tout redéployé en clair sur la page « Explorer ».
 */
const primary = [
  { to: '/commencer', label: 'Commencer' },
  { to: '/cours', label: 'Le cours' },
];

const groups: { label: string; items: { to: string; label: string; hint: string }[] }[] = [
  {
    label: 'Situer',
    items: [
      { to: '/traditions', label: 'Traditions', hint: '27 fiches sur la même trame' },
      { to: '/chronologie', label: 'Chronologie', hint: 'de −100 000 à aujourd’hui' },
      { to: '/carte', label: 'Carte', hint: '175 lieux, curseur temporel' },
    ],
  },
  {
    label: 'Qui et quoi',
    items: [
      { to: '/personnages', label: 'Personnages', hint: '227 fiches, attestation graduée' },
      { to: '/textes', label: 'Textes', hint: '101 corpus et leur transmission' },
      { to: '/notions', label: 'Notions', hint: 'glossaire et faux amis' },
    ],
  },
  {
    label: 'Comparer',
    items: [
      { to: '/comparaisons', label: 'Comparaisons', hint: 'une question, toutes les réponses' },
      { to: '/influences', label: 'Influences', hint: 'qui a emprunté quoi à qui' },
      { to: '/emergence', label: 'Émergence', hint: 'comment une religion naît' },
    ],
  },
  {
    label: 'Aller à la source',
    items: [
      { to: '/atelier', label: 'Atelier de traduction', hint: 'les textes en langue originale' },
      { to: '/dialogues', label: 'Parler aux textes', hint: 'les trois voix monothéistes' },
      { to: '/parcours', label: 'Parcours guidés', hint: 'itinéraires thématiques' },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

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
  const [exploreOpen, setExploreOpen] = useState(false);
  const { pathname } = useLocation();
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === '/' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') setExploreOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) setExploreOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, []);

  const inExplore = allItems.some((i) => pathname.startsWith(i.to));

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />

      <header className="sticky top-0 z-40 border-b border-ink-200 bg-parchment/90 backdrop-blur">
        <div className="container-page flex h-16 items-center gap-3">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-ink-900 font-serif text-sm text-parchment">
              A
            </span>
            <span className="font-serif text-[0.95rem] font-semibold leading-tight text-ink-950">
              Atlas des
              <br className="hidden sm:block" /> Religions
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {primary.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cx(
                    'whitespace-nowrap rounded-md px-3 py-1.5 text-[0.85rem] transition',
                    isActive
                      ? 'bg-ink-900 text-parchment'
                      : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}

            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen((v) => !v)}
                aria-expanded={exploreOpen}
                className={cx(
                  'flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-[0.85rem] transition',
                  inExplore || exploreOpen
                    ? 'bg-ink-900 text-parchment'
                    : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
                )}
              >
                Explorer
                <span className={cx('text-[0.6rem] transition', exploreOpen && 'rotate-180')} aria-hidden>
                  ▾
                </span>
              </button>

              {exploreOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-[42rem] max-w-[calc(100vw-2rem)] rounded-xl border border-ink-200 bg-parchment p-5 shadow-[0_20px_50px_-20px_rgba(59,53,46,0.5)]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    {groups.map((g) => (
                      <div key={g.label}>
                        <p className="eyebrow mb-2">{g.label}</p>
                        <ul className="space-y-0.5">
                          {g.items.map((i) => (
                            <li key={i.to}>
                              <Link
                                to={i.to}
                                className="block rounded-md px-2 py-1.5 transition hover:bg-ink-100"
                              >
                                <span className="block text-[0.85rem] text-ink-900">{i.label}</span>
                                <span className="block text-[0.72rem] text-ink-500">{i.hint}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/explorer"
                    className="mt-4 block border-t border-ink-200 pt-3 text-center text-[0.8rem] text-ink-600 hover:text-ink-900"
                  >
                    Voir toute l’encyclopédie, expliquée →
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <button
            onClick={() => setSearchOpen(true)}
            className="ml-auto flex shrink-0 items-center gap-2 rounded-md border border-ink-200 bg-white/60 px-3 py-1.5 text-sm text-ink-500 transition hover:border-ink-300 md:ml-1"
            aria-label="Rechercher"
          >
            <span aria-hidden>⌕</span>
            <span className="hidden sm:inline">Rechercher</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="shrink-0 rounded-md border border-ink-200 px-2.5 py-1.5 text-sm md:hidden"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="max-h-[75vh] overflow-y-auto border-t border-ink-200 bg-parchment md:hidden">
            <div className="container-page py-4">
              <div className="grid grid-cols-2 gap-1.5">
                {primary.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className={({ isActive }) =>
                      cx(
                        'rounded-md px-3 py-2.5 text-center text-sm font-medium',
                        isActive ? 'bg-ink-900 text-parchment' : 'border border-ink-300 text-ink-800',
                      )
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}
              </div>

              {groups.map((g) => (
                <div key={g.label} className="mt-4">
                  <p className="eyebrow mb-1.5">{g.label}</p>
                  <div className="grid grid-cols-2 gap-1">
                    {g.items.map((i) => (
                      <NavLink
                        key={i.to}
                        to={i.to}
                        className={({ isActive }) =>
                          cx(
                            'rounded-md px-3 py-2 text-sm',
                            isActive ? 'bg-ink-900 text-parchment' : 'text-ink-700 hover:bg-ink-100',
                          )
                        }
                      >
                        {i.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-4 border-t border-ink-200 pt-3">
                <NavLink to="/methode" className="block px-3 py-2 text-sm text-ink-600">
                  Méthode et limites
                </NavLink>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commencer" element={<Start />} />
            <Route path="/cours" element={<Course />} />
            <Route path="/cours/:id" element={<CourseChapter />} />
            <Route path="/explorer" element={<Explore />} />
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
            <Route path="/dialogues" element={<Dialogues />} />
            <Route path="/dialogues/:id" element={<DialogueRoom />} />
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
        <div className="container-page py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-md">
              <p className="font-serif text-lg font-semibold text-ink-950">Atlas des Religions</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Un cours en douze chapitres, puis une encyclopédie : histoire, figures, textes,
                enseignements et corrélations entre les traditions religieuses du monde. Les
                affirmations historiques y sont distinguées des affirmations de foi.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Apprendre</p>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/commencer" className="text-ink-600 hover:text-ink-900">
                    Les sept idées de base
                  </Link>
                </li>
                <li>
                  <Link to="/cours" className="text-ink-600 hover:text-ink-900">
                    Le cours
                  </Link>
                </li>
                <li>
                  <Link to="/parcours" className="text-ink-600 hover:text-ink-900">
                    Parcours guidés
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-2">Vérifier</p>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/atelier" className="text-ink-600 hover:text-ink-900">
                    Textes en langue originale
                  </Link>
                </li>
                <li>
                  <Link to="/notions" className="text-ink-600 hover:text-ink-900">
                    Glossaire
                  </Link>
                </li>
                <li>
                  <Link to="/methode" className="text-ink-600 hover:text-ink-900">
                    Méthode et limites
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
