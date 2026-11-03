
import {
  ArrowRight,
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
  Quote,
} from 'lucide-react';

import CallToAction from '../components/ui/CallToAction.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const pillars = [
  {
    number: '01',
    title: 'Educational Impact',
    subtitle: 'Empowering minds. Unlocking potential.',
    description:
      'We introduce young people to Artificial STEM, emerging technologies, practical knowledge, and opportunities that nurture their talents and prepare them for a changing world.',
    icon: GraduationCap,
    color: 'emerald',
    tags: ['Artificial STEM', 'Emerging Technologies', 'Youth Development'],
  },
  {
    number: '02',
    title: 'Environmental Impact',
    subtitle: 'Protecting our planet. Inspiring action.',
    description:
      'We promote environmental protection through innovative waste transformation, resource recovery, environmental awareness, and sustainable practices that create cleaner communities.',
    icon: Recycle,
    color: 'sky',
    tags: ['Waste Transformation', 'Sustainability', 'Environmental Care'],
  },
  {
    number: '03',
    title: 'Agricultural Innovation',
    subtitle: 'Growing ideas. Sustaining communities.',
    description:
      "We explore smart and innovative agricultural practices that address today's challenges, create opportunities, and contribute to sustainable livelihoods and stronger communities.",
    icon: Sprout,
    color: 'amber',
    tags: ['Smart Agriculture', 'Agricultural Innovation', 'Sustainable Livelihoods'],
  },
];
const values = [
  {
    icon: Heart,
    title: 'People Empowerment',
    description:
      'We believe every individual has potential and deserves opportunities to develop, contribute, and thrive.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace creative thinking, new ideas, and practical solutions to address society’s challenges.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We pursue meaningful solutions that protect our environment and create lasting benefits for future generations.',
  },
  {
    icon: Users,
    title: 'Collective Action',
    description:
      'We believe lasting transformation happens when individuals and communities work together.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="We Are a Force for Positive Change."
        description="The Change Force (TCF) is a non-governmental organization committed to empowering people, nurturing talents, protecting the environment, and advancing agricultural innovation to create sustainable and meaningful change in society."
      />

      <main className="overflow-hidden bg-white">

        {/* ABOUT THE CHANGE FORCE */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Sparkles className="h-4 w-4" />
                About The Change Force
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Every possibility deserves an
                <span className="text-emerald-600"> opportunity to thrive.</span>
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  We believe that every individual has potential, every idea
                  can spark transformation, and every community deserves the
                  opportunity to thrive.
                </p>

                <p>
                  However, unlocking this potential requires more than
                  inspiration. It requires access to opportunities, practical
                  knowledge, innovative solutions, and the collective effort
                  to turn possibilities into reality.
                </p>

                <p>
                  Through our three impact-driven departments — Educational
                  Impact, Environmental Impact, and Agricultural Innovation —
                  we work to bridge gaps, develop practical solutions, and
                  create opportunities that respond to the needs of
                  individuals and communities.
                </p>

                <p>
                  From introducing young people to Artificial STEM and
                  emerging technologies, to transforming waste into useful
                  resources, and exploring smart and innovative agricultural
                  practices, we are committed to finding innovative ways to
                  address today's challenges while building a better tomorrow.
                </p>

                <p>
                  At The Change Force, we see challenges not as barriers,
                  but as opportunities to innovate, collaborate, and create
                  lasting solutions.
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

            {/* ORGANIZATIONAL COMMITMENT */}
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
                  Turning possibilities into meaningful change.
                </h3>

                <p className="mt-6 max-w-sm leading-7 text-slate-300">
                  We empower people, nurture ideas, develop innovative
                  solutions, and create opportunities for individuals
                  and communities to thrive.
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

        {/* ORGANIZATIONAL STATEMENT */}
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

        {/* THREE IMPACT DEPARTMENTS */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Three departments. One mission.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Through our three impact-driven departments, we develop
              practical solutions, nurture potential, and create
              opportunities for sustainable community development.
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
                  To empower people, nurture talents, protect the
                  environment, and advance agricultural innovation
                  through practical solutions and sustainable opportunities.
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
                  To create a society where individuals reach their
                  potential, communities thrive, and innovative
                  solutions drive sustainable development.
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
            title="Be part of the change we want to see."
            description="Your ideas, skills, partnership, and support can help us empower people, protect the environment, advance agricultural innovation, and build stronger communities. Join The Change Force."
            to="/join-the-change"
            linkText="Become part of the movement"
          />
        </section>

      </main>
    </>
  );
}
