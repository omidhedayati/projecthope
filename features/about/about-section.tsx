"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section id="about" data-chapter="Origin" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title}>
          {t.about.description}
        </SectionHeader>

        <div className="grid gap-5">
          {t.about.principles.map((item, index) => (
            <GlassPanel
              key={item.title}
              className="origin-left transition duration-500 hover:-translate-y-1 hover:rotate-[.35deg]"
            >
              <div className="flex gap-5" data-reveal>
                <span className="font-mono text-sm text-[var(--accent-cyan)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">{item.copy}</p>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
