import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToAction({ title, description, linkText, to }) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 p-8 text-white shadow-lg shadow-emerald-600/20">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Take Action</p>
          <h3 className="mt-3 text-2xl font-bold">{title}</h3>
          {description ? <p className="mt-2 max-w-2xl text-emerald-50/90">{description}</p> : null}
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
