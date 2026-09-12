import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Only enable spotlight on devices that support hover/pointer
    if (window.matchMedia('(hover: hover)').matches) {
      setMounted(true);
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.body.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-10 w-[550px] h-[550px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
      style={{
        left: springX,
        top: springY,
        opacity: visible ? 0.35 : 0,
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.08) 35%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
}
