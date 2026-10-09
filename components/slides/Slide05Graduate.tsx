"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileUp,
  Loader2,
  MessageCircle,
  Mic,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const insights = [
  { label: "Technical depth", score: 82 },
  { label: "Communication", score: 74 },
  { label: "Project evidence", score: 88 },
];

const recommendations = [
  "Highlight React + TypeScript projects on your profile",
  "Practice behavioral questions for junior developer roles",
  "Apply to 3 curated openings in Addis Ababa this week",
];

export function Slide05Graduate() {
  return (
    <SlideShell id="graduate" glow="cyan">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-cyan-300">
          Graduate AI Assistant
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-5xl">
          Your career cockpit — powered by AI
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-white/60">
          Upload a resume, get employability scoring, interview prep, and personalized paths — in seconds.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]"
        >
          <motion.div className="glass neon-border rounded-2xl p-5 space-y-4">
            <motion.div
              className="flex items-center justify-between rounded-xl border border-dashed border-cyan-400/40 bg-cyan-400/5 p-4"
              animate={{ boxShadow: ["0 0 20px rgba(34,211,238,0.1)", "0 0 40px rgba(34,211,238,0.25)", "0 0 20px rgba(34,211,238,0.1)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div className="flex items-center gap-3">
                <FileUp className="h-8 w-8 text-cyan-400" />
                <div>
                  <p className="font-medium">Resume uploaded</p>
                  <p className="text-xs text-white/50">abebe_tadesse_cv.pdf</p>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-5 w-5 text-cyan-400" />
              </motion.div>
            </motion.div>

            <div className="flex items-end justify-between">
              <motion.div>
                <p className="text-xs uppercase tracking-widest text-white/40">Employability</p>
                <p className="font-display text-5xl font-bold text-cyan-300">78</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-1 text-sm text-emerald-400"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="h-4 w-4" />
                +12 vs last upload
              </motion.div>
            </div>

            <motion.div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                initial={{ width: 0 }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4">
            <motion.div className="glass neon-border rounded-2xl p-5">
              <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                AI analysis
              </p>
              <div className="space-y-3">
                {insights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                  >
                    <motion.div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{item.label}</span>
                      <span className="text-cyan-300">{item.score}%</span>
                    </motion.div>
                    <motion.div className="h-1.5 rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-cyan-400/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="glass neon-border rounded-2xl p-5">
              <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-3">
                <Briefcase className="h-3.5 w-3.5 text-brand-gold" />
                Recommendations
              </p>
              <ul className="space-y-2">
                {recommendations.map((r, i) => (
                  <motion.li
                    key={r}
                    className="flex gap-2 text-sm text-white/75"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <MessageCircle className="h-4 w-4 text-brand-violet shrink-0 mt-0.5" />
                    {r}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-sm text-white/60">Interview prep mode</span>
              <Mic className="h-5 w-5 text-cyan-400 animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
