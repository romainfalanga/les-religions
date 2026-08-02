import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { corpusBooks, corpusUnitCount, scriptClass } from '../data/corpus';
import type { CorpusBook, CorpusUnit } from '../data/corpus';
import { traditionColor, traditionName } from '../data/traditions';
import { PageHeader, Callout } from '../components/ui';
import { cx, tint } from '../lib/utils';

type Mode = 'lecture' | 'confrontation';

/** Une « page » de l'atelier : le livre découpé en feuillets de 2 unités. */
const PER_PAGE = 2;

export default function Atelier() {
  const [params, setParams] = useSearchParams();
  const bookId = params.get('livre') ?? corpusBooks[0].id;
  const book = corpusBooks.find((b) => b.id === bookId) ?? corpusBooks[0];
  const pageParam = Number(params.get('page') ?? '1');

  const pageCount = Math.max(1, Math.ceil(book.units.length / PER_PAGE));
  const page = Math.min(Math.max(1, Number.isFinite(pageParam) ? pageParam : 1), pageCount);

  const [mode, setMode] = useState<Mode>('lecture');
  const [showTranslit, setShowTranslit] = useState(true);
  const [showLiteral, setShowLiteral] = useState(true);

  const units = book.units.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const setBook = (id: string) => setParams({ livre: id, page: '1' });
  const setPage = (p: number) => setParams({ livre: book.id, page: String(p) });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [bookId, page]);

  const grouped = useMemo(() => {
    const map = new Map<string, CorpusBook[]>();
    corpusBooks.forEach((b) => {
      const key = b.language.split(/[ ,]/)[0];
      map.set(key, [...(map.get(key) ?? []), b]);
    });
    return [...map.entries()];
  }, []);

  const color = book.traditions[0] ? traditionColor(book.traditions[0]) : '#8d7f68';

  return (
    <div>
      <PageHeader
        eyebrow={`${corpusBooks.length} corpus · ${corpusUnitCount} passages`}
        title="Atelier de traduction"
        lead="Chaque passage est donné dans son écriture d’origine, translittéré, rendu mot à mot, puis confronté à plusieurs traductions françaises historiques. L’objectif n’est pas de désigner la bonne version : c’est de rendre visible le moment où le traducteur a dû choisir — et ce que son choix engage."
      >
        <div className="flex flex-wrap items-center gap-2">
          {grouped.map(([lang, books]) => (
            <div key={lang} className="flex flex-wrap items-center gap-1.5">
              <span className="text-[0.7rem] uppercase tracking-wide text-ink-400">{lang}</span>
              {books.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBook(b.id)}
                  className={cx(
                    'rounded-full border px-3 py-1.5 text-xs transition',
                    b.id === book.id
                      ? 'text-white'
                      : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
                  )}
                  style={
                    b.id === book.id
                      ? {
                          backgroundColor: b.traditions[0] ? traditionColor(b.traditions[0]) : '#3b352e',
                          borderColor: b.traditions[0] ? traditionColor(b.traditions[0]) : '#3b352e',
                        }
                      : undefined
                  }
                >
                  {b.title}
                </button>
              ))}
            </div>
          ))}
        </div>
      </PageHeader>

      <div className="container-page py-8">
        {/* En-tête du livre ------------------------------------------------- */}
        <div className="card p-6" style={{ borderColor: tint(color, 0.35) }}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink-950">{book.title}</h2>
              <p className="mt-1 text-sm text-ink-500">
                {book.language} · {book.script} · {book.composed}
                {book.rtl && ' · écriture de droite à gauche'}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {book.traditions.map((t) => (
                <span
                  key={t}
                  className="chip"
                  style={{
                    borderColor: tint(traditionColor(t), 0.35),
                    backgroundColor: tint(traditionColor(t), 0.08),
                    color: traditionColor(t),
                  }}
                >
                  {traditionName(t)}
                </span>
              ))}
              {book.textId && (
                <Link
                  to={`/textes/${book.textId}`}
                  className="chip border-ink-200 bg-ink-50 text-ink-600 hover:border-ink-400"
                >
                  Fiche du texte →
                </Link>
              )}
            </div>
          </div>
          <p className="prose-serif mt-4 max-w-3xl">{book.intro}</p>
          <div className="mt-5">
            <Callout label="Ce qui, dans cette langue, résiste au français" tone="info">
              {book.translationNote}
            </Callout>
          </div>
        </div>

        {/* Barre d'outils ---------------------------------------------------- */}
        <div className="sticky top-16 z-20 -mx-5 mt-6 border-y border-ink-200 bg-parchment/95 px-5 py-2.5 backdrop-blur sm:-mx-8 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <div className="flex items-center gap-1 rounded-full border border-ink-200 bg-white/60 p-0.5">
              {(['lecture', 'confrontation'] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={cx(
                    'rounded-full px-3 py-1 transition',
                    mode === m ? 'bg-ink-900 text-parchment' : 'text-ink-600 hover:text-ink-900',
                  )}
                >
                  {m === 'lecture' ? 'Lecture' : 'Confrontation'}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-1.5 text-ink-600">
              <input
                type="checkbox"
                checked={showTranslit}
                onChange={(e) => setShowTranslit(e.target.checked)}
                className="accent-ink-800"
              />
              Translittération
            </label>
            <label className="flex items-center gap-1.5 text-ink-600">
              <input
                type="checkbox"
                checked={showLiteral}
                onChange={(e) => setShowLiteral(e.target.checked)}
                className="accent-ink-800"
              />
              Mot à mot
            </label>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
                className="rounded-md border border-ink-200 bg-white/60 px-2.5 py-1 disabled:opacity-30"
              >
                ← Page précédente
              </button>
              <span className="font-mono text-ink-500">
                {page} / {pageCount}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page >= pageCount}
                className="rounded-md border border-ink-200 bg-white/60 px-2.5 py-1 disabled:opacity-30"
              >
                Page suivante →
              </button>
            </div>
          </div>
        </div>

        {/* Les feuillets ----------------------------------------------------- */}
        <div className="mt-8 space-y-10">
          {units.map((u) => (
            <UnitView
              key={u.id}
              unit={u}
              book={book}
              mode={mode}
              showTranslit={showTranslit}
              showLiteral={showLiteral}
              color={color}
            />
          ))}
        </div>

        {/* Pagination basse -------------------------------------------------- */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cx(
                'h-8 w-8 rounded-md border text-xs transition',
                p === page
                  ? 'border-ink-900 bg-ink-900 text-parchment'
                  : 'border-ink-200 bg-white/60 text-ink-600 hover:border-ink-400',
              )}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Callout label="Comment lire cette page" tone="neutral">
            Le <strong>mot à mot</strong> est volontairement illisible : il donne l’ordre et la
            matière de la langue source, sans la syntaxe française qui viendra les recouvrir. Les
            traductions publiées sont rangées par date : on y voit une langue française travailler,
            se corriger, et parfois se laisser conduire par sa théologie.
          </Callout>
          <Callout label="Ce que l’atelier ne fait pas" tone="warning">
            Il ne remplace pas l’apprentissage des langues, et ne prétend pas trancher. Un passage
            n’a pas « un sens caché » que les traducteurs auraient manqué : il a une amplitude, et
            chaque traduction en choisit un segment. Repérer le choix, c’est déjà lire.
          </Callout>
        </div>
      </div>
    </div>
  );
}

