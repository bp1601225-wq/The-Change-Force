import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/image.png';


const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Mission & Vision', to: '/mission-vision' },
  { label: 'Departments', to: '/departments' },
  { label: 'Our Approach', to: '/our-approach' },
  { label: 'Join the Change', to: '/join-the-change' },
  { label: 'Contact', to: '/contact' },
  { label: 'Donate', to: '/donate' },
];

const departmentLinks = [
  { label: 'Educational Impact', to: '/departments/educational-impact' },
  { label: 'Environmental Impact', to: '/departments/environmental-impact' },
  { label: 'Agricultural Innovation', to: '/departments/agricultural-innovation' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
             
             <img src={Logo} alt="" />
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-lg font-bold leading-none text-white">The Change Force</span>
              <span className="text-xs text-slate-500">Where Impact Matters</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-emerald-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Departments</p>
            <ul className="mt-4 space-y-2 text-sm">
              {departmentLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-emerald-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} The Change Force (TCF) NGO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
