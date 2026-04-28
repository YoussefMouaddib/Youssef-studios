import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import VideoBackground from "../components/VideoBackground";

const works = [
  {
    name: "Mike's Cuts",
    industry: "Barbershop",
    blurb: "Booking-first site that turned 40% more walk-by traffic into scheduled cuts.",
    palette: "from-amber-500/20 via-amber-700/10 to-rose-900/20",
    accent: "text-amber-300",
    domain: "mikescuts.co",
    mock: BarberMock,
  },
  {
    name: "Citywide Junk Removal",
    industry: "Junk Removal",
    blurb: "Trust-building one-pager built for one-tap calls from mobile search.",
    palette: "from-emerald-500/20 via-emerald-700/10 to-sky-900/20",
    accent: "text-emerald-300",
    domain: "citywidejunk.com",
    mock: JunkMock,
  },
  {
    name: "P&P Pest Control",
    industry: "Exterminator",
    blurb: "Booking + AI follow-ups that recover missed leads on autopilot.",
    palette: "from-sky-500/20 via-indigo-700/10 to-violet-900/20",
    accent: "text-sky-300",
    domain: "ppexterminator.com",
    mock: ExterminatorMock,
  },
];

export default function Portfolio() {
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
            <div className="eyebrow">Portfolio</div>
            <h1 className="mt-3 h-display text-5xl md:text-6xl lg:text-7xl">
              Websites built to <span className="text-gold-400 italic">convert.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
              A look at recent work — three real industries, three different
              flavors, one common thread: they make the phone ring.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-24">
          {works.map((w, i) => {
            const Mock = w.mock;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-5 gap-10 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-2">
                  <div className={`eyebrow ${w.accent}`}>{w.industry}</div>
                  <h2 className="mt-3 h-display text-4xl md:text-5xl">{w.name}</h2>
                  <p className="mt-5 text-white/70 leading-relaxed text-lg max-w-md">
                    {w.blurb}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
                    <ExternalLink size={14} /> {w.domain}
                  </div>
                  <Link to="/contact" className="btn-ghost mt-8">
                    I want one like this <ArrowRight size={15} />
                  </Link>
                </div>
                <div className="lg:col-span-3">
                  <BrowserMockup palette={w.palette}>
                    <Mock />
                  </BrowserMockup>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="h-display text-4xl md:text-5xl">
            Built to <span className="text-gold-400 italic">convert visitors into customers.</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Every demo is hand-coded for one outcome — a phone call, a booking,
            or a filled-out lead form. Pretty is the bonus.
          </p>
          <Link to="/contact" className="btn-primary mt-10">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function BrowserMockup({
  palette,
  children,
}: {
  palette: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-soft bg-ink-900">
      <div className={`absolute inset-0 bg-gradient-to-br ${palette} pointer-events-none`} />
      <div className="relative">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-ink-900/80 backdrop-blur">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="ml-3 flex-1 h-6 rounded-md bg-white/5 border border-white/5" />
        </div>
        <div className="p-6 md:p-8 min-h-[320px]">{children}</div>
      </div>
    </div>
  );
}

function BarberMock() {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center">
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80">Est. 2019</div>
        <div className="mt-2 font-display text-3xl text-white leading-tight">
          Mike's Cuts <br /> <span className="italic text-amber-300">Sharp. Period.</span>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-300 text-ink-950 text-xs font-bold px-3 py-1.5">Book Now</span>
          <span className="inline-flex items-center rounded-full border border-white/15 text-xs px-3 py-1.5">Call</span>
        </div>
      </div>
      <div className="space-y-2">
        {["Tue 3:00 PM", "Tue 4:30 PM", "Wed 11:00 AM", "Wed 1:30 PM"].map((s) => (
          <div key={s} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <span className="text-white/80">{s}</span>
            <span className="text-amber-300 text-xs font-semibold">Open</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function JunkMock() {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/80">Same-day removal</div>
      <div className="mt-2 font-display text-3xl text-white leading-tight">
        We haul. <span className="italic text-emerald-300">You relax.</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
        {["Garage", "Office", "Yard"].map((c) => (
          <div key={c} className="rounded-lg border border-white/10 bg-white/5 py-3">
            <div className="font-display text-emerald-300 text-2xl">$199+</div>
            <div className="text-white/60 mt-1">{c}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-300 text-ink-950 text-sm font-bold px-4 py-2">
        Call (555) 010-0420
      </div>
    </div>
  );
}

function ExterminatorMock() {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center">
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-sky-300/80">Licensed · Bonded</div>
        <div className="mt-2 font-display text-3xl text-white leading-tight">
          P&P Pest <br /><span className="italic text-sky-300">Out for good.</span>
        </div>
        <ul className="mt-4 space-y-1.5 text-sm text-white/75">
          <li>· Roaches & rodents</li>
          <li>· Bed bug heat treatment</li>
          <li>· 6-month guarantee</li>
        </ul>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-xs text-white/55 uppercase tracking-widest">AI Receptionist</div>
        <div className="mt-3 space-y-2 text-sm">
          <div className="rounded-lg bg-ink-800 px-3 py-2">"Got roaches in the kitchen, can you come Tuesday?"</div>
          <div className="rounded-lg bg-sky-300/15 text-sky-200 px-3 py-2">"Booked you for Tue 10am. Confirmation sent."</div>
        </div>
      </div>
    </div>
  );
}
