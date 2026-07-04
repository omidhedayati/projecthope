import { Bot, Bookmark, Newspaper, Share2, Trophy } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";

const extras = [
  {
    title: "AI assistant",
    copy: "Placeholder surface for a future project guide, resume assistant, or portfolio copilot.",
    icon: Bot,
  },
  {
    title: "Blog and case studies",
    copy: "Route structure is ready for long-form technical writing and product breakdowns.",
    icon: Newspaper,
  },
  {
    title: "Bookmarks",
    copy: "Designed as a future layer for visitors to save projects or compare capabilities.",
    icon: Bookmark,
  },
  {
    title: "Share project",
    copy: "Project actions are structured so social sharing can be added without changing showcases.",
    icon: Share2,
  },
  {
    title: "Achievements",
    copy: "A flexible area for awards, shipped milestones, certifications, or open-source wins.",
    icon: Trophy,
  },
];

export function ExtrasSection() {
  return (
    <section id="ai-assistant" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow="Extras" title="Built to grow into a living product.">
          The first launch includes polished placeholders for features that can become real product
          surfaces: AI assistant, blog, case studies, bookmarks, sharing, achievements, analytics,
          and newsletter capture.
        </SectionHeader>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {extras.map((extra) => {
            const Icon = extra.icon;
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
