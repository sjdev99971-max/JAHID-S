import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Layers, 
  Server, 
  Code, 
  FileCode, 
  Palette, 
  Database, 
  GitBranch, 
  FolderGit2, 
  Terminal, 
  Globe, 
  Cpu,
  Workflow,
  Sparkles,
  Check
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools' | 'Core';
  level: string;
  icon: React.ReactNode;
  glow: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillsList: Skill[] = [
    { name: 'Next.js', category: 'Frontend', level: 'Production Ready', icon: <Layers className="w-4 h-4 text-cyan-400" />, glow: 'from-cyan-500/20 to-blue-500/20' },
    { name: 'React.js', category: 'Frontend', level: 'Core Specialty', icon: <Cpu className="w-4 h-4 text-cyan-300" />, glow: 'from-cyan-400/20 to-teal-500/20' },
    { name: 'Node.js', category: 'Backend', level: 'Server Runtime', icon: <Server className="w-4 h-4 text-emerald-400" />, glow: 'from-emerald-500/20 to-green-500/20' },
    { name: 'PHP', category: 'Backend', level: 'Dynamic Web', icon: <Code className="w-4 h-4 text-indigo-400" />, glow: 'from-indigo-500/20 to-purple-500/20' },
    { name: 'TypeScript', category: 'Core', level: 'Type-Safe', icon: <FileCode className="w-4 h-4 text-blue-400" />, glow: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'JavaScript', category: 'Core', level: 'Modern ES6+', icon: <FileCode className="w-4 h-4 text-amber-400" />, glow: 'from-amber-500/20 to-yellow-500/20' },
    { name: 'HTML', category: 'Frontend', level: 'Semantic Markup', icon: <Code className="w-4 h-4 text-orange-400" />, glow: 'from-orange-500/20 to-rose-500/20' },
    { name: 'CSS', category: 'Frontend', level: 'Responsive UI', icon: <Palette className="w-4 h-4 text-sky-400" />, glow: 'from-sky-500/20 to-blue-500/20' },
    { name: 'MySQL', category: 'Database', level: 'Relational DB', icon: <Database className="w-4 h-4 text-cyan-400" />, glow: 'from-cyan-600/20 to-blue-600/20' },
    { name: 'REST API', category: 'Backend', level: 'API Architecture', icon: <Workflow className="w-4 h-4 text-purple-400" />, glow: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Git', category: 'DevOps & Tools', level: 'Version Control', icon: <GitBranch className="w-4 h-4 text-rose-400" />, glow: 'from-rose-500/20 to-orange-500/20' },
    { name: 'GitHub', category: 'DevOps & Tools', level: 'Repo Management', icon: <FolderGit2 className="w-4 h-4 text-slate-300" />, glow: 'from-slate-400/20 to-zinc-500/20' },
    { name: 'cPanel', category: 'DevOps & Tools', level: 'Server Hosting', icon: <Server className="w-4 h-4 text-amber-500" />, glow: 'from-amber-500/20 to-orange-600/20' },
    { name: 'Linux', category: 'DevOps & Tools', level: 'Bash & SysAdmin', icon: <Terminal className="w-4 h-4 text-emerald-400" />, glow: 'from-emerald-600/20 to-cyan-600/20' },
    { name: 'Web Development', category: 'Core', level: 'Full-Stack Delivery', icon: <Globe className="w-4 h-4 text-cyan-400" />, glow: 'from-cyan-500/20 to-purple-500/20' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skillsList 
    : skillsList.filter(s => s.category === activeCategory || (activeCategory === 'Frontend' && s.category === 'Core'));

  const handleSkillClick = (name: string) => {
    setSelectedSkill(name);
    setTimeout(() => setSelectedSkill(null), 2000);
  };

  return (
    <motion.section
      id="skills-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 py-4"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Zap className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>⚡ My Skills</span>
            </h2>
            <p className="text-xs text-slate-400">Technical proficiencies &amp; developer tools</p>
          </div>
        </div>

        {/* Animated Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                className={`relative text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skillsCategoryPill"
                    className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Skills Badges Grid with Layout Transition */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2.5">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => {
            const isSelected = selectedSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSkillClick(skill.name)}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-white/0 hover:from-cyan-500/50 hover:via-purple-500/40 hover:to-transparent transition-all duration-300 shadow-sm cursor-pointer select-none"
              >
                <div className="relative h-full flex flex-col justify-between p-3.5 rounded-[15px] bg-[#0c1222]/85 backdrop-blur-md group-hover:bg-[#11192e] transition-all duration-300">
                  {/* Subtle radial corner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.glow} opacity-0 group-hover:opacity-100 rounded-[15px] transition-opacity duration-300 pointer-events-none`} />

                  <div className="relative z-10 flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                      {skill.icon}
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 group-hover:text-cyan-300 border border-white/5 transition-colors">
                      {skill.category}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-0.5">
                    <div className="font-bold text-sm text-slate-100 group-hover:text-white flex items-center justify-between">
                      <span>{skill.name}</span>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5"
                        >
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </motion.span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/80 inline-block" />
                      <span>{skill.level}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
