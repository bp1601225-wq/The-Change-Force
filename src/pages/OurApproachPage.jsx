
import { motion } from 'framer-motion';
import {
  Search,
  Lightbulb,
  Handshake,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/ui/PageHeader.jsx';

const steps = [
  {
    number: '01',
    title: 'Identify the Challenge',
    subtitle: 'Understand before acting',
    description:
      'We seek to understand the needs of communities, young people, and other stakeholders to identify the areas where practical interventions can make a meaningful difference.',
    outcome: 'A clear understanding of the real need.',
    icon: Search,
    accent: 'emerald',
  },
  {
    number: '02',
    title: 'Explore Innovative Solutions',
    subtitle: 'Think beyond limitations',
    description:
      'We investigate approaches that combine creativity, research, technology, local knowledge, and sustainable practices to shape practical responses.',
    outcome: 'Creative and practical solutions.',
    icon: Lightbulb,
    accent: 'sky',
  },
  {
    number: '03',
    title: 'Collaborate with Partners',
    subtitle: 'Stronger together',
    description:
      'We work with schools, communities, public institutions, businesses, technical experts, and development organizations to strengthen our initiatives.',
    outcome: 'Meaningful partnerships and shared commitment.',
    icon: Handshake,
    accent: 'amber',
  },
  {
    number: '04',
    title: 'Implement Practical Projects',
    subtitle: 'Turn plans into progress',
    description:
      'We aim to translate promising ideas into structured activities and projects suited to available resources and community needs.',
    outcome: 'Projects that respond to real needs.',
    icon: Rocket,
    accent: 'violet',
  },
  {
    number: '05',
    title: 'Learn, Measure, and Improve',
    subtitle: 'Make every effort count',
    description:
      'We assess our activities, document lessons learned, and use evidence to improve our work and guide future initiatives.',
    outcome: 'Continuous learning and lasting impact.',
    icon: BarChart3,
    accent: 'rose',
  },
];

const accentStyles = {
  emerald: {
    icon: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    number: 'text-emerald-600',
    line: 'bg-emerald-500',
  },
  sky: {
    icon: 'bg-sky-50 text-sky-700 ring-sky-100',
    number: 'text-sky-600',
    line: 'bg-sky-500',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-700 ring-amber-100',
    number: 'text-amber-600',
    line: 'bg-amber-500',
  },
  violet: {
    icon: 'bg-violet-50 text-violet-700 ring-violet-100',
    number: 'text-violet-600',
    line: 'bg-violet-500',
  },
  rose: {
    icon: 'bg-rose-50 text-rose-700 ring-rose-100',
    number: 'text-rose-600',
    line: 'bg-rose-500',
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function OurApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our approach"
        title="Our Approach"
        description="How we turn ideas into action."
      />

      {/* Introduction */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Target className="h-4 w-4" />
              Our process
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Meaningful change
              <span className="block text-emerald-600">
                starts with a clear plan.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              At The Change Force, we believe that lasting impact requires
              more than good intentions. It takes understanding, innovation,
              collaboration, action, and a commitment to continuous improvement.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              Our approach connects these elements into a practical process
              that helps transform ideas into initiatives capable of making
              a meaningful difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  The Change Force
                </span>
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="mt-12">
                <p className="text-sm font-medium text-slate-400">
                  Our guiding principle
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  From understanding
                  <span className="text-emerald-400"> to lasting impact.</span>
                </h3>
                <p className="mt-5 leading-7 text-slate-300">
                  Every challenge is an opportunity to learn, create,
                  collaborate, and build something better.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex -space-x-2">
                  {['bg-emerald-400', 'bg-sky-400', 'bg-amber-400'].map(
                    (color, index) => (
                      <span
                        key={index}
                        className={`h-9 w-9 rounded-full border-4 border-slate-950 ${color}`}
                      />
                    ),
                  )}
                </div>
                <span className="text-sm text-slate-300">
                  People. Ideas. Collective action.
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full rounded-[2rem] border-2 border-emerald-200" />
          </motion.div>
        </div>
      </section>

      {/* Five-stage roadmap */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              The journey
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Five Steps. One Purpose.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              A structured approach that takes us from identifying a need
              to creating, measuring, and improving meaningful change.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {/* Connecting line on larger screens */}
            <div className="absolute bottom-0 left-[2.25rem] top-0 hidden w-px bg-gradient-to-b from-emerald-300 via-sky-300 to-rose-300 lg:left-1/2 lg:block lg:-translate-x-1/2" />

            <div className="space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = accentStyles[step.accent];
                const isEven = index % 2 === 0;

                return (
                  <motion.article
                    key={step.number}
                    variants={itemVariants}
                    className={`relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16 ${
                      isEven ? '' : 'lg:[&>div:first-child]:order-2'
                    }`}
                  >
                    {/* Step card */}
                    <div
                      className={`group relative rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8 ${
                        isEven ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className={`text-4xl font-black tracking-tight ${styles.number}`}>
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        {step.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {step.description}
                      </p>

                      <div className="mt-7 flex items-start gap-3 border-t border-slate-100 pt-5">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Intended outcome
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-700">
                            {step.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline marker */}
                    <div className={`absolute left-9 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white ${styles.line} shadow-md lg:left-1/2 lg:flex lg:-translate-x-1/2`} />

                    {/* Supporting visual */}
                    <div
                      className={`hidden px-8 lg:block ${
                        isEven ? 'lg:pl-8' : 'lg:pr-8 lg:text-right'
                      }`}
                    >
                      <span className={`text-7xl font-black opacity-[0.08] ${styles.number}`}>
                        {step.number}
                      </span>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                        Stage {step.number} of 05
                      </p>
                      <h4 className="mt-3 text-xl font-bold text-slate-800">
                        {step.subtitle}
                      </h4>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Be part of the process
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl">
            Change becomes possible
            <span className="block text-emerald-400">
              when we work together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Whether you bring ideas, expertise, resources, or a willingness
            to serve, there is a place for you in building stronger communities
            and a more sustainable future.
          </p>

          <Link
            to="/join-the-change"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-emerald-400"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
