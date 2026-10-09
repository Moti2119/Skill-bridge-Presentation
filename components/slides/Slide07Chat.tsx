"use client";

import { motion } from "framer-motion";
import { Bot, Globe2, Mic, Volume2 } from "lucide-react";
import { SlideShell } from "@/components/presentation/SlideShell";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English", sample: "How can I improve my employability score?" },
  { code: "am", label: "አማርኛ", sample: "የስራ እድል ለማግኘት ምን ማድረግ አለብኝ?" },
  { code: "om", label: "Afaan Oromoo", sample: "Mallaqa hojii koo akkamitti fooyyessuu danda'a?" },
  { code: "ti", label: "ትግርኛ", sample: "ናይ ስራሕ ዕድል ክረክብ ከለኹ እንታይ ክገብር ይግብኦ?" },
];

const chat = [
  { role: "user", text: "Can you help me prepare for a developer interview?" },
  {
    role: "assistant",
    text: "Absolutely. Let's practice three behavioral questions and review your top React projects.",
  },
  { role: "user", text: "በአማርኛም መነጋገር እችላለሁ?" },
  {
    role: "assistant",
    text: "እርግጥ ነው! በአማርኛ፣ በኦሮምኛ፣ በትግርኛ ወይም በእንግሊዝኛ መወያየት ትችላለህ።",
  },
];

export function Slide07Chat() {
  return (
    <SlideShell id="chat">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-widest text-cyan-300">
          Multilingual AI Chat
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display mt-4 text-4xl font-bold md:text-5xl">
          Career guidance in your language
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-white/60">
          Voice and text support across Ethiopia&apos;s major languages — breaking barriers to opportunity.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]"
        >
          <motion.div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Globe2 className="h-3.5 w-3.5" />
              Language selector
            </p>
            <motion.div className="grid grid-cols-2 gap-2">
              {languages.map((lang, i) => (
                <motion.button
                  key={lang.code}
                  type="button"
                  className={cn(
                    "glass rounded-xl p-3 text-left transition",
                    i === 0 && "neon-border ring-1 ring-cyan-400/50",
                  )}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-medium text-sm">{lang.label}</p>
                  <p className="mt-1 text-[11px] text-white/50 line-clamp-2">{lang.sample}</p>
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="glass neon-border rounded-2xl p-4 flex items-center gap-4"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Mic className="h-6 w-6 text-cyan-400" />
              <div className="flex-1 flex items-center gap-0.5 h-8">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 rounded-full bg-cyan-400/80"
                    animate={{ height: [8, 20 + (i % 5) * 4, 8] }}
                    transition={{
                      duration: 0.6 + (i % 4) * 0.1,
                      repeat: Infinity,
                      delay: i * 0.04,
                    }}
                  />
                ))}
              </div>
              <Volume2 className="h-5 w-5 text-white/40" />
            </motion.div>
          </motion.div>

          <motion.div className="glass neon-border rounded-2xl p-5 flex flex-col min-h-[320px]">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20"
                animate={{ boxShadow: ["0 0 0 #22d3ee00", "0 0 24px #22d3ee55", "0 0 0 #22d3ee00"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <motion.div>
                <p className="font-medium">SkillBridge AI Coach</p>
                <p className="text-xs text-emerald-400">Online · Multilingual</p>
              </motion.div>
            </div>

            <motion.div className="flex-1 space-y-3 overflow-hidden">
              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "max-w-[90%] rounded-2xl px-4 py-2.5 text-sm",
                    msg.role === "user"
                      ? "ml-auto bg-brand-violet/30 text-white/90"
                      : "mr-auto bg-white/10 text-white/85 border border-white/10",
                  )}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                >
                  {msg.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideShell>
  );
}
