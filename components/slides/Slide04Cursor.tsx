"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, FileText, MessageSquare, Scale } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

function Pipeline({
  steps,
}: {
  steps: { icon: typeof FileText; label: string }[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2 md:gap-3">
          <motion.div className="glass neon-border flex items-center gap-2 rounded-xl px-4 py-3 min-w-[140px]">
            <step.icon className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white/90">{step.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="h-4 w-4 text-cyan-400/60 hidden sm:block animate-pulse" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

const labels = [
  "Cursor Cloud Agents",
  "AI Workflow Engine",
  "Resume Intelligence",
  "Fair Hiring Analysis",
  "Multilingual Career Assistant",
];

export function Slide04Cursor() {
  return (
    <SlideShell id="cursor" glow="violet">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-brand-violet" />
          <p className="text-sm uppercase tracking-widest text-brand-violet">
            Cursor Agent SDK Integration
          </p>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-5xl">
          AI-native workflows powered by{" "}
          <span className="text-brand-violet">Cursor Cloud Agents</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-white/60">
          Observable async pipelines — resume analysis, fairness checks, and career coaching
          orchestrated through the Cursor TypeScript SDK.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="mt-12 space-y-8">
          <div>
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
              Graduate pipeline
            </p>
            <Pipeline
              steps={[
                { icon: FileText, label: "Resume Upload" },
                { icon: Bot, label: "Cursor Agent Analysis" },
                { icon: Bot, label: "Employability Insights" },
                { icon: MessageSquare, label: "Career Recommendations" },
              ]}
            />
          </div>
          <div>
            <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
              Employer pipeline
            </p>
            <Pipeline
              steps={[
                { icon: FileText, label: "Job Description" },
                { icon: Bot, label: "Fairness Analysis" },
                { icon: Scale, label: "Hiring Improvements" },
              ]}
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap justify-center gap-2">
          {labels.map((l) => (
            <span
              key={l}
              className="rounded-full border border-brand-violet/40 bg-brand-violet/10 px-4 py-1.5 text-xs text-brand-violet"
            >
              {l}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
