import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block leading-none">The Change Force </span>
                    <span className="text-xs text-slate-500">Where Impact Matters</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  &copy; {new Date().getFullYear()} The Change Force (TCF) NGO. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
  );
}
