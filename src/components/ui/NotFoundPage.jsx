import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">404</p>
      <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">This page could not be found.</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you’re looking for may have moved, or it may never have existed.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
}
