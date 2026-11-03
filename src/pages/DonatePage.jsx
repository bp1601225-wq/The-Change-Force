import { ArrowRight, HeartHandshake, Sparkles, Sprout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/ui/PageHeader.jsx';

const supportAreas = [
  { title: 'Educational initiatives', icon: Users },
  { title: 'Environmental sustainability', icon: Sparkles },
  { title: 'Agricultural innovation', icon: Sprout },
  { title: 'Community development', icon: HeartHandshake },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support The Change Force"
        description="Your support can create meaningful change."
      />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-black text-slate-900">Your Support Can Create Meaningful Change.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Donations can help The Change Force advance educational programs, environmental initiatives, agricultural innovation, and community-centered development work. This site does not currently include a payment gateway, so the donation structure is intentionally set up for integration when an approved payment provider is selected.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportAreas.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold text-slate-900">{title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Donation options</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xl font-bold text-slate-900">One-time donation</p>
                <p className="mt-2 text-slate-600">A single contribution to support immediate project work and outreach.</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xl font-bold text-slate-900">Monthly donation</p>
                <p className="mt-2 text-slate-600">A recurring contribution to sustain long-term initiatives across education, environment, and agriculture.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/join-the-change"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
