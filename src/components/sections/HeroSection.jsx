import { motion } from 'framer-motion';
import { GraduationCap, Recycle, Sprout, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenPartner }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-24 sm:py-32">
            {/* Background Subtle Animated Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"
            />
    
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
                {/* Hero Left Text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Non-Governmental Organization
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
                    Turning Possibilities into <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Sustainable Change.</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                    The Change Force (TCF) is committed to empowering people, nurturing talents, protecting the environment, and advancing agricultural innovation to build a better tomorrow.
                  </p>
    
                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onOpenPartner()}
                      className="px-8 py-4 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2"
                    >
                      Get Involved Today
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
    
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="#wings"
                      className="px-8 py-4 rounded-xl font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm transition-all"
                    >
                      Explore Impact Wings
                    </motion.a>
                  </div>
                </motion.div>
    
                {/* Hero Right Visual Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Educational Impact</h3>
                      <p className="text-xs text-slate-300 mt-1">STEM, talent discovery, AI awareness & practical mentorship.</p>
                    </div>
                  </div>
    
                  <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400">
                      <Recycle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Environmental Impact</h3>
                      <p className="text-xs text-slate-300 mt-1">Waste recovery, plastic reduction & community eco-initiatives.</p>
                    </div>
                  </div>
    
                  <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Agricultural Wing</h3>
                      <p className="text-xs text-slate-300 mt-1">Soilless farming, climate resilience & value addition.</p>
                    </div>
                  </div>
                </motion.div>
    
              </div>
            </div>
          </section>
  );
}
