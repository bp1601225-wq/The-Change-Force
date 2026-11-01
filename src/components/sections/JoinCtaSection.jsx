import { motion } from 'framer-motion';
import { Heart, Handshake } from 'lucide-react';

export default function JoinCtaSection({ onOpenPartner, onOpenDonate }) {
  return (
    <section className="py-20 bg-gradient-to-tr from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto space-y-6"
              >
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Join The Change</h2>
                <p className="text-slate-200 text-lg font-light leading-relaxed">
                  Meaningful change begins when people come together around a shared purpose. Everyone has something valuable to contribute—skills, resources, partnerships, or willingness.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenPartner()}
                    className="px-8 py-4 rounded-2xl font-bold bg-white text-emerald-950 hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2"
                  >
                    <Handshake className="w-5 h-5" /> Partner / Volunteer
                  </button>
                  <button
                    onClick={() => onOpenDonate()}
                    className="px-8 py-4 rounded-2xl font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-slate-950" /> Donate Now
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
  );
}
