
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import {
  MotionConfig,
  AnimatePresence,
  motion,
} from 'framer-motion';

import AppRoutes from './AppRoutes.jsx';
import DonateModal from './components/modals/DonateModal.jsx';
import PartnerVolunteerModal from './components/modals/PartnerVolunteerModal.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';
import ToastNotification from './components/ui/ToastNotification.jsx';
import {
  createDonationIntent,
  createPartnerInterest,
} from './services/submissions.js';

function AppContent() {
  const location = useLocation();

  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState('General Impact Fund');
  const [customAmount, setCustomAmount] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const submissionInProgress = useRef(false);

  useEffect(() => {
    if (!toastMessage) return undefined;

    const timeoutId = window.setTimeout(
      () => setToastMessage(''),
      4000
    );

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const showToast = (message) => setToastMessage(message);

  const openPartnerModal = () => {
    setSubmissionError('');
    setPartnerModalOpen(true);
  };

  const openDonateModal = () => {
    setSubmissionError('');
    setDonateModalOpen(true);
  };

  const handlePartnerSubmit = async (event) => {
    event.preventDefault();

    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setSubmissionError('');

    const formData = new FormData(event.currentTarget);

    try {
      await createPartnerInterest({
        fullName: formData.get('full_name'),
        email: formData.get('email'),
        role: formData.get('role'),
        message: formData.get('message'),
      });

      setPartnerModalOpen(false);

      showToast(
        'Thank you for getting involved! Your interest has been recorded.'
      );
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : 'Unable to submit your interest. Please try again.'
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  const handleDonateSubmit = async (event) => {
    event.preventDefault();

    if (submissionInProgress.current) return;

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setSubmissionError('');

    try {
      await createDonationIntent({
        cause: selectedCause,
        amount: customAmount,
      });

      setDonateModalOpen(false);
      setCustomAmount('');

      showToast(
        'Thank you for supporting TCF! Your donation intent has been recorded. No payment was processed.'
      );
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : 'Unable to submit your donation intent. Please try again.'
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      <ToastNotification message={toastMessage} />

      <Navbar
        onOpenPartner={openPartnerModal}
        onOpenDonate={openDonateModal}
      />

      <ScrollToTop />

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.45,
              ease: 'easeInOut',
            }}
          >
            <AppRoutes
              onOpenPartner={openPartnerModal}
              onOpenDonate={openDonateModal}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <PartnerVolunteerModal
        isOpen={partnerModalOpen}
        onClose={() => {
          if (!isSubmitting) setPartnerModalOpen(false);
        }}
        onSubmit={handlePartnerSubmit}
        isSubmitting={isSubmitting}
        error={submissionError}
      />

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => {
          if (!isSubmitting) setDonateModalOpen(false);
        }}
        onSubmit={handleDonateSubmit}
        selectedCause={selectedCause}
        setSelectedCause={setSelectedCause}
        customAmount={customAmount}
        setCustomAmount={setCustomAmount}
        isSubmitting={isSubmitting}
        error={submissionError}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig
        transition={{
          duration: 0.45,
          ease: 'easeInOut',
        }}
        reducedMotion="user"
      >
        <AppContent />
      </MotionConfig>
    </BrowserRouter>
  );
}
