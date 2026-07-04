import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MockupFrame } from "@/components/ui/mockup-frame";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/lib/site-data";

const accentClass = {
  cyan: "from-cyan-300/40",
  violet: "from-violet-300/40",
  champagne: "from-amber-200/40",
  rose: "from-rose-300/40",
};

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader eyebrow="Projects" title="Case studies, not cards.">
          Each project is presented as a product environment: context, systems, interface,
          technology, metrics, and the kind of polish that makes software feel alive.
        </SectionHeader>

        <div className="mt-16 grid gap-10">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid gap-6 rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-4 backdrop-blur-2xl md:p-6 lg:grid-cols-[1.1fr_.9fr]"
              data-reveal
            >
              <MockupFrame title={project.title} className={index % 2 ? "lg:order-2" : ""}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentClass[project.accent]} via-transparent to-transparent opacity-80`}
                />
                <div className="relative flex min-h-80 flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/55">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-5 max-w-xl text-5xl font-semibold leading-none tracking-[-0.09em] text-white md:text-7xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                        <span className="block text-2xl font-semibold text-white">{metric.value}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </MockupFrame>

              <div className="flex flex-col justify-between p-2 md:p-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
                    0{index + 1} / Featured
                  </p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.08em] text-[var(--color-ink)]">
                    {project.summary}
                  </h3>
                  <p className="mt-6 leading-8 text-[var(--color-muted)]">{project.narrative}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] bg-white/[.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.actions.map((action, actionIndex) => (
                    <Button
                      key={action.label}
                      href={action.href}
                      variant={actionIndex === 0 ? "primary" : "secondary"}
                    >
                      {action.label}
                      <ArrowUpRight className="ml-2 inline" size={16} />
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
