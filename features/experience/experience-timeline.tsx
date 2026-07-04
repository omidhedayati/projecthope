import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/lib/site-data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow="Experience" title="A timeline of breadth, not job-title wallpaper.">
          The work spans architecture, user interfaces, AI workflows, realtime systems, games,
          applications, and the connective tissue required to ship them.
        </SectionHeader>

        <div className="relative mt-16 grid gap-6">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-transparent via-[var(--accent-cyan)] to-transparent md:block" />
          {experience.map((item, index) => (
            <div key={item.title} className="relative md:pl-16" data-reveal>
              <span className="absolute left-2 top-8 hidden h-7 w-7 -translate-x-1/2 rounded-full border border-[var(--accent-cyan)] bg-[var(--color-void)] shadow-[0_0_30px_rgba(136,247,255,.25)] md:block" />
              <GlassPanel>
                <div className="grid gap-6 md:grid-cols-[12rem_1fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
                      {item.period}
                    </p>
                    <p className="mt-4 text-sm text-[var(--color-muted)]">Chapter 0{index + 1}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl leading-8 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
