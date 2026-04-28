import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send, Check } from "lucide-react";
import VideoBackground from "../components/VideoBackground";

const packages = [
  "Basic Business Website — $100",
  "Website + Booking System — $150",
  "Website + AI Automation — $200",
  "Not sure yet — help me decide",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    pkg: packages[0],
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback so the lead doesn't get lost on a static deploy
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nEmail: ${form.email}\nPackage: ${form.pkg}\n\nNotes:\n${form.notes}`
    );
    window.location.href = `mailto:hello@youssef.studio?subject=${encodeURIComponent(
      "New project inquiry — " + form.name
    )}&body=${body}`;
    setSubmitted(true);
  };

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden">
        <VideoBackground overlayOpacity={0.85} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Contact</div>
            <h1 className="mt-3 h-display text-5xl md:text-6xl lg:text-7xl">
              Let's build your business <span className="text-gold-400 italic">online.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
              Tell me a little about what you do — I'll send back a free quote
              and an honest timeline within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <Check size={26} />
                </div>
                <h3 className="mt-6 font-display text-3xl">Got it.</h3>
                <p className="mt-3 text-white/70 max-w-sm mx-auto">
                  Your inquiry just opened in your email — hit send and I'll
                  reply personally within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    required
                  />
                  <Field
                    label="Business name"
                    value={form.business}
                    onChange={(v) => update("business", v)}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                    Which package interests you?
                  </label>
                  <div className="relative">
                    <select
                      value={form.pkg}
                      onChange={(e) => update("pkg", e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition"
                    >
                      {packages.map((p) => (
                        <option key={p} value={p} className="bg-ink-900 text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                    Anything else? <span className="normal-case tracking-normal text-white/35">(optional)</span>
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={4}
                    placeholder="Tell me about your business, where you're at, and what you wish your website did."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full !py-4">
                  Send Inquiry <Send size={15} />
                </button>
                <p className="text-center text-xs text-white/40">
                  Replies sent personally · 24h response time
                </p>
              </form>
            )}
          </motion.div>

          {/* CONTACT METHODS */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="tel:+10000000000"
              className="block glass-card p-6 hover:border-gold-500/40 transition"
            >
              <Phone className="text-gold-400" size={22} />
              <div className="mt-4 font-display text-xl">Call or Text</div>
              <div className="mt-1 text-white/60 text-sm">
                Fastest way to reach me. Real human, every time.
              </div>
              <div className="mt-3 text-gold-400 font-medium text-sm">
                (555) 010-0420 →
              </div>
            </a>

            <a
              href="mailto:hello@youssef.studio"
              className="block glass-card p-6 hover:border-gold-500/40 transition"
            >
              <Mail className="text-gold-400" size={22} />
              <div className="mt-4 font-display text-xl">Email</div>
              <div className="mt-1 text-white/60 text-sm">
                For longer messages or attachments.
              </div>
              <div className="mt-3 text-gold-400 font-medium text-sm">
                hello@youssef.studio →
              </div>
            </a>

            <a
              href="sms:+10000000000"
              className="block glass-card p-6 hover:border-gold-500/40 transition"
            >
              <MessageSquare className="text-gold-400" size={22} />
              <div className="mt-4 font-display text-xl">Text Now</div>
              <div className="mt-1 text-white/60 text-sm">
                Drop me a line — I'll get back same day.
              </div>
              <div className="mt-3 text-gold-400 font-medium text-sm">
                Open SMS →
              </div>
            </a>

            <div className="glass-card p-6">
              <div className="eyebrow">Hours</div>
              <div className="mt-3 text-sm text-white/70 space-y-1">
                <div className="flex justify-between"><span>Mon – Fri</span><span>9am – 8pm</span></div>
                <div className="flex justify-between"><span>Sat</span><span>10am – 4pm</span></div>
                <div className="flex justify-between"><span>Sun</span><span>By appointment</span></div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition"
      />
    </div>
  );
}
