import { ArrowRight, GraduationCap, Recycle, Sprout } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import PageHeader from '../components/ui/PageHeader.jsx';
import NotFoundPage from '../components/ui/NotFoundPage.jsx';

const departments = {
  'educational-impact': {
    eyebrow: 'Educational Impact',
    title: 'Educational Impact',
    intro:
      'We believe that every young person has potential waiting to be discovered. The Educational Impact Department is dedicated to nurturing talent, strengthening learning opportunities, and equipping young people with the knowledge and practical skills needed to thrive in a rapidly changing world.',
    description:
      'Our approach goes beyond traditional learning. We create opportunities for students to explore their interests, discover their strengths, develop their talents, and apply what they learn to real-world challenges.',
    focusAreas: ['STEM Education', 'Technology Awareness', 'Talent Development', 'Practical Training', 'Mentorship', 'Collaboration'],
    cta: 'Join Our Educational Impact',
    link: '/join-the-change',
    accent: 'emerald',
    icon: GraduationCap,
  },
  'environmental-impact': {
    eyebrow: 'Environmental Impact',
    title: 'Environmental Impact',
    intro:
      'We believe that environmental challenges can become opportunities for innovation, enterprise, and community transformation.',
    description:
      'The Environmental Impact Department is committed to promoting environmental sustainability through waste reduction, recycling, community education, pollution prevention, and practical climate-conscious initiatives.',
    focusAreas: ['Waste Reduction', 'Recycling and Resource Recovery', 'Environmental Education', 'Pollution Prevention', 'Community Clean-Up Initiatives', 'Sustainable Practices'],
    cta: 'Join Our Environmental Initiatives',
    link: '/join-the-change',
    accent: 'sky',
    icon: Recycle,
  },
  'agricultural-innovation': {
    eyebrow: 'Agricultural Innovation',
    title: 'Agricultural Innovation',
    intro:
      'We believe agriculture must evolve to meet the challenges of a changing climate and a growing demand for sustainable food production.',
    description:
      'The Agricultural Impact Wing explores innovative agricultural practices that improve productivity, strengthen climate resilience, and create new opportunities across agricultural value chains.',
    focusAreas: ['Climate-Resilient Agriculture', 'Smart Agricultural Technologies', 'Soilless Farming', 'Crop Innovation', 'Agricultural Value Addition', 'Sustainable Food Production'],
    cta: 'Explore Agricultural Innovation',
    link: '/join-the-change',
    accent: 'amber',
    icon: Sprout,
  },
};

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const department = departments[slug];

  if (!department) {
    return <NotFoundPage />;
  }

  const Icon = department.icon;

  return (
    <>
      <PageHeader
        eyebrow={department.eyebrow}
        title={department.title}
        description={department.intro}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${department.accent === 'emerald' ? 'bg-emerald-100 text-emerald-700' : department.accent === 'sky' ? 'bg-sky-100 text-sky-700' : 'bg-amber-100 text-amber-700'}`}>
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">{department.title}</h2>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">{department.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {department.focusAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {area}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to={department.link}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              {department.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
