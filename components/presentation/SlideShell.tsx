"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ParticleField } from "@/components/effects/ParticleField";

export function SlideShell({
  id,
  children,
  className,
  glow = "cyan",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "gold" | "violet";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: false });

  const glowColor =
    glow === "gold"
      ? "from-brand-gold/20"
      : glow === "violet"
        ? "from-brand-violet/20"
        : "from-brand-cyan/20";

  return (
    <section ref={ref} id={id} className={cn("slide", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-b via-transparent to-transparent", glowColor)} />
      <motion.div
        className="absolute inset-0 grid-bg opacity-40"
        animate={{ opacity: inView ? 0.5 : 0.2 }}
        transition={{ duration: 1 }}
      />
      <ParticleField count={32} />
      <motion.div
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] md:px-12 md:py-16 lg:py-20"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}
