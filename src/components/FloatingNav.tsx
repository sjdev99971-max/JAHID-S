import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUp, 
  Terminal, 
  User, 
  Award, 
  Zap, 
  Layers, 
  Send 
} from 'lucide-react';

interface FloatingNavProps {
  onOpenTerminal: () => void;
}

export default function FloatingNav({ onOpenTerminal }: FloatingNavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      setShowScrollTop(window.scrollY > 280);

      // Simple active section detection
      const sections = ['hero-section', 'welcome-card-section', 'owner-section', 'bio-info-section', 'skills-section', 'tech-stack-section', 'social-links-section'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'hero-section', label: 'Bio', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'owner-section', label: 'Owner', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'skills-section', label: 'Skills', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'tech-stack-section', label: 'Stack', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'social-links-section', label: 'Links', icon: <Send className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 max-w-[95vw] px-2 pointer-events-auto">
      {/* Floating Bottom Nav Capsule */}
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        aria-label="Quick jump navigation"
        className="flex items-center gap-1 p-1.5 rounded-full bg-[#0a1020]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="floatingNavActive"
                  className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/40"
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                />
              )}
              <span className="relative z-10">{item.icon}</span>
              <span className="relative z-10 hidden sm:inline">{item.label}</span>
            </motion.button>
          );
        })}

        {/* Terminal Quick Button */}
        <div className="h-4 w-[1px] bg-white/10 mx-1" />

        <motion.button
          type="button"
          onClick={onOpenTerminal}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          title="Open Developer Console"
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 text-xs font-mono font-semibold cursor-pointer shadow-sm"
        >
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden sm:inline">Shell</span>
        </motion.button>
      </motion.nav>

      {/* Floating Scroll to Top with Radial Progress */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="relative w-10 h-10 rounded-full bg-[#0a1020]/95 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center text-cyan-300 cursor-pointer overflow-hidden group shrink-0"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2.5"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeDasharray="94.25"
                strokeDashoffset={94.25 - (94.25 * scrollProgress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>

            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
