import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="hidden md:block fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-full bg-azure-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow hover:bg-azure-400 transition-all hover:scale-105"
      >
        <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
        Get a Free Quote
      </Link>
    </motion.div>
  );
}
