"use client";

import { motion } from "framer-motion";
import { Brain, Globe2, Scale, Sparkles } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const features = [
  {
    icon: Brain,
    title: "AI-native coaching",
    desc: "Resume intelligence, interview prep, and career paths powered by Gemini + Cursor agents.",
  },
  {
    icon: Scale,
    title: "Fair hiring",
    desc: "Employers get bias detection and inclusive job description rewrites.",
  },
  {
    icon: Globe2,
    title: "Multilingual access",
    desc: "English, Amharic, Afaan Oromoo, and Tigrigna — voice and chat.",
  },
  {
    icon: Sparkles,
    title: "Skills over certificates",
    desc: "Real employability scoring based on what graduates can do today.",
  },
];

export function Slide03Solution() {
  return (
    <SlideShell id="solution">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-cyan-300">
          The Solution
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-6xl">
          <span className="gradient-text">SkillBridge Ethiopia</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-2xl text-lg text-white/65 md:text-xl">
          An AI-powered multilingual employment platform connecting graduates and employers fairly —
          focusing on real skills instead of elite credentials alone.
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass neon-border rounded-2xl p-6 animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <f.icon className="h-9 w-9 text-cyan-400 mb-4" />
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
