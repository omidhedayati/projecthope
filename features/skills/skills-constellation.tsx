"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";

export function SkillsConstellation() {
  const t = useTranslations();

  return (
    <section id="skills" data-chapter="Abilities" className="relative overflow-hidden px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title}>
          {t.skills.description}
        </SectionHeader>

        <div className="relative mt-16 grid min-h-[46rem] place-items-center overflow-hidden rounded-[3rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,.055),transparent)] p-4">
          <div className="absolute inset-8 bg-[linear-gradient(rgba(136,247,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(136,247,255,.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/45 to-transparent" />
          <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-gradient-to-b from-transparent via-[var(--accent-cyan)]/35 to-transparent" />
          <GlassPanel className="relative z-10 max-w-sm text-center shadow-[0_0_80px_rgba(136,247,255,.14)]">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
              {t.skills.coreAbility}
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-[var(--color-ink)]">
              {t.skills.coreTitle}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
              {t.skills.coreDescription}
            </p>
          </GlassPanel>

          <div className="absolute inset-0">
            {t.skills.clusters.map((cluster, index) => {
              const positions = [
                "left-[4%] top-[18%]",
                "right-[6%] top-[12%]",
                "left-[10%] bottom-[10%]",
                "right-[8%] bottom-[14%]",
                "left-1/2 top-[2%] -translate-x-1/2",
              ];

              return (
                <GlassPanel
                  key={cluster.title}
                  className={`absolute w-[min(22rem,86vw)] ${positions[index]} animate-float`}
                >
                  <div data-reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-champagne)]">
                      {t.skills.abilityNode} {cluster.orbit + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                      {cluster.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {cluster.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cluster.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassPanel>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
