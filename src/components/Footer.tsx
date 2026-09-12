import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowUp, Star, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      id="footer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full mt-8 pt-8 pb-24 sm:pb-20 px-4 border-t border-white/5 relative z-10"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-4">
        
        {/* Back to top button with spring feedback */}
        <motion.button
          id="back-to-top-button"
          type="button"
          onClick={scrollToTop}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll back to top"
          className="group p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>

        {/* Thank You Greeting */}
        <div className="space-y-1">
          <p className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-2 flex-wrap">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Thank You For Reading My Bio</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-spin [animation-duration:8s]" />
          </p>

          <p className="text-sm text-slate-400 flex items-center justify-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>by <strong className="text-cyan-300 font-semibold">JAHID</strong></span>
          </p>
        </div>

        {/* Copyright & Location Tag */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500 font-mono">
          <span>&copy; 2026 JAHID. All Rights Reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1">
            <span>Crafted from Bangladesh</span>
            <span>🇧🇩</span>
          </span>
        </div>

      </div>
    </motion.footer>
  );
}
