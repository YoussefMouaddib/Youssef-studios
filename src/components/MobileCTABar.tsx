import { Link, useLocation } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileCTABar() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-ink-950/90 backdrop-blur-xl px-3 py-2.5 flex items-center gap-2 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <a
        href="tel:+10000000000"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold"
      >
        <Phone size={15} /> Call
      </a>
      <Link
        to="/contact"
        className="flex-[1.6] inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-ink-950 shadow-glow"
      >
        <MessageSquare size={15} /> Get a Free Quote
      </Link>
    </div>
  );
}
