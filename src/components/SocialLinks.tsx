import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Github, Globe, ExternalLink, Clock, Sparkles } from 'lucide-react';

export default function SocialLinks() {
  const telegramUrl = 'https://t.me/DEVELOPER_JAHID_BHAI';
  const [inactiveNotice, setInactiveNotice] = useState<string | null>(null);

  const links = [
    {
      id: 'social-telegram',
      title: 'Telegram',
      handle: '@DEVELOPER_JAHID_BHAI',
      url: telegramUrl,
      active: true,
      badge: 'Active & Online',
      icon: <Send className="w-5 h-5 text-cyan-400" />,
      glowColor: 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      bgGradient: 'from-cyan-500/15 via-blue-500/10 to-transparent',
    },
    {
      id: 'social-github',
      title: 'GitHub',
      handle: 'Developer Profile',
      url: null,
      active: false,
      badge: 'Coming Soon',
      icon: <Github className="w-5 h-5 text-slate-400" />,
      glowColor: 'border-white/5 opacity-75',
      bgGradient: 'from-white/[0.02] to-transparent',
    },
    {
      id: 'social-website',
      title: 'Website',
      handle: 'Official Portfolio',
      url: null,
      active: false,
      badge: 'Coming Soon',
      icon: <Globe className="w-5 h-5 text-slate-400" />,
      glowColor: 'border-white/5 opacity-75',
      bgGradient: 'from-white/[0.02] to-transparent',
    },
  ];

  const handleInactiveClick = (title: string) => {
    setInactiveNotice(`${title} is coming soon! Check Telegram for updates.`);
    setTimeout(() => setInactiveNotice(null), 2500);
  };

  return (
    <motion.section
      id="social-links-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>🌐 Find Me</span>
            </h2>
            <p className="text-xs text-slate-400">Connect with JAHID across digital channels</p>
          </div>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400">
          Official Links
        </span>
      </div>

      {/* Inactive Notice Toast */}
      <AnimatePresence>
        {inactiveNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-3 p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs text-center font-mono"
          >
            ⚡ {inactiveNotice}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {links.map((link, index) => {
          if (link.active && link.url) {
            return (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className={`group relative flex flex-col justify-between p-4 rounded-2xl bg-[#0c1220]/90 backdrop-blur-md border border-white/10 ${link.glowColor} transition-all duration-300 cursor-pointer overflow-hidden shadow-md`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 transition-all duration-300"
                    >
                      {link.icon}
                    </motion.div>

                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {link.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                    <span>{link.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                    {link.handle}
                  </p>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-medium">
                  <span>Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </motion.a>
            );
          }

          // Inactive Link Card
          return (
            <motion.div
              key={link.id}
              id={link.id}
              onClick={() => handleInactiveClick(link.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col justify-between p-4 rounded-2xl bg-[#0a0f1c]/80 backdrop-blur-md border ${link.glowColor} transition-all duration-300 cursor-pointer`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.bgGradient}`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    {link.icon}
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/5 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {link.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-300 flex items-center gap-1.5">
                  <span>{link.title}</span>
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5 truncate">
                  {link.handle}
                </p>
              </div>

              <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] font-mono">In Preparation</span>
                <span className="text-[10px] text-cyan-400/80">Tap for info</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
