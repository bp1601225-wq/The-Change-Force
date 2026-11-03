
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Handshake,
  Users,
  Clock3,
  Globe2,
  Sparkles,
} from 'lucide-react';

import ContactForm from '../components/ui/ContactForm.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function ContactPage() {
  const contactDetails = [
    {
      label: 'Email address',
      value: 'Not publicly listed yet',
      icon: Mail,
      description: 'Send us your enquiries and proposals.',
    },
    {
      label: 'Phone number',
      value: 'Not publicly listed yet',
      icon: Phone,
      description: 'Connect with our team directly.',
    },
    {
      label: 'Our location',
      value: 'Not publicly listed yet',
      icon: MapPin,
      description: 'Find out where our work begins.',
    },
  ];

  const reasons = [
    {
      icon: Handshake,
      title: 'Partnerships',
      description: 'Explore opportunities to collaborate with us.',
    },
    {
      icon: Users,
      title: 'Volunteering',
      description: 'Contribute your skills and make a difference.',
    },
    {
      icon: Globe2,
      title: 'Community impact',
      description: 'Help us create meaningful change.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Let's connect"
        title="Every great change begins with a conversation."
        description="Have a question, an idea, or a partnership in mind? We would love to hear from you. Let's explore how we can make a difference together."
      />

      <main className="bg-slate-50">

        {/* CONTACT INTRO */}
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr]">

            {/* LEFT CONTACT PANEL */}
            <aside className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-8 text-white sm:p-10">

              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  Get in touch
                </div>

                <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
                  We'd love to hear from you.
                </h2>

                <p className="mt-5 leading-8 text-emerald-100/80">
                  Whether you are interested in our initiatives, seeking
                  a partnership, or simply want to learn more about our work,
                  our doors are open.
                </p>

                {/* CONTACT DETAILS */}
                <div className="mt-12 space-y-7">
                  {contactDetails.map(({ label, value, icon: Icon, description }) => (
                    <div key={label} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                          {label}
                        </p>

                        <p className="mt-1 break-words font-semibold text-white">
                          {value}
                        </p>

                        <p className="mt-1 text-sm text-emerald-100/60">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 border-t border-white/15 pt-8">
                  <p className="text-sm font-bold text-white">
                    The Change Force
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-100/60">
                    Empowering people. Inspiring innovation. Creating lasting change.
                  </p>
                </div>
              </div>
            </aside>

            {/* RIGHT FORM PANEL */}
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">

              <div className="mb-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Send us a message
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Let's start a conversation.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-500">
                  Complete the form below and tell us how we can help.
                  We appreciate your interest in The Change Force.
                </p>
              </div>

              <ContactForm />
            </section>

          </div>
        </section>

        {/* WHY CONTACT US */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Let's work together
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              There are many ways to make a difference.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We welcome individuals and organizations who share our
              commitment to empowering people and building sustainable communities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-7 text-xl font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING BANNER */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-emerald-700 px-8 py-14 text-center text-white sm:px-14 sm:py-16">

            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-20 -bottom-32 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <MessageCircle className="mx-auto h-10 w-10 text-emerald-200" />

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Your next conversation could inspire change.
              </h2>

              <p className="mt-5 leading-7 text-emerald-50/90">
                Have something meaningful to share? Reach out today.
                Together, we can turn ideas into action.
              </p>

              <a
                href="#top"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-emerald-800 transition-all hover:-translate-y-1 hover:bg-emerald-50"
              >
                Start a conversation
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
