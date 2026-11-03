import { useState } from 'react';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError('');
    setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email, and message before submitting.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('Your message has been captured. Connect the form to your preferred email or CRM integration to send it to The Change Force.');
    setForm(initialState);
    setError('');
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
            placeholder="Your name"
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
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Phone number
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700 md:col-span-2">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
            placeholder="How can The Change Force support you?"
          />
        </label>
      </div>

      {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}
      {status ? <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{status}</p> : null}

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
      >
        Send message
      </button>
    </form>
  );
}
