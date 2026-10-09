"use client";

import { motion } from "framer-motion";
import { Accessibility, Heart, Rocket, Users, Zap } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const metrics = [
  { value: "4", label: "Languages supported", icon: Accessibility },
  { value: "2", label: "Sides of the market connected", icon: Users },
  { value: "100%", label: "AI-assisted workflows", icon: Zap },
  { value: "∞", label: "Youth potential unlocked", icon: Heart },
];

const pillars = [
  "Accessibility for graduates outside elite networks",
  "Fair hiring standards for Ethiopian employers",
  "Real employment pathways — not just certificates",
  "AI inclusion that respects local languages",
];

export function Slide08Impact() {
  return (
    <SlideShell id="impact" glow="gold">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-brand-gold">
          Impact
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-6xl">
          Building fairer futures for{" "}
          <span className="gradient-text">Ethiopian youth</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg text-white/65">
          SkillBridge closes the gap between talent and opportunity — with AI that speaks your language
          and hiring tools that reward real skills.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="glass neon-border rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <m.icon className="h-7 w-7 text-brand-gold mx-auto mb-3" />
              <p className="font-display text-4xl font-bold">{m.value}</p>
              <p className="mt-2 text-xs text-white/55 uppercase tracking-wide">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="mt-12 grid gap-4 md:grid-cols-2">
          <motion.ul className="space-y-3">
            {pillars.map((p, i) => (
              <motion.li
                key={p}
                className="flex items-start gap-3 glass rounded-xl px-4 py-3 text-white/80"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Rocket className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                {p}
              </motion.li>
            ))}
          </motion.ul>
          <motion.blockquote
            className="glass neon-border rounded-2xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-display font-semibold leading-snug text-white/90">
              Every graduate deserves a fair shot — not a system that filters them out before the interview.
            </p>
            <p className="mt-4 text-sm text-brand-gold">— SkillBridge Ethiopia mission</p>
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
