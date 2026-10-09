"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Languages, ScrollText, TrendingDown } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const stats = [
  { value: "3M+", label: "Graduates seeking work", icon: TrendingDown },
  { value: "19%", label: "Youth unemployment", icon: AlertTriangle },
  { value: "4", label: "Languages underserved", icon: Languages },
];

const pains = [
  "Certificates lose relevance after unemployment",
  "Employers gate roles with unfair requirements",
  "Talent is everywhere — opportunity is not",
];

export function Slide02Problem() {
  return (
    <SlideShell id="problem" glow="gold">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium uppercase tracking-widest text-brand-gold">
          The Problem
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
          Ethiopian graduates have talent.
          <span className="block text-white/50">The system doesn&apos;t see it.</span>
        </motion.h2>
        <motion.blockquote
          variants={fadeUp}
          custom={2}
          className="mt-8 border-l-4 border-brand-gold pl-6 text-2xl font-medium italic text-brand-gold/90 md:text-3xl"
        >
          &ldquo;Talent is everywhere. Opportunity is not.&rdquo;
        </motion.blockquote>
        <motion.div variants={fadeUp} custom={3} className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <motion.div key={s.label} className="glass neon-border rounded-2xl p-6">
              <s.icon className="h-8 w-8 text-brand-gold mb-4" />
              <p className="font-display text-4xl font-bold">{s.value}</p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.ul variants={fadeUp} custom={4} className="mt-10 space-y-3">
          {pains.map((p) => (
            <li key={p} className="flex items-center gap-3 text-lg text-white/75">
              <ScrollText className="h-5 w-5 text-brand-gold shrink-0" />
              {p}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </SlideShell>
  );
}
