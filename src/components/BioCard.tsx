import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  AtSign, 
  EyeOff, 
  Gift, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Flame, 
  Smartphone, 
  Trophy, 
  Lock,
  Sparkles,
  HeartHandshake,
  Check,
  Copy
} from 'lucide-react';

interface BioItem {
  id: string;
  emoji: string;
  lucideIcon: React.ReactNode;
  label: string;
  value: string;
  copyValue?: string;
  glowColor: string;
}

export default function BioCard() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCardClick = async (item: BioItem) => {
    const textToCopy = item.copyValue || item.value;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const bioData: BioItem[] = [
    {
      id: 'bio-telegram-name',
      emoji: '✉️',
      lucideIcon: <Send className="w-4 h-4 text-cyan-400" />,
      label: 'Telegram Name',
      value: 'JAHID ❤️🔥',
      copyValue: 'JAHID',
      glowColor: 'hover:border-cyan-500/40',
    },
    {
      id: 'bio-username',
      emoji: '✨',
      lucideIcon: <AtSign className="w-4 h-4 text-purple-400" />,
      label: 'Username',
      value: '@DEVELOPER_JAHID_BHAI',
      copyValue: '@DEVELOPER_JAHID_BHAI',
      glowColor: 'hover:border-purple-500/40',
    },
    {
      id: 'bio-real-name',
      emoji: '💥',
      lucideIcon: <EyeOff className="w-4 h-4 text-pink-400" />,
      label: 'Real Name',
      value: 'Not Disclosed 🥲',
      copyValue: 'Not Disclosed',
      glowColor: 'hover:border-pink-500/40',
    },
    {
      id: 'bio-kind',
      emoji: '🎁',
      lucideIcon: <Gift className="w-4 h-4 text-emerald-400" />,
      label: 'Kind',
      value: 'Muslim',
      copyValue: 'Muslim',
      glowColor: 'hover:border-emerald-500/40',
    },
    {
      id: 'bio-birthday',
      emoji: '🎉',
      lucideIcon: <Calendar className="w-4 h-4 text-amber-400" />,
      label: 'Birthday',
      value: '25.06.20??',
      copyValue: '25/06/20**',
      glowColor: 'hover:border-amber-500/40',
    },
    {
      id: 'bio-age',
      emoji: '🎂',
      lucideIcon: <Lock className="w-4 h-4 text-purple-400" />,
      label: 'Age',
      value: 'Hidden / Not disclosed 🙃',
      copyValue: 'Hidden',
      glowColor: 'hover:border-purple-500/40',
    },
    {
      id: 'bio-from',
      emoji: '❤️🔥',
      lucideIcon: <MapPin className="w-4 h-4 text-rose-400" />,
      label: 'From',
      value: 'Bangladesh 🇧🇩',
      copyValue: 'Bangladesh',
      glowColor: 'hover:border-rose-500/40',
    },
    {
      id: 'bio-studying',
      emoji: '🧑‍🎓',
      lucideIcon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      label: 'Studying In',
      value: 'Class **',
      copyValue: 'Class **',
      glowColor: 'hover:border-blue-500/40',
    },
    {
      id: 'bio-hobby',
      emoji: '✨',
      lucideIcon: <Flame className="w-4 h-4 text-amber-400" />,
      label: 'Hobby',
      value: 'Earn Money Online 🔥',
      copyValue: 'Earn Money Online',
      glowColor: 'hover:border-amber-500/40',
    },
    {
      id: 'bio-favourite-app',
      emoji: '➡️',
      lucideIcon: <Smartphone className="w-4 h-4 text-cyan-400" />,
      label: 'Favourite App',
      value: 'Telegram 🥰',
      copyValue: 'Telegram',
      glowColor: 'hover:border-cyan-500/40',
    },
    {
      id: 'bio-favourite-sports',
      emoji: '🔥',
      lucideIcon: <Trophy className="w-4 h-4 text-emerald-400" />,
      label: 'Favourite Sports',
      value: 'Football ⚽',
      copyValue: 'Football',
      glowColor: 'hover:border-emerald-500/40',
    },
    {
      id: 'bio-best-friend',
      emoji: '😍',
      lucideIcon: <HeartHandshake className="w-4 h-4 text-rose-400" />,
      label: 'Best Friend',
      value: 'Secret 😍',
      copyValue: 'Secret',
      glowColor: 'hover:border-rose-500/40',
    },
  ];

  return (
    <motion.section
      id="bio-info-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-4"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Bio Information</span>
            </h2>
            <p className="text-xs text-slate-400">Tap any card to copy info</p>
          </div>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hidden sm:inline-block">
          12 Data Points
        </span>
      </div>

      {/* Grid of Bio Cards with Staggered animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bioData.map((item, index) => {
          const isCopied = copiedId === item.id;

          return (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              className={`group relative rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-white/5 ${item.glowColor} transition-all duration-300 shadow-md cursor-pointer select-none`}
            >
              <div className="relative h-full flex items-center justify-between p-3.5 sm:p-4 rounded-[15px] bg-[#0c1220]/90 backdrop-blur-md transition-all duration-300 group-hover:bg-[#11192e]">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <span className="text-lg select-none" role="img" aria-label={item.label}>
                      {item.emoji}
                    </span>
                  </motion.div>

                  {/* Text Content */}
                  <div className="min-w-0 flex flex-col">
                    <span className="text-xs font-medium text-slate-400 tracking-wide flex items-center gap-1.5">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-100 truncate group-hover:text-cyan-200 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Trailing copy indicator / status feedback */}
                <div className="shrink-0 flex items-center">
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.span
                        key="copied"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="dot"
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
