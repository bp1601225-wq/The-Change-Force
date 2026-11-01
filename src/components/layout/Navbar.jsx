import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Compass } from 'lucide-react';

import Logo from "../../../src/assets/image.png"

export default function Navbar({ onOpenPartner, onOpenDonate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20"
                  >
                    <Compass className="w-6 h-6" />
                  <img src={Logo} alt="" />

                  </motion.div>
                  <div>
                    <span className="text-xl font-black tracking-tight text-slate-900 block leading-none">The Change Force </span>
                    <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">Where Impact Matters</span>
                  </div>
                </a>
    
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
                  <a href="#about" className="hover:text-emerald-600 transition-colors">About TCF</a>
                  <a href="#mission" className="hover:text-emerald-600 transition-colors">Mission & Vision</a>
                  <a href="#wings" className="hover:text-emerald-600 transition-colors">Impact Wings</a>
                  <a href="#different" className="hover:text-emerald-600 transition-colors">Why TCF</a>
                  <a href="#approach" className="hover:text-emerald-600 transition-colors">Our Approach</a>
                </nav>
    
                {/* CTAs */}
                <div className="hidden md:flex items-center space-x-3">
                  <button
                    onClick={() => onOpenPartner()}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-all"
                  >
                    Partner / Volunteer
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenDonate()}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    Donate
                  </motion.button>
                </div>
    
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
    
            {/* Mobile Dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 overflow-hidden"
                >
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">About TCF</a>
                  <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Mission & Vision</a>
                  <a href="#wings" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Impact Wings</a>
                  <a href="#different" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Why TCF</a>
                  <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Our Approach</a>
                  <div className="pt-2 flex flex-col gap-2">
                    <button onClick={() => { onOpenPartner(); setMobileMenuOpen(false); }} className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-emerald-800 bg-emerald-50">
                      Partner / Volunteer
                    </button>
                    <button onClick={() => { onOpenDonate(); setMobileMenuOpen(false); }} className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-emerald-600">
                      Donate
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
  );
}
