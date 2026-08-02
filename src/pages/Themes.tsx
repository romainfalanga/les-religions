import { Link } from 'react-router-dom';
import { themes } from '../data/themes';
import { PageHeader } from '../components/ui';

export default function Themes() {
  return (
    <div>
      <PageHeader
        eyebrow={`${themes.length} comparaisons`}
        title="Comparer les traditions"
        lead="Une question posée à toutes les traditions à la fois. C’est l’instrument le plus efficace pour comprendre : il révèle que les religions se distinguent autant par les questions qu’elles jugent fondamentales que par les réponses qu’elles y apportent."
      />

      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {themes.map((t) => (
            <Link key={t.id} to={`/comparaisons/${t.id}`} className="card card-hover flex flex-col p-6">
              <span className="text-2xl text-ink-400">{t.icon}</span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-ink-950">{t.title}</h2>
              <p className="mt-1.5 text-sm italic text-ink-600">{t.question}</p>
              <p className="prose-serif mt-3 flex-1 text-[0.94rem]">{t.summary}</p>
              <p className="mt-4 border-t border-ink-100 pt-3 text-xs text-ink-500">
                {t.positions.length} positions · {t.convergences.length} convergences · {t.divergences.length}{' '}
                divergences
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