function UnitView({
  unit,
  book,
  mode,
  showTranslit,
  showLiteral,
  color,
}: {
  unit: CorpusUnit;
  book: CorpusBook;
  mode: Mode;
  showTranslit: boolean;
  showLiteral: boolean;
  color: string;
}) {
  return (
    <article className="card overflow-hidden">
      <div
        className="flex flex-wrap items-baseline gap-x-3 border-b px-6 py-3"
        style={{ borderColor: tint(color, 0.25), backgroundColor: tint(color, 0.06) }}
      >
        <h3 className="font-mono text-sm font-semibold" style={{ color }}>
          {unit.ref}
        </h3>
        {unit.label && <p className="font-serif text-sm italic text-ink-600">{unit.label}</p>}
      </div>

      <div className="p-6">
        {/* Le texte original -------------------------------------------------- */}
        <div
          dir={book.rtl ? 'rtl' : 'ltr'}
          lang={book.rtl ? (book.language.startsWith('Arabe') ? 'ar' : 'he') : undefined}
          className={cx(
            'original-block whitespace-pre-line rounded-lg bg-white/70 px-5 py-6 text-ink-950',
            scriptClass(book),
          )}
        >
          {unit.original}
        </div>

        {showTranslit && (
          <p className="mt-3 font-mono text-[0.8rem] leading-relaxed text-ink-500">{unit.translit}</p>
        )}

        {showLiteral && (
          <div className="mt-4 border-l-2 pl-4" style={{ borderColor: tint(color, 0.4) }}>
            <p className="eyebrow mb-1">Mot à mot</p>
            <p className="font-serif text-[0.98rem] leading-relaxed text-ink-800">{unit.literal}</p>
          </div>
        )}

        {/* Les traductions ---------------------------------------------------- */}
        <div className="mt-6">
          <p className="eyebrow mb-3">
            {unit.translations.length} traductions confrontées
          </p>

          {mode === 'lecture' ? (
            <div className="space-y-3">
              {unit.translations.map((t, i) => (
                <div key={i} className="rounded-lg border border-ink-200 bg-white/50 p-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-semibold text-ink-900">{t.source}</span>
                    <span className="font-mono text-[0.7rem] text-ink-400">{t.year}</span>
                  </div>
                  <p className="prose-serif mt-1.5 text-[1rem]">{t.text}</p>
                  {t.note && (
                    <p className="mt-2 border-t border-ink-100 pt-2 text-xs leading-relaxed text-ink-600">
                      {t.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="-mx-6 overflow-x-auto px-6">
              <div
                className="grid min-w-[40rem] gap-3"
                style={{ gridTemplateColumns: `repeat(${unit.translations.length}, minmax(15rem, 1fr))` }}
              >
                {unit.translations.map((t, i) => (
                  <div key={i} className="rounded-lg border border-ink-200 bg-white/50 p-4">
                    <div className="flex items-baseline justify-between gap-2 border-b border-ink-100 pb-2">
                      <span className="text-sm font-semibold text-ink-900">{t.source}</span>
                      <span className="font-mono text-[0.7rem] text-ink-400">{t.year}</span>
                    </div>
                    <p className="prose-serif mt-2.5 text-[0.95rem]">{t.text}</p>
                    {t.note && (
                      <p className="mt-2.5 text-xs leading-relaxed text-ink-600">{t.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Les mots décisifs --------------------------------------------------- */}
        {unit.gloss && unit.gloss.length > 0 && (
          <div className="mt-6">
            <p className="eyebrow mb-3">Les mots où tout se joue</p>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {unit.gloss.map((g, i) => (
                <div key={i} className="rounded-lg border border-ink-200 bg-ink-50/60 p-4">
                  <dt className="flex flex-wrap items-baseline gap-2">
                    <span className={cx('text-lg text-ink-950', scriptClass(book))}>{g.term}</span>
                    <span className="font-mono text-xs text-ink-500">{g.translit}</span>
                  </dt>
                  <dd className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-700">{g.sense}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Le biais ------------------------------------------------------------ */}
        {unit.issue && (
          <div className="mt-6">
            <Callout label={unit.issue.title} tone="warning">
              {unit.issue.text}
            </Callout>
          </div>
        )}
      </div>
    </article>
  );
}
