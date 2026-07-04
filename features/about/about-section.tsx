import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";

const principles = [
  {
    title: "Systems thinking",
    copy: "I design the backend, state model, and product surface as one connected experience.",
  },
  {
    title: "Interface craft",
    copy: "Motion, typography, hierarchy, and accessibility are treated as engineering concerns.",
  },
  {
    title: "Playable software",
    copy: "Game development shapes how I think about feedback loops, flow, and interaction.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeader eyebrow="About" title="Software with atmosphere, systems, and intent.">
          I am a professional developer focused on turning complex technical ideas into refined,
          usable, and memorable products. The portfolio is built to communicate that range through
          interaction instead of a conventional resume layout.
        </SectionHeader>

        <div className="grid gap-5">
          {principles.map((item, index) => (
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
