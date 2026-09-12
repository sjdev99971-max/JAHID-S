import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Server, Code, FileCode, Database, Palette, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  glowClass: string;
}

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const techList: TechItem[] = [
    {
      id: 'tech-nextjs',
      name: 'NEXT.JS',
      description: 'Full-Stack React Framework & SSR',
      category: 'Framework',
      icon: <Layers className="w-6 h-6 text-white" />,
      accentColor: 'text-white',
      borderColor: 'group-hover:border-white/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(255,255,255,0.25)]',
    },
    {
      id: 'tech-nodejs',
      name: 'NODE.JS',
      description: 'V8 Server Runtime & Microservices',
      category: 'Backend',
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      accentColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(16,185,129,0.35)]',
    },
    {
      id: 'tech-php',
      name: 'PHP',
      description: 'Server-Side Web & Dynamic Scripting',
      category: 'Backend',
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      accentColor: 'text-indigo-400',
      borderColor: 'group-hover:border-indigo-500/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(99,102,241,0.35)]',
    },
    {
      id: 'tech-react',
      name: 'REACT',
      description: 'Component Architecture & Virtual DOM',
      category: 'UI Library',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      accentColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-400/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(6,182,212,0.35)]',
    },
    {
      id: 'tech-javascript',
      name: 'JAVASCRIPT',
      description: 'Modern ES6+, Asynchronous Web',
      category: 'Language',
      icon: <FileCode className="w-6 h-6 text-amber-400" />,
      accentColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-400/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(251,191,36,0.35)]',
    },
    {
      id: 'tech-typescript',
      name: 'TYPESCRIPT',
      description: 'Strict Static Typing & Tooling',
      category: 'Language',
      icon: <FileCode className="w-6 h-6 text-blue-400" />,
      accentColor: 'text-blue-400',
      borderColor: 'group-hover:border-blue-400/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(59,130,246,0.35)]',
    },
    {
      id: 'tech-mysql',
      name: 'MYSQL',
      description: 'Relational Database Management',
      category: 'Database',
      icon: <Database className="w-6 h-6 text-sky-400" />,
      accentColor: 'text-sky-400',
      borderColor: 'group-hover:border-sky-400/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]',
    },
    {
      id: 'tech-html',
      name: 'HTML',
      description: 'Semantic HTML5 Document Structure',
      category: 'Markup',
      icon: <Code className="w-6 h-6 text-orange-400" />,
      accentColor: 'text-orange-400',
      borderColor: 'group-hover:border-orange-500/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(249,115,22,0.35)]',
    },
    {
      id: 'tech-css',
      name: 'CSS',
      description: 'Modern CSS3, Grid & Responsive Layouts',
      category: 'Styling',
      icon: <Palette className="w-6 h-6 text-blue-400" />,
      accentColor: 'text-blue-400',
      borderColor: 'group-hover:border-blue-400/60',
      glowClass: 'group-hover:shadow-[0_0_28px_rgba(96,165,250,0.35)]',
    },
  ];

  const handleTechClick = (id: string) => {
    setActiveTech(activeTech === id ? null : id);
  };

  return (
    <motion.section
      id="tech-stack-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-4"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Primary Tech Stack</span>
            </h2>
            <p className="text-xs text-slate-400">Core architecture &amp; programming ecosystem</p>
          </div>
        </div>

        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full hidden sm:inline-block">
          9 Core Stacks
        </span>
      </div>

      {/* Modern High-End Grid with Smooth In-View Stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {techList.map((item, index) => {
          const isSelected = activeTech === item.id;

          return (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleTechClick(item.id)}
              className={`group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-white/0 ${item.borderColor} transition-all duration-300 shadow-md ${item.glowClass} cursor-pointer select-none`}
            >
              <div className={`relative h-full flex flex-col justify-between p-4 rounded-[15px] ${isSelected ? 'bg-[#121a30]' : 'bg-[#0b101f]/90'} backdrop-blur-md group-hover:bg-[#10182b] transition-all duration-300`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-all shadow-inner"
                    >
                      {item.icon}
                    </motion.div>

                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/5 group-hover:text-white transition-colors">
                      {item.category}
                    </span>
                  </div>

                  <h3 className={`font-mono font-extrabold text-base tracking-wider ${item.accentColor} mb-1 flex items-center justify-between`}>
                    <span>{item.name}</span>
                    {isSelected && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </motion.span>
                    )}
                  </h3>

                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-cyan-400/90 font-medium">● Production</span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-slate-400 group-hover:text-cyan-300">
                    Jahid Bio &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
