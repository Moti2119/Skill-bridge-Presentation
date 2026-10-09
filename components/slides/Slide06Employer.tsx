"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Scale, Shield, Wand2 } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";

const flags = [
  { text: "5+ years required for junior role", severity: "high" },
  { text: "Unpaid trial period expectation", severity: "medium" },
  { text: "Degree mandatory — skills ignored", severity: "high" },
];

const suggestions = [
  "Replace years-of-experience with portfolio review",
  "Offer paid internship pathway for new grads",
  "List core skills instead of elite university filters",
];

export function Slide06Employer() {
  return (
    <SlideShell id="employer" glow="violet">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-brand-violet">
          Employer Fairness AI
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-5xl">
          Hire fairly. Hire smarter.
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-white/60">
          Paste a job description — SkillBridge flags unrealistic requirements and suggests inclusive alternatives.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]"
        >
          <motion.div className="glass neon-border rounded-2xl p-5 space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/40">Job description analyzer</p>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white/70 leading-relaxed font-mono">
              Senior Software Engineer — 7 years experience required. CS degree mandatory.
              Must work unpaid for 3 months trial...
            </div>

            <div className="space-y-2">
              {flags.map((f, i) => (
                <motion.div
                  key={f.text}
                  className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                >
                  <AlertTriangle
                    className={`h-4 w-4 shrink-0 mt-0.5 ${f.severity === "high" ? "text-amber-400" : "text-amber-300/80"}`}
                  />
                  <span className="text-sm text-amber-100/90">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="space-y-4">
            <motion.div className="glass neon-border rounded-2xl p-5 text-center">
              <Shield className="h-8 w-8 text-brand-violet mx-auto mb-3" />
              <p className="text-xs uppercase tracking-widest text-white/40">Fairness score</p>
              <motion.p
                className="font-display text-6xl font-bold text-brand-violet mt-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                42
              </motion.p>
              <p className="text-sm text-amber-400 mt-1">Needs improvement</p>
              <motion.div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-brand-violet"
                  initial={{ width: 0 }}
                  whileInView={{ width: "42%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="glass neon-border rounded-2xl p-5">
              <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-3">
                <Wand2 className="h-3.5 w-3.5 text-emerald-400" />
                AI hiring recommendations
              </p>
              <ul className="space-y-2">
                {suggestions.map((s, i) => (
                  <motion.li
                    key={s}
                    className="flex gap-2 text-sm text-white/75"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 rounded-xl border border-brand-violet/30 bg-brand-violet/10 px-4 py-3"
              animate={{ boxShadow: ["0 0 0 rgba(167,139,250,0)", "0 0 30px rgba(167,139,250,0.2)", "0 0 0 rgba(167,139,250,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Scale className="h-5 w-5 text-brand-violet" />
              <span className="text-sm text-white/70">Powered by Cursor fairness analysis</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
