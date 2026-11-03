
import {
  ArrowRight,
  ArrowUpRight,
  HandHeart,
  HeartHandshake,
  Leaf,
  Users,
  GraduationCap,
  Sprout,
  Globe2,
  CheckCircle2,
  Sparkles,
  Target,
  Lightbulb,
} from 'lucide-react';

import CallToAction from '../components/ui/CallToAction.jsx';
import JoinForm from '../components/ui/JoinForm.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const opportunities = [
  {
    number: '01',
    title: 'Partner With Us',
    subtitle: 'Stronger together.',
    description:
      'Collaborate with us to develop and implement meaningful projects that address real community needs.',
    action: 'Explore partnership',
    icon: HandHeart,
    color: 'emerald',
  },
  {
    number: '02',
    title: 'Support Our Initiatives',
    subtitle: 'Make your contribution count.',
    description:
      'Help mobilize the resources, knowledge, technology, and expertise needed to advance our mission.',
    action: 'Support our work',
    icon: HeartHandshake,
    color: 'sky',
  },
  {
    number: '03',
    title: 'Volunteer With Us',
    subtitle: 'Your skills can make a difference.',
    description:
      'Contribute your time, talents, and creativity to initiatives that empower people and communities.',
    action: 'Become a volunteer',
    icon: Users,
    color: 'amber',
  },
  {
    number: '04',
    title: 'Donate',
    subtitle: 'Invest in meaningful change.',
    description:
      'Support our mission through financial or in-kind contributions that help turn ideas into action.',
    action: 'Make a contribution',
    icon: Leaf,
    color: 'violet',
  },
];

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Nurturing talent and equipping the next generation.',
  },
  {
    icon: Globe2,
    title: 'Environment',
    description: 'Building cleaner and more sustainable communities.',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Encouraging innovation and resilient food systems.',
  },
];

const reasons = [
  {
    icon: Target,
    title: 'Purpose-driven work',
    description:
      'Be part of initiatives that respond to real challenges and create meaningful opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Ideas into action',
    description:
      'Bring your experience, creativity, and perspective to practical solutions.',
  },
  {
    icon: Users,
    title: 'Collective impact',
    description:
      'Connect with individuals and organizations working towards a shared vision.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Be part of the movement"
        title="Change Begins With People Like You."
        description="Whether through partnership, volunteering, donations, or sharing your expertise, there is a place for you in building a better future."
      />

      <main className="overflow-hidden bg-white">

        {/* INTRODUCTION / HERO */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-16">

            <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  Your contribution matters
                </div>

                <h2 className="mt-8 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  The world changes when
                  <span className="text-emerald-400"> we choose to act.</span>
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-100/80">
                  Meaningful transformation is never the work of one person.
                  It takes people with ideas, organizations with vision, and
                  communities willing to work towards something better.
                </p>

                <a
                  href="#get-involved"
                  className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-emerald-950 transition-all hover:-translate-y-1 hover:bg-emerald-50"
                >
                  Find your place
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {impactAreas.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-emerald-100/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* OPPORTUNITIES */}
        <section
          id="get-involved"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Ways to get involved
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Find your way to make a difference.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              There are different ways to contribute to our work.
              Choose the opportunity that best reflects your passion,
              skills, resources, or organizational goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {opportunities.map((item) => {
              const Icon = item.icon;

              const styles = {
                emerald: 'bg-emerald-50 text-emerald-700',
                sky: 'bg-sky-50 text-sky-700',
                amber: 'bg-amber-50 text-amber-700',
                violet: 'bg-violet-50 text-violet-700',
              };

              return (
                <article
                  key={item.number}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-slate-300">
                      {item.number}
                    </span>

                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles[item.color]}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-emerald-700">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href="#join-form"
                    className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-700"
                  >
                    {item.action}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">

              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                  Why join us?
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Be part of something bigger than yourself.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Joining The Change Force means becoming part of a collective
                  effort to create opportunities, solve problems, and contribute
                  to a more sustainable future.
                </p>

                <div className="mt-9 space-y-5">
                  {[
                    'Contribute to meaningful community initiatives.',
                    'Share your knowledge, experience, and expertise.',
                    'Support practical and sustainable solutions.',
                    'Build connections around a shared purpose.',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                      <p className="font-medium text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {reasons.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className={`rounded-3xl border border-slate-200 bg-white p-7 ${index === 1 || index === 2 ? 'sm:translate-y-8' : ''}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-lg font-black text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* JOIN FORM */}
        <section
          id="join-form"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <HeartHandshake className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Take the next step
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Tell us how you would like to contribute.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Complete the form below and let us know how you would like
              to get involved. We look forward to exploring the possibilities
              with you.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <JoinForm />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <CallToAction
            title="Your support can help shape tomorrow."
            description="Every contribution matters. Whether you give your time, expertise, resources, or support, you can help us create lasting change."
            to="/donate"
            linkText="Support our mission"
          />
        </section>

      </main>
    </>
  );
}
