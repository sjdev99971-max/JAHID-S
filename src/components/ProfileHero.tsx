import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Send, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

export default function ProfileHero() {
  const [copied, setCopied] = useState(false);
  const username = '@DEVELOPER_JAHID_BHAI';
  const telegramUrl = 'https://t.me/DEVELOPER_JAHID_BHAI';

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(username);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = username;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy username:', err);
    }
  };

  return (
    <motion.section
      id="hero-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center pt-8 pb-4 px-4"
    >
      {/* Glowing Profile Avatar Container with smooth hover & float */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="relative mb-6 group cursor-pointer"
      >
        {/* Animated outer glow rings */}
        <div className="absolute -inset-2.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse transition duration-700" />
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-spin [animation-duration:10s] opacity-80" />

        {/* Profile Avatar Frame with 3D feel */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-[#090d1a] flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/30" />

            {/* Terminal decorative grid inside avatar */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

            {/* Letter J Logo with glowing text */}
            <span className="relative font-mono font-extrabold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-purple-300 drop-shadow-[0_0_18px_rgba(6,182,212,0.85)] select-none">
              J
            </span>

            {/* Small Developer Badge in avatar */}
            <div className="absolute bottom-1 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5 text-cyan-400" />
              <span className="text-[9px] font-mono text-cyan-300 uppercase tracking-widest font-bold">DEV</span>
            </div>
          </div>
        </motion.div>

        {/* Status Badge: ONLINE */}
        <div
          id="online-status-badge"
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0a101f]/95 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="text-[11px] font-bold tracking-wider text-emerald-300 font-mono">
            ONLINE
          </span>
        </div>
      </motion.div>

      {/* Name and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-2 space-y-2 max-w-lg"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
          <span>JAHID</span>
          <span className="text-2xl sm:text-3xl filter drop-shadow">🇧🇩</span>
        </h1>

        <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 font-medium tracking-wide">
          Web Developer &amp; Digital Creator
        </p>
      </motion.div>

      {/* Username with Animated Copy Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-5 flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-2 p-1.5 pl-4 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 shadow-lg group">
          <span className="font-mono text-xs sm:text-sm text-cyan-300/90 select-all tracking-tight">
            {username}
          </span>
          <motion.button
            id="copy-username-button"
            type="button"
            onClick={handleCopy}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            aria-label={copied ? 'Username copied' : 'Copy username to clipboard'}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
              copied
                ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.45)]'
                : 'bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/30'
            }`}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  className="flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">✓ Copied!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  className="flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Telegram CTA Button with Ripple/Scale motion */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-6 w-full max-w-xs sm:max-w-sm"
      >
        <motion.a
          id="telegram-hero-cta"
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className="group relative flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)] transition-shadow duration-300 overflow-hidden"
        >
          {/* Shimmer light sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          <Send className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span>💬 Contact JAHID</span>
          <Sparkles className="w-4 h-4 text-cyan-200 opacity-80 animate-pulse" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
