import { Link } from 'react-router-dom';
import { learningPaths } from '../data/influences';
import { Chip, PageHeader } from '../components/ui';

const levelColor: Record<string, string> = {
  découverte: '#2f855a',
  approfondissement: '#3b6fb6',
  avancé: '#7c3aed',
};

export default function Paths() {
  return (
    <div>
      <PageHeader
        eyebrow={`${learningPaths.length} parcours`}
        title="Parcours guidés"
        lead="Une masse de contenu sans itinéraire n’apprend rien. Chaque parcours enchaîne des fiches dans un ordre choisi, avec une consigne de lecture à chaque étape — ce qu’il faut y chercher, et le contresens à éviter."
      />

      <div className="container-page py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {learningPaths.map((p) => (
            <Link key={p.id} to={`/parcours/${p.id}`} className="card card-hover flex flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Chip color={levelColor[p.level]}>{p.level}</Chip>
                <span className="text-xs text-ink-500">{p.duration}</span>
                <span className="text-xs text-ink-400">· {p.steps.length} étapes</span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-semibold text-ink-950">{p.title}</h2>
              <p className="mt-1 text-sm text-ink-600">{p.subtitle}</p>
              <p className="prose-serif mt-3 flex-1 text-[0.94rem]">{p.goal}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
