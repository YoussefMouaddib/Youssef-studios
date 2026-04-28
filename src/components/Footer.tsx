import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-azure-500 to-azure-600 flex items-center justify-center font-display text-ink-950 text-lg font-semibold">
              Y
            </div>
            <div className="font-display text-lg">
              Youssef <span className="text-azure-400">Studio</span>
            </div>
          </div>
          <p className="mt-5 text-white/60 text-sm leading-relaxed">
            Premium websites, booking systems, and AI automations engineered to
            turn local visitors into loyal customers.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-azure-400 text-sm font-medium hover:text-azure-300"
          >
            Start your project <ArrowUpRight size={16} />
          </Link>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-white/70 hover:text-white">Home</Link></li>
            <li><Link to="/pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
            <li><Link to="/portfolio" className="text-white/70 hover:text-white">Portfolio</Link></li>
            <li><Link to="/reviews" className="text-white/70 hover:text-white">Reviews</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Get in Touch</div>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
                <Phone size={14} className="text-azure-400" /> Call or text
              </a>
            </li>
            <li>
              <a href="mailto:hello@youssef.studio" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
                <Mail size={14} className="text-azure-400" /> hello@youssef.studio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Youssef Studio. All rights reserved.</div>
          <div>Designed & built in-house. Premium results, plain English.</div>
        </div>
      </div>
    </footer>
  );
}
