
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Target,
  Heart,
  Leaf,
  Lightbulb,
  Users,
  Globe2,
  GraduationCap,
  Recycle,
  Sprout,
  MoveUpRight,
  Quote,
  CheckCircle2,
} from 'lucide-react';

import CallToAction from '../components/ui/CallToAction.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const pillars = [
  {
    number: '01',
    title: 'Educational Impact',
    subtitle: 'Empowering minds. Unlocking potential.',
    description:
      'We nurture talent and equip young people with practical skills, digital knowledge, and opportunities to thrive in a rapidly changing world.',
    icon: GraduationCap,
    color: 'emerald',
    tags: ['STEM Education', 'Digital Skills', 'Youth Development'],
  },
  {
    number: '02',
    title: 'Environmental Impact',
    subtitle: 'Protecting our planet. Inspiring action.',
    description:
      'We champion environmental responsibility through sustainable practices, waste recovery, environmental awareness, and cleaner communities.',
    icon: Recycle,
    color: 'sky',
    tags: ['Waste Management', 'Sustainability', 'Environmental Care'],
  },
  {
    number: '03',
    title: 'Agricultural Innovation',
    subtitle: 'Growing ideas. Sustaining communities.',
    description:
      'We explore innovative agricultural practices and sustainable food systems that strengthen livelihoods and create opportunities for communities.',
    icon: Sprout,
    color: 'amber',
    tags: ['Smart Agriculture', 'Food Security', 'Innovation'],
  },
];

const values = [
  {
    icon: Heart,
    title: 'People First',
    description: 'We believe meaningful change begins with empowering people and communities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creative thinking and practical solutions to everyday challenges.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We pursue solutions that create lasting benefits for future generations.',
  },
  {
    icon: Users,
    title: 'Collective Action',
    description: 'We believe collaboration makes transformation possible.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Creating Change. Empowering Possibilities."
        description="The Change Force is a non-governmental organization committed to empowering people, nurturing talent, protecting the environment, and advancing agricultural innovation."
      />

      <main className="overflow-hidden bg-white">

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Sparkles className="h-4 w-4" />
                More than an organization
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                We believe in the power of
                <span className="text-emerald-600"> people to change the world.</span>
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Every individual has potential. Every idea holds possibilities.
                  And every community deserves an opportunity to thrive.
                </p>

                <p>
                  But meaningful transformation requires more than good intentions.
                  It requires access to knowledge, practical skills, innovation,
                  opportunity, and people willing to make a difference.
                </p>

                <p>
                  That is where The Change Force comes in. We turn possibilities
                  into practical action, creating pathways that empower individuals
                  and strengthen communities.
                </p>
              </div>

              <a
                href="/join-the-change"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-emerald-700"
              >
                Be part of the change
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* VISUAL STORY */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-12">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
                  Our commitment
                </p>

                <h3 className="mt-8 max-w-md text-4xl font-black leading-tight sm:text-5xl">
                  A better future doesn't happen by chance.
                </h3>

                <p className="mt-6 max-w-sm leading-7 text-slate-300">
                  It happens when people are empowered, ideas are nurtured,
                  and communities are given the tools to thrive.
                </p>

                <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/15 pt-8">
                  <div>
                    <GraduationCap className="mb-3 h-7 w-7 text-emerald-400" />
                    <p className="text-sm font-bold">Education</p>
                  </div>
                  <div>
                    <Leaf className="mb-3 h-7 w-7 text-emerald-400" />
                    <p className="text-sm font-bold">Environment</p>
                  </div>
                  <div>
                    <Sprout className="mb-3 h-7 w-7 text-emerald-400" />
                    <p className="text-sm font-bold">Agriculture</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STATEMENT */}
        <section className="bg-emerald-700 px-4 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <Quote className="mx-auto mb-8 h-12 w-12 text-emerald-300" />

            <p className="text-3xl font-black leading-snug sm:text-4xl lg:text-5xl">
              "We are more than an organization. We are a force for positive change."
            </p>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-emerald-300" />

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">
              The Change Force
            </p>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              What drives us
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Three pathways to meaningful change.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our work is built around three interconnected areas designed
              to address real challenges and create lasting impact.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              const colors = {
                emerald: {
                  icon: 'bg-emerald-100 text-emerald-700',
                  number: 'text-emerald-600',
                  tag: 'bg-emerald-50 text-emerald-800',
                  border: 'hover:border-emerald-300',
                },
                sky: {
                  icon: 'bg-sky-100 text-sky-700',
                  number: 'text-sky-600',
                  tag: 'bg-sky-50 text-sky-800',
                  border: 'hover:border-sky-300',
                },
                amber: {
                  icon: 'bg-amber-100 text-amber-700',
                  number: 'text-amber-600',
                  tag: 'bg-amber-50 text-amber-800',
                  border: 'hover:border-amber-300',
                },
              };

              const style = colors[pillar.color];

              return (
                <article
                  key={pillar.number}
                  className={`group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${style.border}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black tracking-widest ${style.number}`}>
                      {pillar.number}
                    </span>

                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="mt-9 text-2xl font-black text-slate-950">
                    {pillar.title}
                  </h3>

                  <p className={`mt-2 font-semibold ${style.number}`}>
                    {pillar.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600">
                    {pillar.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-2 text-xs font-bold ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
                Our direction
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Driven by purpose.
                <span className="text-emerald-400"> Guided by vision.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                  <Target className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Our mission
                </p>

                <h3 className="mt-5 text-2xl font-bold leading-relaxed sm:text-3xl">
                  To empower and develop society through talent nurturing,
                  environmental care, and agricultural innovation.
                </h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 sm:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
                  <Globe2 className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-sky-400">
                  Our vision
                </p>

                <h3 className="mt-5 text-2xl font-bold leading-relaxed sm:text-3xl">
                  To create a future where talents, ideas, and communities thrive.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              What we stand for
            </p>
            <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
              The values behind our work.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-all group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <CallToAction
            title="The future changes when we act today."
            description="Your ideas, skills, partnership, and support can help us build stronger communities and create opportunities for generations to come. Join The Change Force."
            to="/join-the-change"
            linkText="Become part of the movement"
          />
        </section>

      </main>
    </>
  );
}
