import { ArrowRight, GraduationCap, Lightbulb, Recycle, Sprout, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

import AboutSection from '../components/sections/AboutSection.jsx';
import ApproachRoadmapSection from '../components/sections/ApproachRoadmapSection.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ImpactWingsSection from '../components/sections/ImpactWingsSection.jsx';
import JoinCtaSection from '../components/sections/JoinCtaSection.jsx';
import MissionVisionSection from '../components/sections/MissionVisionSection.jsx';
import ImpactAreaCard from '../components/ui/ImpactAreaCard.jsx';

export default function HomePage({ onOpenPartner, onOpenDonate }) {
  const impactAreas = [
    {
      title: 'Educational Impact',
      description: 'Helping young people discover their strengths through technology, mentorship, and practical learning.',
      path: '/departments/educational-impact',
      accentClass: 'emerald',
      icon: GraduationCap,
      points: ['Talent development', 'STEM education', 'Technology awareness', 'Practical learning'],
    },
    {
      title: 'Environmental Impact',
      description: 'Reducing waste, raising awareness, and building cleaner communities through sustainable action.',
      path: '/departments/environmental-impact',
      accentClass: 'sky',
      icon: Recycle,
      points: ['Waste reduction', 'Recycling', 'Environmental education', 'Sustainable communities'],
    },
    {
      title: 'Agricultural Innovation',
      description: 'Promoting smart, climate-resilient farming approaches and agricultural entrepreneurship.',
      path: '/departments/agricultural-innovation',
      accentClass: 'amber',
      icon: Sprout,
      points: ['Climate-resilient agriculture', 'Smart farming', 'Soilless farming', 'Agricultural entrepreneurship'],
    },
  ];

  return (
    <>
      <HeroSection onOpenPartner={onOpenPartner} />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Our Three Impact Areas</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Building solutions for people, planet, and progress.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {impactAreas.map((area) => (
              <ImpactAreaCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="flex items-center gap-3 text-emerald-700">
              <div className="rounded-2xl bg-emerald-100 p-3">
                <Lightbulb className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">About The Change Force</p>
            </div>
            <h3 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">Empowering communities through practical innovation and shared purpose.</h3>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              The Change Force is a community-centered organization committed to nurturing talent, protecting the environment, and creating sustainable agricultural solutions that uplift people and communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">How we work</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Our five-step approach.</h2>
            </div>
            <Link to="/our-approach" className="hidden items-center gap-2 text-sm font-bold text-emerald-700 sm:inline-flex">
              Explore our approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {[
              'Identify the challenge',
              'Explore innovative solutions',
              'Collaborate with partners',
              'Implement practical projects',
              'Learn, measure and improve',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                  0{index + 1}
                </div>
                <p className="text-base font-semibold text-slate-800">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link to="/our-approach" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
              Explore our approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
      <MissionVisionSection />
      <ImpactWingsSection onOpenPartner={onOpenPartner} />
      <ApproachRoadmapSection />
      <JoinCtaSection onOpenPartner={onOpenPartner} onOpenDonate={onOpenDonate} />
    </>
  );
}
