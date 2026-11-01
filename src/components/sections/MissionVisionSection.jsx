import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../constants/animationVariants.js';

export default function MissionVisionSection() {
  return (
    <section id="mission" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Mission */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-white border border-emerald-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -bottom-6 text-emerald-600/10 group-hover:scale-110 transition-transform pointer-events-none">
                    <Target className="w-48 h-48" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white mb-6">
                    Our Mission
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">To Empower & Develop Society</h3>
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                    To empower and develop society through talent nurturing, environmental care, and agricultural innovation.
                  </p>
                </motion.div>
    
                {/* Vision */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-sky-50/80 via-white to-white border border-sky-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -bottom-6 text-sky-600/10 group-hover:scale-110 transition-transform pointer-events-none">
                    <Eye className="w-48 h-48" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-sky-600 text-white mb-6">
                    Our Vision
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">A Thriving Tomorrow</h3>
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                    To create a future where talents, ideas, and communities thrive in harmony.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
  );
}
