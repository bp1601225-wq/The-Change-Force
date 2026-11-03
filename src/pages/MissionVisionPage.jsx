
import {
  Eye,
  Target,
  Compass,
  Heart,
  Lightbulb,
  Users,
  Leaf,
  GraduationCap,
  Sprout,
  ArrowRight,
  Sparkles,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

import PageHeader from '../components/ui/PageHeader.jsx';

const statements = [
  {
    number: '01',
    title: 'Our Mission',
    subtitle: 'What we exist to accomplish',
    text: 'To empower and develop society through talent nurturing, environmental care and agricultural innovation.',
    description:
      'We turn this commitment into action by creating opportunities, promoting practical knowledge, encouraging innovation and supporting solutions that improve lives and strengthen communities.',
    icon: Target,
    theme: 'emerald',
  },
  {
    number: '02',
    title: 'Our Vision',
    subtitle: 'The future we aspire to create',
    text: 'To create a future where talents, ideas and communities thrive.',
    description:
      'We envision a world where individuals can fulfil their potential, communities can prosper and sustainable practices create opportunities for generations to come.',
    icon: Eye,
    theme: 'sky',
  },
];

const principles = [
  {
    icon: Heart,
    title: 'People at the centre',
    description:
      'We believe every person deserves the opportunity to discover their potential and contribute meaningfully to society.',
  },
  {
    icon: Lightbulb,
    title: 'Ideas into solutions',
    description:
      'We encourage creativity, knowledge and innovation to address challenges and unlock new possibilities.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible progress',
    description:
      'We champion approaches that respect people, communities and the environment.',
  },
  {
    icon: Users,
    title: 'Change through collaboration',
    description:
      'We believe lasting transformation happens when individuals and organizations work together.',
  },
];

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Educational Impact',
    description:
      'Nurturing talent, developing skills and preparing young people for emerging opportunities.',
    color: 'emerald',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description:
      'Promoting environmental responsibility, resource recovery and sustainable communities.',
    color: 'sky',
  },
  {
    icon: Sprout,
    title: 'Agricultural Innovation',
    description:
      'Encouraging innovative agricultural practices and resilient food systems.',
    color: 'amber',
  },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our purpose and direction"
        title="A Purpose That Drives Us. A Vision That Inspires Us."
        description="Everything we do at The Change Force is guided by a clear purpose: empowering people, strengthening communities and creating a more sustainable future."
      />

      <main className="overflow-hidden bg-white">

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Compass className="h-4 w-4" />
                Our guiding direction
              </div>

              <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Change is intentional.
                <span className="text-emerald-600">
                  {' '}Progress is purposeful.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                At The Change Force, we believe that a better future is built
                through deliberate action. Our mission defines the work we do
                today, while our vision gives direction to the future we are
                committed to creating.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Together, they shape our priorities, guide our decisions and
                inspire every initiative we undertake.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-9 text-white sm:p-12">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-white/10" />

                <Sparkles className="h-9 w-9 text-emerald-400" />

                <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  The Change Force philosophy
                </p>

                <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                  A better tomorrow begins with what we do today.
                </h3>

                <p className="mt-6 leading-7 text-emerald-100/70">
                  We are committed to turning purpose into action and
                  possibilities into meaningful outcomes.
                </p>

                <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-7">
                  <Globe2 className="h-6 w-6 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-100">
                    Empowering people. Transforming communities.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                Our foundation
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Two statements. One purpose.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our mission and vision work together to define who we are,
                what we stand for and where we want to go.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {statements.map((item) => {
                const Icon = item.icon;
                const isMission = item.theme === 'emerald';

                return (
                  <article
                    key={item.number}
                    className={`relative overflow-hidden rounded-[2rem] border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-11 ${
                      isMission
                        ? 'border-emerald-200 bg-white'
                        : 'border-sky-200 bg-white'
                    }`}
                  >
                    <div
                      className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${
                        isMission ? 'bg-emerald-50' : 'bg-sky-50'
                      }`}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-black tracking-[0.2em] ${
                            isMission ? 'text-emerald-600' : 'text-sky-600'
                          }`}
                        >
                          {item.number}
                        </span>

                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                            isMission
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-sky-100 text-sky-700'
                          }`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      <p
                        className={`mt-10 text-sm font-bold uppercase tracking-[0.18em] ${
                          isMission ? 'text-emerald-700' : 'text-sky-700'
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      <h3 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-7 text-xl font-bold leading-relaxed text-slate-800">
                        {item.text}
                      </p>

                      <div
                        className={`my-7 h-1 w-14 rounded-full ${
                          isMission ? 'bg-emerald-500' : 'bg-sky-500'
                        }`}
                      />

                      <p className="leading-8 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* HOW WE PUT PURPOSE INTO ACTION */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Turning purpose into action
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Where our purpose comes to life.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We translate our mission and vision into practical work
              across three interconnected areas.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {impactAreas.map(({ icon: Icon, title, description, color }) => {
              const styles = {
                emerald: 'bg-emerald-100 text-emerald-700',
                sky: 'bg-sky-100 text-sky-700',
                amber: 'bg-amber-100 text-amber-700',
              };

              return (
                <div
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles[color]}`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* GUIDING PRINCIPLES */}
        <section className="bg-emerald-950 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                What guides us
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                The principles behind every step we take.
              </h2>

              <p className="mt-5 leading-8 text-emerald-100/70">
                Our work is driven by principles that shape our relationships,
                inspire our ideas and guide our commitment to lasting change.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="border-t border-white/20 pt-7"
                >
                  <Icon className="h-8 w-8 text-emerald-400" />

                  <h3 className="mt-6 text-xl font-black">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-emerald-100/65">
                    {description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Target className="mx-auto h-10 w-10 text-emerald-600" />

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Our purpose is clear.
              <span className="text-emerald-600">
                {' '}Our commitment is lasting.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every idea nurtured, every person empowered and every community
              strengthened brings us closer to the future we envision.
            </p>

            <a
              href="/join-the-change"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-emerald-700 px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-emerald-800"
            >
              Be part of the change
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
