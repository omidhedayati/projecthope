"use client";

import { Monitor, Smartphone, TabletSmartphone } from "lucide-react";
import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";

const icons = [Monitor, Smartphone, TabletSmartphone];

export function ApplicationsSection() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = t.applications.items[activeIndex];
  const Icon = icons[activeIndex];

  return (
    <section id="applications" data-chapter="Loadouts" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeader eyebrow={t.applications.eyebrow} title={t.applications.title}>
            {t.applications.description}
          </SectionHeader>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            {t.applications.items.map((app, index) => (
              <button
                key={app.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-5 py-3 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)] data-[active=true]:border-[var(--accent-cyan)] data-[active=true]:text-[var(--color-ink)]"
                data-active={activeIndex === index}
                data-cursor={app.platform}
              >
                {app.platform}
              </button>
            ))}
          </div>
        </div>

        <GlassPanel className="min-h-[34rem]">
          <div className="grid h-full place-items-center" data-reveal>
            <div className="relative w-full max-w-xl">
              <div className="absolute -inset-12 rounded-full bg-[var(--accent-cyan)] opacity-10 blur-3xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-black/35 p-5 shadow-2xl shadow-black/30">
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] p-8">
                  <Icon className="text-[var(--accent-cyan)]" size={42} />
                  <p className="mt-10 font-mono text-xs uppercase tracking-[0.35em] text-white/45">
                    {active.platform}
                  </p>
                  <h3 className="mt-4 text-5xl font-semibold tracking-[-0.09em] text-white">
                    {active.title}
                  </h3>
                  <p className="mt-6 max-w-md leading-8 text-white/60">{active.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
