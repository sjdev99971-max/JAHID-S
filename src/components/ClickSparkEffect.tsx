import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
}

export default function ClickSparkEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const colors = ['#00f0ff', '#a855f7', '#ec4899', '#3b82f6', '#10b981', '#fbbf24'];

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const clientX = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
      const clientY = 'clientY' in e ? e.clientY : e.touches[0]?.clientY;

      if (clientX === undefined || clientY === undefined) return;

      const newSparks: Spark[] = [];
      const count = 10;
      const now = Date.now();

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const distance = Math.random() * 45 + 25;
        const color = colors[Math.floor(Math.random() * colors.length)];
        newSparks.push({
          id: now + i + Math.random(),
          x: clientX,
          y: clientY,
          angle,
          distance,
          size: Math.random() * 4 + 2,
          color,
        });
      }

      setSparks((prev) => [...prev.slice(-30), ...newSparks]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
      }, 700);
    };

    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {sparks.map((spark) => {
          const targetX = Math.cos(spark.angle) * spark.distance;
          const targetY = Math.sin(spark.angle) * spark.distance;

          return (
            <motion.span
              key={spark.id}
              initial={{
                x: spark.x,
                y: spark.y,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: spark.x + targetX,
                y: spark.y + targetY,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: spark.size,
                height: spark.size,
                borderRadius: '50%',
                backgroundColor: spark.color,
                boxShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
