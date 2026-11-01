import { motion } from 'framer-motion';
import { Globe2, BookOpen, TrendingUp, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../constants/animationVariants.js';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wider">
                    About The Change Force
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Every individual has potential. Every idea can spark transformation.
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Unlocking human potential requires more than inspiration—it requires access to opportunities, practical knowledge, innovative solutions, and collective action.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Through our three impact-driven departments, we work to bridge gaps, develop practical solutions, and create opportunities that respond to the evolving needs of individuals and communities.
                  </p>
                  <div className="p-5 rounded-2xl bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 font-medium shadow-sm">
                    "We see challenges not as barriers, but as opportunities to innovate, collaborate, and create lasting solutions."
                  </div>
                </motion.div>
    
                <motion.div variants={fadeInUp} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Practical STEM</h3>
                    <p className="text-slate-500 text-sm">Going beyond academic performance to empower technical skills and creativity.</p>
                  </div>
    
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Resource Recovery</h3>
                    <p className="text-slate-500 text-sm">Turning plastic pollution and waste into valuable resources.</p>
                  </div>
    
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Agri Entrepreneurship</h3>
                    <p className="text-slate-500 text-sm">Connecting resilient farming techniques directly with market growth.</p>
                  </div>
    
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-md space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-amber-300 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg">Shared Purpose</h3>
                    <p className="text-slate-200 text-sm">One unified force delivering measurable, community-focused results.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
  );
}
