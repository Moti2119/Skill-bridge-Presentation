"use client";

import { motion } from "framer-motion";
import { BarChart3, Building2, GraduationCap, Map, Sparkles } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const roadmap = [
  {
    icon: Map,
    title: "Nationwide adoption",
    desc: "Regional hubs connecting universities, TVETs, and employers across Ethiopia.",
  },
  {
    icon: Sparkles,
    title: "AI career coaching",
    desc: "Longitudinal mentorship that grows with each graduate's journey.",
  },
  {
    icon: Building2,
    title: "Entrepreneurship assistance",
    desc: "Micro-business pathways for youth who create jobs — not only seek them.",
  },
  {
    icon: GraduationCap,
    title: "Educational partnerships",
    desc: "Curriculum-aligned skills maps with schools and training centers.",
  },
  {
    icon: BarChart3,
    title: "Labor-market analytics",
    desc: "Real-time insights for policymakers and institutions on skills demand.",
  },
];

export function Slide09Vision() {
  return (
    <SlideShell id="vision" glow="violet">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-brand-violet">
          Future Vision
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-5xl">
          From hackathon MVP to national infrastructure
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-white/60">
          SkillBridge is the beginning — a scalable AI employment layer for Ethiopia&apos;s next generation.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="relative mt-12">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-violet/50 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass neon-border rounded-2xl p-5 md:odd:mr-8 md:even:ml-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className="h-8 w-8 text-brand-violet mb-3" />
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 mx-auto max-w-md rounded-full border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 text-center text-sm text-cyan-200/90"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Expanding network · Ethiopia → East Africa → Global diaspora talent
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
