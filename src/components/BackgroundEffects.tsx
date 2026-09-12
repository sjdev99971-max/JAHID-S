import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system
    const particleCount = Math.min(Math.floor(window.innerWidth / 30), 45);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      phase: number;
    }> = [];

    const colors = ['#00f0ff', '#a855f7', '#ec4899', '#3b82f6'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(time + p.phase) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, currentAlpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* Floating Glowing Orbs / Ambient Blobs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[110px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-pink-500/12 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-blue-600/12 rounded-full blur-[110px] animate-pulse-slow" style={{ animationDelay: '6s' }} />

      {/* Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,13,0.7)_80%,#05070d_100%)]" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-75" />
    </div>
  );
}
