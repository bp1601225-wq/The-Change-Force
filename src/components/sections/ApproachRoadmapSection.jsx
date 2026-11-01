import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../constants/animationVariants.js';

export default function ApproachRoadmapSection() {
  return (
    <section id="approach" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-amber-400 font-extrabold uppercase text-xs tracking-wider">Methodology</span>
                <h2 className="text-3xl sm:text-4xl font-black mt-2">How We Turn Ideas Into Action</h2>
                <p className="text-slate-400 mt-3 text-lg">Our structured 5-step approach ensures lasting and measurable impact.</p>
              </div>
    
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-5 gap-6"
              >
                {/* Step 1 */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between hover:bg-slate-800 transition-all">
                  <div>
                    <span className="text-3xl font-black text-emerald-400">01</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">Identify Challenge</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Understanding community needs to identify areas where practical interventions make a difference.
                    </p>
                  </div>
                </motion.div>
    
                {/* Step 2 */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between hover:bg-slate-800 transition-all">
                  <div>
                    <span className="text-3xl font-black text-sky-400">02</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">Explore Solutions</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Investigating approaches combining creativity, research, technology, and local knowledge.
                    </p>
                  </div>
                </motion.div>
    
                {/* Step 3 */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between hover:bg-slate-800 transition-all">
                  <div>
                    <span className="text-3xl font-black text-amber-400">03</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">Collaborate</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Partnering with schools, public institutions, businesses, and experts to build strong initiatives.
                    </p>
                  </div>
                </motion.div>
    
                {/* Step 4 */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between hover:bg-slate-800 transition-all">
                  <div>
                    <span className="text-3xl font-black text-emerald-400">04</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">Implement</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Translating promising ideas into structured activities tailored to community resources.
                    </p>
                  </div>
                </motion.div>
    
                {/* Step 5 */}
                <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex flex-col justify-between hover:bg-slate-800 transition-all">
                  <div>
                    <span className="text-3xl font-black text-sky-400">05</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">Learn & Improve</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Assessing results and using evidence to continuously refine and expand future impact.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
    
            </div>
          </section>
  );
}
