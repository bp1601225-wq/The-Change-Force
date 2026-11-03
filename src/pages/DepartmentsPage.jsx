
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Recycle,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Users,
  Globe2,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import DepartmentCard from '../components/ui/DepartmentCard.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

const departments = [
  {
    title: 'Educational Impact',
    description:
      'Empowering young people through talent development, STEM education, technology awareness, and practical learning.',
    path: '/departments/educational-impact',
    accentClass: 'emerald',
    icon: GraduationCap,
  },
  {
    title: 'Environmental Impact',
    description:
      'Reducing waste, protecting the environment, and building sustainable communities through practical initiatives.',
    path: '/departments/environmental-impact',
    accentClass: 'sky',
    icon: Recycle,
  },
  {
    title: 'Agricultural Innovation',
    description:
      'Exploring innovative, climate-resilient, and smart agricultural solutions for resilient food systems.',
    path: '/departments/agricultural-innovation',
    accentClass: 'amber',
    icon: Sprout,
  },
];

const principles = [
  {
    icon: Users,
    title: 'People-centred development',
    description:
      'We place individuals and communities at the heart of the work we do.',
  },
  {
    icon: Lightbulb,
    title: 'Practical innovation',
    description:
      'We encourage ideas and solutions that respond to real-world challenges.',
  },
  {
    icon: Globe2,
    title: 'Sustainable impact',
    description:
      'We pursue initiatives that contribute to stronger communities and a better future.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our departments"
        title="Our Departments"
        description="Through our three impact-driven departments, The Change Force works to empower individuals, address environmental challenges, and explore innovative agricultural solutions."
      />

      {/* Introduction */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Target className="h-4 w-4" />
              Our areas of impact
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Three departments.
              <span className="block text-emerald-600">
                One shared purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Meaningful development requires action across different areas
              of society. Our departments focus on education, environmental
              responsibility, and agricultural innovation to create
              opportunities and support sustainable communities.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-500">
              Each department has a distinct focus, but all contribute to
              one vision: a future where people, ideas, and communities thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                The Change Force
              </span>

              <h3 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
                Creating opportunities.
                <span className="block text-emerald-400">
                  Inspiring solutions.
                </span>
                <span className="block">Building a better future.</span>
              </h3>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
                {departments.map((department, index) => {
                  const Icon = department.icon;

                  return (
                    <div key={department.title} className="flex items-center gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">
                          {department.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          Impact pillar 0{index + 1}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full rounded-[2rem] border-2 border-emerald-200" />
          </motion.div>
        </div>
      </section>

      {/* Department cards */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              What we focus on
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Explore Our Departments
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Discover the focus areas through which we pursue our mission
              and translate our vision into practical action.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {departments.map((department, index) => (
              <motion.div
                key={department.title}
                variants={fadeUp}
                className="relative"
              >
                <div className="absolute -left-2 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl border-4 border-slate-50 bg-slate-950 text-xs font-black text-white">
                  0{index + 1}
                </div>

                <DepartmentCard {...department} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shared principles */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                What connects us
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Different focus areas.
                <span className="block text-emerald-600">
                  Shared values.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                While our departments address different challenges, they
                operate around a common commitment to people, innovation,
                and sustainable development.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3 hover:text-emerald-800"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    variants={fadeUp}
                    className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-emerald-200 hover:bg-emerald-50/30"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {principle.description}
                      </p>
                    </div>

                    <CheckCircle2 className="ml-auto mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Be part of the change
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl">
            Your contribution can
            <span className="block text-emerald-400">
              make a difference.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Join us in supporting education, protecting the environment,
            and exploring innovative agricultural solutions for a
            sustainable future.
          </p>

          <Link
            to="/join-the-change"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-emerald-400"
          >
            Join The Change
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
