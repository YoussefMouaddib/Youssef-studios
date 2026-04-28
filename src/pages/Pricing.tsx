import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import VideoBackground from "../components/VideoBackground";

const tiers = [
  {
    name: "Basic Business Website",
    price: "100",
    blurb: "Everything a small business needs to start showing up.",
    features: [
      "Professional custom website",
      "Mobile-friendly design",
      "Contact form",
      "Click-to-call button",
      "Email lead capture",
      "Designed to drive calls & emails",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Website + Booking System",
    price: "150",
    blurb: "Stop playing phone tag. Let customers book themselves.",
    features: [
      "Everything in Basic",
      "Online booking system",
      "Owner dashboard",
      "Appointment management",
      "Basic system setup & training",
      "Calendar sync",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Website + AI Automation",
    price: "200",
    blurb: "Hands-off lead handling. Your AI assistant never sleeps.",
    features: [
      "Everything in Booking",
      "Automated text follow-ups",
      "Email automation flows",
      "Review request automation",
      "Cold lead reactivation",
      "AI-powered customer comms",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <VideoBackground overlayOpacity={0.82} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Pricing</div>
            <h1 className="mt-3 h-display text-5xl md:text-6xl lg:text-7xl">
              Simple pricing. <span className="text-azure-400 italic">Premium results.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">
              One-time flat fees. No retainers, no surprises. Pick the package
              that matches where your business is — upgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative glass-card p-8 flex flex-col ${
                  t.popular
                    ? "border-azure-500/40 shadow-glow lg:scale-[1.04] lg:-mt-2"
                    : ""
                }`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-azure-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-950">
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}
                <div className="text-sm uppercase tracking-[0.2em] text-white/55">
                  Package
                </div>
                <h3 className="mt-2 font-display text-2xl">{t.name}</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-white/50 text-xl">$</span>
                  <span className="font-display text-6xl">{t.price}</span>
                  <span className="text-white/50 text-sm ml-1">one-time</span>
                </div>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">{t.blurb}</p>

                <ul className="mt-8 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          t.popular ? "bg-azure-500/20 text-azure-400" : "bg-white/10 text-white/80"
                        }`}
                      >
                        <Check size={12} />
                      </span>
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-10 ${t.popular ? "btn-primary" : "btn-ghost"} w-full`}
                >
                  {t.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center text-white/55 text-sm"
          >
            Not sure which tier? <Link to="/contact" className="text-azure-400 hover:text-azure-300">Tell me about your business</Link> — I'll recommend the right fit.
          </motion.div>
        </div>
      </section>

      {/* COMPARISON / TRUST STRIP */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Flat fees", body: "No retainers. No bait-and-switch. The price you see is the price you pay." },
              { title: "Free month of edits", body: "Tweak copy, swap photos, adjust hours — unlimited for your first 30 days." },
              { title: "You own everything", body: "Domain, code, content. No platform lock-in. Take it with you, always." },
            ].map((b) => (
              <div key={b.title} className="glass-card p-7">
                <div className="font-display text-2xl text-azure-400">{b.title}</div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
