import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Compass, Heart, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../../src/assets/image.png';

const navLinkClasses = ({ isActive }) =>
  `transition-colors ${
    isActive ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-700'
  }`;

export default function Navbar({ onOpenPartner, onOpenDonate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  const closeAllMenus = () => {
    setAboutOpen(false);
    setDepartmentsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 text-white shadow-md shadow-emerald-600/20"
            >
              {/* <Compass className="h-6 w-6" /> */}
<img src={Logo} alt="" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="block text-xl font-black leading-none tracking-tight text-slate-900">The Change Force</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-600">Where Impact Matters</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>

            <div className="relative">
              <button
                type="button"
                onClick={() => setAboutOpen((open) => !open)}
                className="flex items-center gap-1 text-slate-600 transition hover:text-emerald-700"
              >
                About Us
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {aboutOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-10 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
                  >
                    <Link to="/about" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-emerald-700">About The Change Force</Link>
                    <Link to="/mission-vision" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-emerald-700">Mission & Vision</Link>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setDepartmentsOpen((open) => !open)}
                className="flex items-center gap-1 text-slate-600 transition hover:text-emerald-700"
              >
                Departments
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {departmentsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-10 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
                  >
                    <Link to="/departments/educational-impact" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-emerald-700">Educational Impact</Link>
                    <Link to="/departments/environmental-impact" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-emerald-700">Environmental Impact</Link>
                    <Link to="/departments/agricultural-innovation" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-emerald-700">Agricultural Innovation</Link>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <NavLink to="/our-approach" className={navLinkClasses}>Our Approach</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact Us</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/join-the-change"
              className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Join the Change
            </Link>
            <button
              type="button"
              onClick={onOpenDonate}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700"
            >
              <Heart className="h-4 w-4 fill-white" />
              Donate
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex rounded-lg p-2 text-slate-600 transition hover:text-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6">
              <NavLink to="/" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Home</NavLink>
              <Link to="/about" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">About The Change Force</Link>
              <Link to="/mission-vision" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Mission & Vision</Link>
              <Link to="/departments" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Our Departments</Link>
              <Link to="/departments/educational-impact" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 pl-6 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Educational Impact</Link>
              <Link to="/departments/environmental-impact" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 pl-6 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Environmental Impact</Link>
              <Link to="/departments/agricultural-innovation" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 pl-6 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Agricultural Innovation</Link>
              <Link to="/our-approach" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Our Approach</Link>
              <Link to="/contact" onClick={closeAllMenus} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700">Contact Us</Link>
              <div className="grid gap-2 pt-3">
                <Link to="/join-the-change" onClick={closeAllMenus} className="rounded-xl bg-emerald-600 px-4 py-2.5 text-center text-sm font-bold text-white">Join the Change</Link>
                <button type="button" onClick={() => { onOpenDonate(); closeAllMenus(); }} className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-center text-sm font-bold text-white">Donate</button>
                <button type="button" onClick={() => { onOpenPartner(); closeAllMenus(); }} className="rounded-xl bg-emerald-50 px-4 py-2.5 text-center text-sm font-bold text-emerald-800">Partner / Volunteer</button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
