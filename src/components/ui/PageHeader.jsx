export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="bg-gradient-to-b from-emerald-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {eyebrow ? (
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p> : null}
      </div>
    </header>
  );
}
