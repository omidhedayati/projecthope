import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MockupFrame } from "@/components/ui/mockup-frame";
import { projects, siteConfig } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: `Case Study | ${siteConfig.name}`,
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen px-4 pb-24 pt-32 md:px-6">
      <article className="mx-auto max-w-[1200px]">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent-cyan)]">
          Case Study
        </p>
        <h1 className="mt-5 text-balance text-6xl font-semibold leading-none tracking-[-0.1em] text-[var(--color-ink)] md:text-8xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--color-muted)]">
          {project.summary}
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <MockupFrame title={project.title}>
            <div className="relative min-h-96">
              <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(136,247,255,.25),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(167,139,250,.22),transparent_36%)]" />
              <div className="relative flex min-h-96 items-end p-6">
                <h2 className="max-w-xl text-5xl font-semibold tracking-[-0.09em] text-white">
                  {project.narrative}
                </h2>
              </div>
            </div>
          </MockupFrame>

          <GlassPanel>
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
              Architecture Notes
            </h2>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              This page is a production-ready placeholder for the full case study. It already uses
              typed project data, static generation, SEO metadata, metrics, stack information, and
              action links.
            </p>
            <div className="mt-7 grid gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex justify-between rounded-2xl border border-[var(--color-line)] px-4 py-3">
                  <span className="text-[var(--color-muted)]">{metric.label}</span>
                  <strong className="text-[var(--color-ink)]">{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-[var(--color-line)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/#projects" variant="secondary">Back to projects</Button>
            </div>
          </GlassPanel>
        </div>
      </article>
    </main>
  );
}
