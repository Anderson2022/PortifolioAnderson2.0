import { useEffect, useRef } from "react";

/* Soft, gentle floating data particles on the light background */
const CHARS = ["0", "1", "{", "}", ":", ";", "·", "▸", "□", "○", "∞", "≈"];
const COLORS = [
  "45, 48, 64",     // ink
  "72, 77, 88",     // graphite
  "118, 86, 181",   // plum
  "52, 127, 192",   // sky
  "200, 196, 190",  // muted beige
];

type P = { x: number; y: number; vx: number; vy: number; char: string; size: number; color: string; phase: number };

export default function AmbientCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0, h = 0, raf = 0;
    let particles: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = Math.max(20, Math.min(50, Math.floor(w / 30)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.15,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        size: 10 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 10;
        if (p.x > w + 20) p.x = -10;
        if (p.y < -20) p.y = h + 10;
        if (p.y > h + 20) p.y = -10;
        const a = 0.06 + Math.abs(Math.sin(t * 0.0007 + p.phase)) * 0.08;
        ctx.fillStyle = `rgba(${p.color}, ${a})`;
        ctx.font = `500 ${p.size}px "JetBrains Mono", monospace`;
        ctx.fillText(p.char, p.x, p.y);
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}
