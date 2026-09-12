import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ExternalLink, Sparkles, ShieldCheck, Rocket } from 'lucide-react';

export default function OwnerCard() {
  const xovaTelegramUrl = 'https://t.me/XovaSolutions';

  return (
    <motion.section
      id="owner-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-4"
    >
      {/* Prominent Golden & Cyber Glass Frame */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative group rounded-3xl p-[2px] bg-gradient-to-r from-amber-400 via-purple-500 to-cyan-400 shadow-[0_0_40px_rgba(245,158,11,0.18)] hover:shadow-[0_0_55px_rgba(6,182,212,0.3)] transition-all duration-500"
      >
        {/* Animated Glow Halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-purple-600 to-cyan-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-70 transition duration-700 pointer-events-none" />

        {/* Card Body */}
        <div className="relative rounded-[22px] bg-[#0c1326]/95 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">
          {/* Subtle background cyber grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

          {/* Glowing gradient flares */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            
            {/* Left Content Area */}
            <div className="flex flex-col items-center md:items-start space-y-3 max-w-lg">
              
              {/* Top Badge: 🏆 Owner Of */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-default"
              >
                <Trophy className="w-4 h-4 text-amber-400 animate-bounce [animation-duration:2.5s]" />
                <span>🏆 Owner Of</span>
              </motion.div>

              {/* Company Title */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  <span className="text-amber-400">⭐</span>
                  <span className="bg-gradient-to-r from-white via-amber-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
                    Xova Solutions
                  </span>
                  <span className="text-orange-500">🔥</span>
                  <span title="Verified Enterprise" className="inline-flex">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  </span>
                </h3>

                <p className="text-sm text-slate-300/90 max-w-md leading-relaxed">
                  Digital solutions, professional web development, Telegram automation, and tech innovation spearheaded by JAHID.
                </p>
              </div>

              {/* Highlights pills */}
              <div className="flex items-center justify-center md:justify-start gap-2 pt-1 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-cyan-300 border border-white/10">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Telegram Venture
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-purple-300 border border-white/10">
                  ⚡ Premium Services
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-emerald-300 border border-white/10">
                  ● Active Development
                </span>
              </div>
            </div>

            {/* Right Action Area: Large Button */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
              <motion.a
                id="visit-xova-solutions-btn"
                href={xovaTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className="group/btn relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 text-white font-bold text-base shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.65)] transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                <Rocket className="w-5 h-5 text-amber-100 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                <span className="tracking-wide">🚀 Visit Xova Solutions</span>
                <ExternalLink className="w-4 h-4 text-amber-200" />
              </motion.a>

              <span className="text-[11px] font-mono text-slate-400 mt-2">
                Official Telegram Channel: @XovaSolutions
              </span>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
