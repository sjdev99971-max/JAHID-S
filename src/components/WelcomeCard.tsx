import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Flame, Code2 } from 'lucide-react';

export default function WelcomeCard() {
  return (
    <motion.section
      id="welcome-card-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-3"
    >
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative group overflow-hidden rounded-3xl p-[1.5px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)]"
      >
        {/* Animated glowing border flare */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

        {/* Inner Glass Container */}
        <div className="relative rounded-[22px] bg-[#0c1222]/85 backdrop-blur-xl p-6 sm:p-8 text-center flex flex-col items-center">
          {/* Ambient Glow in background */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-36 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

          {/* Top Pill / Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-cyan-300 mb-4 tracking-wide shadow-sm cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:8s]" />
            <span>Developer Space</span>
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
          </motion.div>

          {/* Card Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 flex items-center justify-center gap-2">
            <span className="text-amber-400 text-2xl select-none" role="img" aria-label="thumbs up">👍</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Welcome To My Bio
            </span>
            <span className="text-amber-400 text-2xl select-none" role="img" aria-label="thumbs up">👍</span>
          </h2>

          {/* Animated Gradient Welcome Greeting */}
          <div className="max-w-md space-y-2 mt-1">
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent animate-pulse-slow flex items-center justify-center gap-1.5 flex-wrap">
              <span>Hey! I&apos;m JAHID</span>
              <span className="inline-flex items-center gap-1 text-base">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline animate-pulse" />
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500 inline animate-bounce [animation-duration:2s]" />
              </span>
            </p>

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
              Welcome to my little corner of the internet.
            </p>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-3 left-4 text-xs font-mono text-cyan-500/40 select-none hidden sm:block">
            &lt;bio&gt;
          </div>
          <div className="absolute bottom-3 right-4 text-xs font-mono text-purple-500/40 select-none hidden sm:block">
            &lt;/bio&gt;
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
