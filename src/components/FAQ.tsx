import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const items = [
  {
    q: "How long does it take to launch?",
    a: "Most basic websites are live in 5–7 days. Booking and AI automation packages typically launch within 10–14 days, depending on how fast you can get me your content and approvals.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. 100%. You own the code, the domain, and every asset. No platform lock-in, no monthly hostage situation.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Free unlimited edits in the first 30 days. After that, small tweaks are on the house — bigger changes are billed transparently and only after approval.",
  },
  {
    q: "Will it work on mobile?",
    a: "Every site is mobile-first. Over 70% of local business traffic is mobile, so it has to feel right in your customer's hand before anything else.",
  },
  {
    q: "How do payments work?",
    a: "50% to start, 50% on launch. No surprise fees, no recurring nonsense.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`glass-card overflow-hidden transition-colors ${
              isOpen ? "border-azure-500/30" : ""
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-medium text-base md:text-lg">{it.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border ${
                  isOpen ? "border-azure-500/50 bg-azure-500/10 text-azure-400" : "border-white/10 text-white/60"
                }`}
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
