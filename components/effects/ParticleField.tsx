"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/** Deterministic 0–1 value so SSR and client hydration match */
function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function createParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seeded(i * 3 + 1) * 100,
    y: seeded(i * 3 + 2) * 100,
    size: 1 + seeded(i * 3 + 3) * 3,
    duration: 8 + seeded(i * 7 + 4) * 12,
    delay: seeded(i * 7 + 5) * 5,
  }));
}

export function ParticleField({ count = 48 }: { count?: number }) {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

