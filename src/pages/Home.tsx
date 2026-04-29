import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Calendar,
  Bot,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";
import VideoBackground from "../components/VideoBackground";
import Counter from "../components/Counter";
import FAQ from "../components/FAQ";

const reasons = [
  {
    icon: Globe,
    title: "Customers search online first",
    body: "97% of consumers look up local businesses online before visiting. Without a real site, you're invisible.",
  },
  {
    icon: ShieldCheck,
    title: "It signals trust instantly",
    body: "A polished website is the difference between 'might call' and 'definitely calling.' First impressions are decided in seconds.",
  },
  {
    icon: Zap,
    title: "It works while you don't",
    body: "Booking, lead capture, and follow-ups happen 24/7 — even when you're with a customer.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "More leads",
    body: "Capture phone calls, emails, and bookings from every visitor.",
  },
  {
    icon: Award,
    title: "Look professional",
    body: "A premium presence that justifies your prices.",
  },
  {
    icon: Calendar,
    title: "Get booked online",
    body: "Customers schedule themselves. No phone tag.",
  },
  {
    icon: Bot,
    title: "Automate follow-ups",
    body: "AI texts, emails, and review requests on autopilot.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <VideoBackground overlayOpacity={0.7} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-24 md:pt-36 md:pb-32 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="h-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            >
              Make your dream website
              <span className="text-azure-400 italic"> a reality.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/pricing" className="btn-primary">
                View Packages <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get a Free Quote
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-xl mx-auto"
            >
              <Stat label="Sites built" value={47} suffix="+" />
              <Stat label="Avg. response" value={2} suffix="h" />
              <Stat label="Leads generated" value={1280} suffix="+" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2"
        >
          Scroll
          <span className="block w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* WHY YOU NEED A SITE */}
      <Section
        eyebrow="Why a website matters"
        title="In 2026, a website is the front door to your business."
        intro="Your customers Google you before they ever pick up the phone. What they find decides if they book."
      >
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card p-7"
            >
              <r.icon className="text-azure-400" size={26} />
              <h3 className="mt-5 text-xl font-display tracking-tight">
                {r.title}
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed text-[15px]">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHY YOUSSEF — with video background */}
      <section className="relative py-28 overflow-hidden">
        <VideoBackground overlayOpacity={0.85} zoom={false} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">Why work with Youssef</div>
              <h2 className="mt-3 h-display text-4xl md:text-5xl">
                Big-agency quality.{" "}
                <span className="text-azure-400">Personal touch.</span>
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed text-lg max-w-lg">
                You're not handed off to a junior. I design, code, and launch
                every site personally — then I stick around to keep it running
                and converting.
              </p>
              <ul className="mt-8 space-y-3 text-white/75">
                {[
                  "Direct access — text me, get a reply in hours, not days.",
                  "No bloated retainers. Premium work at fair, flat prices.",
                  "Built to convert — not just to look pretty.",
                  "Real automations: booking, follow-ups, review requests.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-10">
                Let's Talk <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="font-display text-5xl text-azure-400">100%</div>
              <p className="mt-2 text-white/70">
                Of clients are still online a year later. Most have referred at
                least one new customer.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-3xl">7d</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/55 mt-1">
                    Avg. launch time
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl">$0</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/55 mt-1">
                    Hidden fees
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl">∞</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/55 mt-1">
                    Edits in month one
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl">5★</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/55 mt-1">
                    Average review
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <Section
        eyebrow="What you get"
        title="A site that does the heavy lifting."
        intro="Every package is engineered around four outcomes."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass-card p-7 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-azure-500/10 blur-2xl group-hover:bg-azure-500/20 transition-all" />
              <b.icon className="text-azure-400 relative" size={26} />
              <h3 className="mt-5 text-lg font-semibold relative">{b.title}</h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed relative">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title="Quick answers."
        intro="The most common things business owners ask before booking a call."
      >
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQ />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <VideoBackground overlayOpacity={0.78} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-display text-4xl md:text-6xl"
          >
            Ready to look like the{" "}
            <span className="text-azure-400 italic">real deal?</span>
          </motion.h2>
          <p className="mt-6 text-white/75 text-lg">
            Free quote. Honest timeline. No pressure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              See my work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-3 h-display text-4xl md:text-5xl">{title}</h2>
          {intro && (
            <p className="mt-4 text-white/65 text-lg leading-relaxed">
              {intro}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl text-white">
        <Counter to={value} />
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">
        {label}
      </div>
    </div>
  );
}
