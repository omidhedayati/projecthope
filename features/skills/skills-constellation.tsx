import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { skillClusters } from "@/lib/site-data";

export function SkillsConstellation() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow="Skills" title="A constellation of product capabilities.">
          No progress bars. The point is not percentage theater. It is the ability to connect
          frontend craft, backend architecture, games, applications, and AI into coherent products.
        </SectionHeader>

        <div className="relative mt-16 grid min-h-[44rem] place-items-center">
          <div className="absolute h-[32rem] w-[32rem] rounded-full border border-[var(--color-line)]" />
          <div className="absolute h-[22rem] w-[22rem] rounded-full border border-[var(--color-line)]" />
          <div className="absolute h-[12rem] w-[12rem] rounded-full border border-[var(--color-line)]" />
          <GlassPanel className="relative z-10 max-w-sm text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
              Core
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-[var(--color-ink)]">
              Complex software, designed as experience.
            </h3>
          </GlassPanel>

          <div className="absolute inset-0">
            {skillClusters.map((cluster, index) => {
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
                      Orbit {cluster.orbit + 1}
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
