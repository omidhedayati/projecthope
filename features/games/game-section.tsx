"use client";

import { Gamepad2, Play } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";

export function GameSection() {
  const t = useTranslations();

  return (
    <section id="games" data-chapter="Worlds" className="relative overflow-hidden px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow={t.games.eyebrow} title={t.games.title}>
          {t.games.description}
        </SectionHeader>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.games.items.map((game, index) => (
            <GlassPanel key={game.title} className="min-h-[34rem]">
              <div className="flex h-full flex-col justify-between" data-reveal>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
                      {game.engine}
                    </span>
                    <Gamepad2 className="text-[var(--color-muted)]" size={20} />
                  </div>
                  <div className="mt-10 aspect-video rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(247,220,166,.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.015))] p-5">
                    <div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-white/15">
                      <Play className="text-white/55" />
                    </div>
                  </div>
                  <p className="mt-8 font-mono text-xs text-[var(--color-muted)]">
                    {t.games.worldSlot} 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.07em] text-[var(--color-ink)]">
                    {game.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--color-muted)]">{game.summary}</p>
                </div>
                <div className="mt-8 grid gap-2">
                  {game.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-[var(--color-muted)]"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
