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
    'We recognize that academic performance alone does not define a person\'s abilities. Some young people excel through creativity, technical skills, problem-solving, innovation, and practical experience.\n\nOur approach goes beyond traditional learning. We seek to create opportunities for students to explore their interests, discover their strengths, develop their talents, and apply what they learn to real-world challenges.\n\nThrough STEM education, technology awareness, practical training, mentorship, and collaborative learning, we aim to inspire the next generation of thinkers, creators, innovators, and problem-solvers.\n\nOur goal is to help young people move from discovering what is possible to developing the skills to make it happen.',
  focusAreas: [
    'STEM Education',
    'Technology Awareness',
    'Talent Development',
    'Practical Training',
    'Mentorship',
    'Collaborative Learning',
  ],
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
    'The Environmental Impact Department is committed to promoting environmental sustainability through waste reduction, recycling, community education, pollution prevention, and practical climate-conscious initiatives.\n\nWe recognize the growing challenges associated with plastic pollution, improper waste disposal, drainage blockages, and the degradation of natural environments.\n\nOur approach focuses on more than cleaning up polluted spaces. We aim to encourage responsible environmental practices, explore innovative ways to reuse discarded materials, and support communities in adopting sustainable solutions.\n\nBy combining environmental education, community participation, and resource recovery, we seek to promote a culture in which waste is managed responsibly and environmental protection becomes a shared responsibility.',
  focusAreas: [
    'Waste Reduction',
    'Recycling and Resource Recovery',
    'Environmental Education',
    'Pollution Prevention',
    'Community Clean-Up Initiatives',
    'Sustainable Practices',
  ],
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
    'The Agricultural Impact Wing is focused on exploring innovative agricultural practices that can improve productivity, strengthen climate resilience, and create new opportunities across agricultural value chains.\n\nWe recognize the importance of developing farming approaches that respond to changing weather patterns, water limitations, crop losses, and the need for more efficient production systems.\n\nOur work seeks to explore practical and research-informed solutions, including climate-resilient crops, soilless farming, smart agricultural technologies, and opportunities for value addition.\n\nWe are particularly interested in identifying promising crops, exploring improved cultivation methods, and connecting agricultural innovation with entrepreneurship and market opportunities.\n\nThrough collaboration with agricultural experts, research institutions, farmers, and development partners, we aim to contribute to an agricultural sector that is more innovative, productive, and resilient.',
  focusAreas: [
    'Climate-Resilient Agriculture',
    'Smart Agricultural Technologies',
    'Soilless Farming',
    'Crop Innovation',
    'Agricultural Value Addition',
    'Sustainable Food Production',
    'Agricultural Entrepreneurship',
    'Research and Collaboration',
  ],
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
