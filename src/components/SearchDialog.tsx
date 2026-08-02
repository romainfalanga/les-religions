import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kindLabels, search, type SearchItem } from '../lib/search';
import { cx } from '../lib/utils';

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => search(query, 24), [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const go = (item: SearchItem) => {
    onClose();
    navigate(item.href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/30 px-4 pt-[10vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-ink-200 bg-parchment shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-ink-200 px-4">
          <span className="text-ink-400">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              }
              if (e.key === 'Enter' && results[active]) go(results[active]);
            }}
            placeholder="Rechercher une religion, un personnage, un texte, une notion…"
            className="w-full bg-transparent py-4 text-[0.95rem] outline-none placeholder:text-ink-400"
          />
          <kbd className="hidden rounded border border-ink-200 px-1.5 py-0.5 text-[0.65rem] text-ink-400 sm:block">
            esc
          </kbd>
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <p className="px-5 py-8 text-center text-sm text-ink-400">
              Tapez au moins deux caractères. Plus de 500 entrées sont indexées.
            </p>
          ) : results.length === 0 ? (
            <p className="px-5 py-8 text-center text-sm text-ink-400">Aucun résultat.</p>
          ) : (
            <ul className="py-2">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.id}`}>
                  <button
                    onClick={() => go(r)}
                    onMouseEnter={() => setActive(i)}
                    className={cx(
                      'flex w-full items-start gap-3 px-5 py-2.5 text-left transition',
                      i === active ? 'bg-ink-100' : 'hover:bg-ink-50',
                    )}
                  >
                    <span className="mt-0.5 w-[5.5rem] shrink-0 text-[0.65rem] uppercase tracking-wide text-ink-400">
                      {kindLabels[r.kind]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-ink-900">{r.title}</span>
                      <span className="block truncate text-xs text-ink-500">{r.subtitle}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
