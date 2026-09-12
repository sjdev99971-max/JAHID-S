import React, { useState } from 'react';
import { motion } from 'motion/react';
import BackgroundEffects from './components/BackgroundEffects';
import ProfileHero from './components/ProfileHero';
import WelcomeCard from './components/WelcomeCard';
import BioCard from './components/BioCard';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import OwnerCard from './components/OwnerCard';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import MouseSpotlight from './components/MouseSpotlight';
import ClickSparkEffect from './components/ClickSparkEffect';
import FloatingNav from './components/FloatingNav';
import DeveloperTerminalModal from './components/DeveloperTerminalModal';
import { Send, Terminal } from 'lucide-react';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const telegramUrl = 'https://t.me/DEVELOPER_JAHID_BHAI';

  return (
    <div className="relative min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Real-time Scrolling Neon Progress Indicator */}
      <ScrollProgressBar />

      {/* Interactive Cursor Spotlight (desktop) */}
      <MouseSpotlight />

      {/* Cyber Click & Tap Particle Burst Effect */}
      <ClickSparkEffect />

      {/* Background Animated Canvas & Ambient Glows */}
      <BackgroundEffects />

      {/* Top Sticky Header with Glass Blur */}
      <header className="sticky top-0 z-40 w-full px-4 py-3 backdrop-blur-xl bg-[#05070d]/75 border-b border-white/5 transition-all">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          
          {/* Brand Identity with Micro-Interactions */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-[0_0_12px_rgba(6,182,212,0.4)]">
              <div className="w-full h-full rounded-[11px] bg-[#090e1c] flex items-center justify-center font-mono font-bold text-sm text-cyan-300">
                J
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-wide flex items-center gap-1">
                JAHID <span className="text-xs">❤️🔥</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 leading-none">
                Web Developer
              </span>
            </div>
          </motion.div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available</span>
            </div>

            {/* Interactive Shell / Terminal Button */}
            <motion.button
              type="button"
              onClick={() => setIsTerminalOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              title="Open Developer Shell"
              aria-label="Open developer terminal"
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Shell</span>
            </motion.button>

            {/* Telegram Direct CTA */}
            <motion.a
              id="header-telegram-cta"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Direct Telegram message to JAHID"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </motion.a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-3xl mx-auto px-2 sm:px-4 py-4 space-y-6">
        {/* Hero Profile Section */}
        <ProfileHero />

        {/* Welcome Glass Card */}
        <WelcomeCard />

        {/* Owner of Xova Solutions Feature Card */}
        <OwnerCard />

        {/* Detailed Bio Information Cards */}
        <BioCard />

        {/* Skills Badges with Category Filtering */}
        <Skills />

        {/* Visual Glowing Tech Stack */}
        <TechStack />

        {/* Social / Find Me Section */}
        <SocialLinks />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Bottom Quick Dock & Radial Scroll Indicator */}
      <FloatingNav onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Developer Shell Modal */}
      <DeveloperTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
