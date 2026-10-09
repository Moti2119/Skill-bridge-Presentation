"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { GlobeScene } from "@/components/effects/GlobeScene";
import { Badge } from "@/components/ui/badge";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";
import { TEAM } from "@/lib/team";

export function Slide10Thanks() {
  return (
    <SlideShell id="thanks" className="justify-center" glow="cyan">
      <GlobeScene />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div variants={fadeUp} custom={0}>
          <motion.h2
            className="font-display text-[clamp(2.25rem,9vw+0.5rem,6rem)] font-extrabold md:text-8xl gradient-text"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Thank You
          </motion.h2>
        </motion.div>
        <motion.p variants={fadeUp} custom={1} className="mt-4 text-balance text-lg text-white/70 sm:text-xl md:mt-6 md:text-2xl">
          Building Fairer Opportunities Through AI
        </motion.p>
        <motion.div variants={fadeUp} custom={2} className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 md:mt-10 md:gap-3">
          <Badge className="text-base px-4 py-2">
            <Sparkles className="h-4 w-4" />
            {TEAM.groupName}
          </Badge>
          <Badge className="border-brand-violet/40 bg-brand-violet/10 text-brand-violet">
            <Bot className="h-4 w-4" />
            Cursor Agent SDK
          </Badge>
        </motion.div>
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mx-auto mt-6 max-w-md glass neon-border rounded-2xl p-4 sm:mt-8 sm:p-6 md:mt-10"
        >
          <p className="text-xs uppercase tracking-widest text-white/40">Group 9</p>
          <ul className="mt-3 space-y-1">
            {TEAM.members.map((m) => (
              <li key={m} className="text-white/80">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/45">{TEAM.institution}</p>
        </motion.div>
        <motion.p
          variants={fadeUp}
          custom={4}
          className="mt-12 text-sm text-cyan-300/60"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          SkillBridge Ethiopia · Hackathon 2026
        </motion.p>
      </motion.div>
    </SlideShell>
  );
}
