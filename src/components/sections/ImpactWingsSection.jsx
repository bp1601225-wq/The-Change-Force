import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Recycle, Sprout, CheckCircle2, Cpu } from 'lucide-react';

export default function ImpactWingsSection({ onOpenPartner }) {
const [activeWing, setActiveWing] = useState('edu');
return (
<section id="wings" className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-12">
  <span className="text-emerald-600 font-extrabold uppercase text-xs tracking-wider">Our Core Pillars</span>
  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Three Pathways to Impact</h2>
  <p className="text-slate-600 mt-3 text-base sm:text-lg">Specialized wings collaborating under one shared vision.</p>
</div>

{/* Animated Wing Tab Controls */}
<div className="flex flex-wrap justify-center gap-3 mb-10">
  <button
    onClick={() => setActiveWing('edu')}
    className={`relative px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2.5 ${
      activeWing === 'edu' ? 'text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
    }`}
  >
    {activeWing === 'edu' && (
      <motion.div layoutId="activeWingBg" className="absolute inset-0 bg-emerald-600 rounded-2xl z-0" />
    )}
    <span className="relative z-10 flex items-center gap-2">
      <GraduationCap className="w-4 h-4" /> Educational Impact
    </span>
  </button>

  <button
    onClick={() => setActiveWing('env')}
    className={`relative px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2.5 ${
      activeWing === 'env' ? 'text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
    }`}
  >
    {activeWing === 'env' && (
      <motion.div layoutId="activeWingBg" className="absolute inset-0 bg-sky-600 rounded-2xl z-0" />
    )}
    <span className="relative z-10 flex items-center gap-2">
      <Recycle className="w-4 h-4" /> Environmental Impact
    </span>
  </button>

  <button
    onClick={() => setActiveWing('agri')}
    className={`relative px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2.5 ${
      activeWing === 'agri' ? 'text-slate-950' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
    }`}
  >
    {activeWing === 'agri' && (
      <motion.div layoutId="activeWingBg" className="absolute inset-0 bg-amber-400 rounded-2xl z-0" />
    )}
    <span className="relative z-10 flex items-center gap-2">
      <Sprout className="w-4 h-4" /> Agricultural Innovation
    </span>
  </button>
</div>

{/* Active Wing Content Card */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeWing}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md"
  >
    {activeWing === 'edu' && (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" /> Nurturing STEM & Creativity
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">Educational Impact Wing</h3>
          <p className="text-slate-600 leading-relaxed">
            We believe that every young person has potential waiting to be discovered. Academic performance alone does not define ability—some excel through technical skills, problem-solving, and practical creation.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Artificial STEM education and emerging technology awareness.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Practical training, mentorship, and collaborative youth workshops.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Applying learning directly to real-world community challenges.</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-100/50 p-8 rounded-3xl border border-emerald-100 flex flex-col justify-between h-full">
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Wing Mission</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Moving young people from discovering what is possible to developing the practical skills needed to make it happen.
            </p>
          </div>
          <button
            onClick={() => onOpenPartner()}
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all text-center"
          >
            Support STEM Programs
          </button>
        </div>
      </div>
    )}

    {activeWing === 'env' && (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
            <Recycle className="w-4 h-4" /> Environmental Protection & Upcycling
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">Environmental Impact Wing</h3>
          <p className="text-slate-600 leading-relaxed">
            Environmental challenges can become opportunities for innovation and enterprise. We focus on transforming discarded materials into useful community resources while keeping drainage spaces clean.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
              <span>Plastic pollution reduction and drainage blockage prevention.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
              <span>Community environmental education & climate-conscious practices.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
              <span>Resource recovery and circular economy initiatives.</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-gradient-to-br from-sky-50 to-indigo-100/50 p-8 rounded-3xl border border-sky-100 flex flex-col justify-between h-full">
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Wing Mission</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Promoting a culture in which waste is managed responsibly and environmental protection becomes a shared duty.
            </p>
          </div>
          <button
            onClick={() => onOpenPartner()}
            className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all text-center"
          >
            Join Eco Initiatives
          </button>
        </div>
      </div>
    )}

    {activeWing === 'agri' && (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
            <Sprout className="w-4 h-4" /> Smart Agri & Resilience
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">Agricultural Impact Wing</h3>
          <p className="text-slate-600 leading-relaxed">
            Agriculture must evolve to meet climate change realities and food security demands. We explore climate-resilient practices, soilless farming, and new market opportunities.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Soilless farming, smart agricultural tech & climate resilience.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Connecting agricultural innovation with entrepreneurship.</span>
            </div>
            <div className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Collaborating with farmers, researchers, and development partners.</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-100/50 p-8 rounded-3xl border border-amber-200 flex flex-col justify-between h-full">
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Wing Mission</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Building an agricultural sector that is more innovative, climate-resilient, productive, and economically empowering.
            </p>
          </div>
          <button
            onClick={() => onOpenPartner()}
            className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-md transition-all text-center"
          >
            Partner in Agri Tech
          </button>
        </div>
      </div>
    )}
  </motion.div>
</AnimatePresence>

</div>
</section>
);
}
