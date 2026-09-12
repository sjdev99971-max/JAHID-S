import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-black/20 backdrop-blur-[1px]">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />
      {/* Subtle bottom neon glow */}
      <motion.div
        className="h-[6px] -mt-[3px] bg-cyan-400/40 blur-[3px] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
