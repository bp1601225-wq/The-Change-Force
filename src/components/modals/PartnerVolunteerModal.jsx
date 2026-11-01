import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PartnerVolunteerModal({ isOpen, onClose, onSubmit, isSubmitting, error }) {
  return (
    <AnimatePresence>
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => {
                    if (!isSubmitting) onClose();
                  }}
                  className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative z-10 border border-slate-100"
                >
                  <button
                    onClick={() => onClose()}
                    disabled={isSubmitting}
                    aria-label="Close partner interest form"
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
    
                  <h3 className="text-2xl font-black text-slate-900 mb-1">Join The Change</h3>
                  <p className="text-slate-500 text-sm mb-6">Contribute your time, skills, or resources to TCF initiatives.</p>
    
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="partner-full-name" className="block text-xs font-bold uppercase text-slate-700 mb-1">Full Name</label>
                      <input id="partner-full-name" name="full_name" type="text" required maxLength={120} autoComplete="name" placeholder="eg. Yaw Badu Nkansah" disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                      <label htmlFor="partner-email" className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address</label>
                      <input id="partner-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="yawbadunkansah@gmail.com" disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                      <label htmlFor="partner-role" className="block text-xs font-bold uppercase text-slate-700 mb-1">Role / Contribution</label>
                      <select id="partner-role" name="role" required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option>Partner With Us (Organization / School)</option>
                        <option>Volunteer With Us (Individual)</option>
                        <option>Support Our Initiatives (Expertise / Resources)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="partner-message" className="block text-xs font-bold uppercase text-slate-700 mb-1">Message</label>
                      <textarea id="partner-message" name="message" rows={3} maxLength={2000} placeholder="Tell us how you would like to collaborate..." disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
                    </div>
                    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
  );
}
