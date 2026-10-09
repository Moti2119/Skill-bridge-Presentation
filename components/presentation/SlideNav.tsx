"use client";

import { SLIDES } from "@/lib/slides";
import { cn } from "@/lib/utils";

export function SlideNav() {
  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      {SLIDES.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          title={s.label}
          className={cn(
            "group flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition",
            "hover:bg-white/10",
          )}
        >
          <span className="flex h-2 w-2 rounded-full bg-white/30 ring-2 ring-transparent transition group-hover:bg-cyan-400 group-hover:ring-cyan-400/50" />
          <span className="max-w-0 overflow-hidden text-[10px] text-white/60 opacity-0 transition-all group-hover:max-w-[120px] group-hover:opacity-100">
            {i + 1}. {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
