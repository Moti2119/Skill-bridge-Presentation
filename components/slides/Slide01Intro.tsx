"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { GlobeScene } from "@/components/effects/GlobeScene";
import { Badge } from "@/components/ui/badge";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";
import { TEAM } from "@/lib/team";

export function Slide01Intro() {
  return (
    <SlideShell id="intro" className="justify-center">
      <GlobeScene />
      <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
        <motion.div variants={fadeUp} custom={0}>
          <Badge>
            <Bot className="h-3.5 w-3.5" />
            Powered by Cursor Agent SDK
          </Badge>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-display mt-8 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{TEAM.groupName}</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="mt-6 text-xl text-white/70 md:text-2xl">
          {TEAM.tagline}
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mx-auto mt-12 max-w-lg glass neon-border rounded-2xl p-6 text-left"
        >
          <p className="text-xs uppercase tracking-widest text-cyan-300/80">Team</p>
          <p className="mt-1 font-display text-lg font-semibold">{TEAM.groupName}</p>
          <p className="mt-1 text-sm text-white/50">{TEAM.institution}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {TEAM.members.map((m) => (
              <li key={m} className="flex items-center gap-2 text-sm text-white/80">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.p variants={fadeUp} custom={4} className="mt-10 text-sm text-white/40 animate-pulse-glow">
          Scroll to explore ↓
        </motion.p>
      </motion.div>
    </SlideShell>
  );
}
