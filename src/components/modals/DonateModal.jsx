import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

export default function DonateModal({ isOpen, onClose, onSubmit, selectedCause, setSelectedCause, customAmount, setCustomAmount, isSubmitting, error }) {
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
                    aria-label="Close donation intent form"
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
    
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center text-xl mx-auto mb-3 shadow-md">
                      <Heart className="w-6 h-6 fill-slate-950" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Support TCF Initiatives</h3>
                    <p className="text-slate-500 text-sm mt-1">Directly enable sustainable education, eco protection, and farming.</p>
                  </div>
    
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="donation-cause" className="block text-xs font-bold uppercase text-slate-700 mb-1">Select Cause</label>
                      <select
                        id="donation-cause"
                        name="cause"
                        value={selectedCause}
                        onChange={(e) => setSelectedCause(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="General Impact Fund">General Impact Fund</option>
                        <option value="Educational & Youth STEM Projects">Educational & Youth STEM Projects</option>
                        <option value="Environmental Cleanup & Recycling">Environmental Cleanup & Recycling</option>
                        <option value="Agricultural Resilience Programs">Agricultural Resilience Programs</option>
                      </select>
                    </div>
    
                    <div>
                      <label htmlFor="donation-amount" className="block text-xs font-bold uppercase text-slate-700 mb-1">Amount</label>
                      <div className="grid grid-cols-4 gap-2 mb-2">
                        {[25, 50, 100, 250].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setCustomAmount(amt.toString())}
                            disabled={isSubmitting}
                            className={`py-2 rounded-lg text-sm font-bold border ${
                              customAmount === amt.toString() ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {amt}
                          </button>
                        ))}
                      </div>
                      <input
                        name="amount"
                        id="donation-amount"
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        min="0.01"
                        max="99999999.99"
                        step="0.01"
                        required
                        onChange={(e) => setCustomAmount(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                    <p className="text-xs text-slate-500">This records your donation intent only. No payment is processed.</p>
                    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-md disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? 'Submitting...' : 'Submit Donation Intent'}
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
  );
}
