import { useState } from 'react';
import { createPartnerInterest } from '../../services/submissions.js';

const roleOptions = [
  'Partner With Us (Organization / School)',
  'Volunteer With Us (Individual)',
  'Support Our Initiatives (Expertise / Resources)',
];

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  areaOfInterest: roleOptions[0],
  message: '',
};

export default function JoinForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError('');
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email, and message to continue.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await createPartnerInterest({
        fullName: form.fullName,
        email: form.email,
        role: form.areaOfInterest,
        message: `Phone: ${form.phone || 'Not provided'}\nOrganization: ${form.organization || 'Not provided'}\n${form.message}`,
      });

      setStatus('Thank you for your interest. Your submission has been recorded and our team will be in touch.');
      setForm(initialState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to submit your interest right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="Your full name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone number
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Organization
          <input
            name="organization"
            value={form.organization}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Area of interest
          <select
            name="areaOfInterest"
            value={form.areaOfInterest}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="Tell us how you would like to contribute."
          />
        </label>
      </div>

      {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}
      {status ? <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{status}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
      >
        {isSubmitting ? 'Submitting...' : 'Submit interest'}
      </button>
    </form>
  );
}
