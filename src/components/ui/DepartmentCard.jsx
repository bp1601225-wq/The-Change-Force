import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DepartmentCard({ title, description, path, icon: Icon, accentClass }) {
  const accentStyles = {
    emerald: 'bg-emerald-100 text-emerald-700',
    sky: 'bg-sky-100 text-sky-700',
    amber: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentStyles[accentClass] || accentStyles.emerald}`}>
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">{description}</p>
      <Link to={path} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-800">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
