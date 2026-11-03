import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImpactAreaCard({ title, description, path, points, icon: Icon, accentClass }) {
  const accentStyles = {
    emerald: 'from-emerald-100 to-emerald-50 text-emerald-700',
    sky: 'from-sky-100 to-sky-50 text-sky-700',
    amber: 'from-amber-100 to-amber-50 text-amber-700',
  };

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accentStyles[accentClass] || accentStyles.emerald}`}>
        {Icon ? <Icon className="h-7 w-7" /> : null}
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link to={path} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-800">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
