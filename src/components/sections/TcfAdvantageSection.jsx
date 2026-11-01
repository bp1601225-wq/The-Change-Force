import { motion } from 'framer-motion';
import { Recycle, Sprout, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../constants/animationVariants.js';

export default function TcfAdvantageSection() {
  return (
    <section id="different" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-emerald-600 font-extrabold uppercase text-xs tracking-wider">The TCF Advantage</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">What Makes TCF Different?</h2>
                <p className="text-slate-600 mt-3 text-lg">One Organization. Three Pathways to Sustainable Change.</p>
              </div>
    
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* 1. We Develop People */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">We Develop People</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Through talent nurturing, tech awareness, and practical learning, we prepare young people to discover their abilities and tackle tomorrow's challenges.
                  </p>
                </motion.div>
    
                {/* 2. We Rethink Resources */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-sky-600/20 group-hover:scale-110 transition-transform">
                    <Recycle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">We Rethink Resources</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Through environmental education and recycling initiatives, we turn ecological challenges into opportunities for positive economic and social change.
                  </p>
                </motion.div>
    
                {/* 3. We Explore Better Ways to Grow */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-2xl mb-6 shadow-md shadow-amber-400/20 group-hover:scale-110 transition-transform">
                    <Sprout className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">We Explore Better Ways to Grow</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Through agricultural innovation and resilient techniques, we investigate modern solutions for reliable and sustainable food production.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
  );
}
