"use client";

import { Bot, Bookmark, Newspaper, Share2, Trophy } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";

const extraIcons = [Bot, Newspaper, Bookmark, Share2, Trophy];

export function ExtrasSection() {
  const t = useTranslations();

  return (
    <section id="ai-assistant" data-chapter="Hidden Systems" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow={t.extras.eyebrow} title={t.extras.title}>
          {t.extras.description}
        </SectionHeader>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {t.extras.items.map((extra, index) => {
            const Icon = extraIcons[index];
            return (
              <GlassPanel key={extra.title}>
                <div data-reveal>
                  <Icon className="text-[var(--accent-cyan)]" size={24} />
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                    {extra.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{extra.copy}</p>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
