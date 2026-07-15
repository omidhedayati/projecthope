"use client";

import { Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { useTranslations } from "@/hooks/use-translations";
import { useSoundStore } from "@/stores/sound-store";

export function GameShell() {
  const t = useTranslations();
  const [entered, setEntered] = useState(false);
  const soundEnabled = useSoundStore((state) => state.enabled);
  const toggleSound = useSoundStore((state) => state.toggleSound);
  const setSound = useSoundStore((state) => state.setSound);
  const [activeId, setActiveId] = useState(t.chapters[0].id);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  const activeChapter = useMemo(
    () => t.chapters.find((chapter) => chapter.id === activeId) ?? t.chapters[0],
    [activeId, t.chapters],
  );

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    t.chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) observer.observe(element);
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [t.chapters]);

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[45] opacity-45 mix-blend-screen" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,.045)_1px,transparent_2px)] bg-[length:100%_7px]" />
        <div className="absolute left-1/2 top-1/2 h-[min(64vw,34rem)] w-[min(64vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent-cyan)]/20" />
        <div className="absolute start-8 top-28 h-16 w-px bg-[var(--accent-cyan)]/30" />
        <div className="absolute end-8 bottom-28 h-16 w-px bg-[var(--accent-cyan)]/30" />
      </div>

      <aside className="pointer-events-none fixed bottom-5 start-5 z-50 hidden w-72 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-4 font-mono text-xs backdrop-blur-2xl md:block">
        <div className="flex items-center justify-between text-[var(--color-muted)]">
          <span>{t.gameShell.chapter}</span>
          <span>
            {activeChapter.index} / {t.chapters[t.chapters.length - 1].index}
          </span>
        </div>
        <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
          {activeChapter.title}
        </p>
        <p className="mt-1 text-[var(--color-muted)]">{activeChapter.status}</p>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-champagne)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </aside>

      <button
        type="button"
        onClick={() => toggleSound()}
        className="fixed bottom-5 end-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] text-[var(--color-ink)] backdrop-blur-2xl transition hover:scale-105"
        aria-label={t.gameShell.toggleSound}
        data-cursor={soundEnabled ? t.gameShell.soundOn : t.gameShell.soundOff}
      >
        {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <div
        className="fixed inset-0 z-[65] grid place-items-center bg-[radial-gradient(circle_at_center,rgba(136,247,255,.16),transparent_42%),rgba(5,6,10,.72)] px-4 backdrop-blur-md transition duration-700"
        style={{ opacity: entered ? 0 : 1, pointerEvents: entered ? "none" : "auto" }}
        aria-hidden={entered}
      >
        <GlassPanel className="relative w-full max-w-3xl overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -start-16 top-0 h-40 w-40 rounded-full bg-[var(--accent-cyan)] opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -end-12 bottom-0 h-44 w-44 rounded-full bg-[var(--accent-violet)] opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

          <p className="relative font-mono text-xs uppercase tracking-[0.65em] text-[var(--accent-cyan)]">
            {t.gameShell.archive}
          </p>
          <h2 className="relative mt-7 text-6xl font-semibold leading-none tracking-[-0.1em] text-[var(--color-ink)] md:text-8xl">
            {t.gameShell.pressStart}
          </h2>
          <p className="relative mx-auto mt-7 max-w-xl text-pretty text-lg leading-8 text-[var(--color-muted)]">
            {t.gameShell.intro}
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setEntered(true)}
              className="rounded-full bg-[var(--color-ink)] px-8 py-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-void)] transition hover:scale-105"
              data-cursor="Start"
            >
              {t.gameShell.clickToStart}
            </button>
            <button
              type="button"
              onClick={() => {
                setSound(true);
                setEntered(true);
              }}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-8 py-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-muted)] backdrop-blur-xl transition hover:text-[var(--color-ink)]"
              data-cursor="Audio"
            >
              {t.gameShell.startWithSound}
            </button>
          </div>
          <p className="relative mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            {t.gameShell.scrollHint}
          </p>
        </GlassPanel>
      </div>
    </>
  );
}
