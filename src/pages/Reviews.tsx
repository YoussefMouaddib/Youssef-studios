import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";

const reviews = [
  {
    name: "Mike R.",
    role: "Owner, Mike's Cuts Barbershop",
    stars: 5,
    package: "Website + Booking System",
    body: "I went from juggling phone calls between cuts to having clients book themselves while I work. Bookings are up around 40% in the first two months and the site looks honestly better than shops three times my size. Youssef texts back fast — that's not normal in this industry.",
    initials: "MR",
  },
  {
    name: "Carlos M.",
    role: "Owner, Citywide Junk Removal",
    stars: 5,
    package: "Basic Business Website",
    body: "Before, people would Google us and find nothing. Now we look like a real company. Calls picked up the first week the site went live. Worth way more than what I paid — I would have happily paid double.",
    initials: "CM",
  },
  {
    name: "David P.",
    role: "Owner, P&P Pest Control",
    stars: 5,
    package: "Website + AI Automation",
    body: "The automation package is the real magic. Missed leads used to die in my voicemail. Now they get an instant text, a follow-up the next day, and a review request after the job. I'm closing leads I didn't even know I had. Youssef genuinely cares about the result.",
    initials: "DP",
  },
];

export default function Reviews() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden">
        <VideoBackground overlayOpacity={0.82} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">Reviews</div>
            <h1 className="mt-3 h-display text-5xl md:text-6xl lg:text-7xl">
              Real owners. <span className="text-gold-400 italic">Real results.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
              The work speaks for itself — but the people who hired me say it
              louder.
            </p>

            {/* aggregate */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm text-white/80">5.0 average across all client work</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative glass-card p-8 flex flex-col"
              >
                <Quote className="text-gold-400/40 absolute top-6 right-6" size={36} />
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-5 text-white/85 leading-relaxed text-[15px]">
                  "{r.body}"
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center font-display text-ink-950 text-sm font-semibold">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="text-white/55 text-xs">{r.role}</div>
                  </div>
                </div>
                <div className="mt-4 inline-flex self-start items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gold-400/90 bg-gold-400/10 border border-gold-400/20 rounded-full px-3 py-1">
                  {r.package}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="glass-card p-10 md:p-14 text-center">
            <div className="eyebrow">Built on trust</div>
            <h2 className="mt-3 h-display text-3xl md:text-5xl">
              Premium isn't the price tag. <span className="text-gold-400 italic">It's the relationship.</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/70">
              Every client gets my personal cell. Every project gets a real
              launch checklist. Every site gets follow-through long after
              go-live.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              Become the next 5-star review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
