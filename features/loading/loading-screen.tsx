"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTranslations } from "@/hooks/use-translations";

export function LoadingScreen() {
  const t = useTranslations();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      const timeout = window.setTimeout(() => setDone(true), 350);
      return () => window.clearTimeout(timeout);
    }

    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      setProgress((current) => {
        const next = Math.min(100, current + Math.max(1, 10 - frame * 0.18));
        if (next >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setDone(true), 450);
        }
        return next;
      });
    }, 90);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-[var(--color-void)] transition duration-1000"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
      }}
      aria-hidden={done}
    >
      <div className="w-[min(32rem,calc(100vw-2rem))] text-center">
        <p className="font-mono text-xs uppercase tracking-[0.6em] text-[var(--accent-cyan)]">
          {t.loading.initializing}
        </p>
        <div className="mt-8 overflow-hidden text-6xl font-semibold tracking-[-0.08em] text-[var(--color-ink)] md:text-8xl">
          Hope
        </div>
        <div className="mt-8 h-px overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-champagne)] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 font-mono text-xs text-[var(--color-muted)]">
          {Math.round(progress).toString().padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
}
