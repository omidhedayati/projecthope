import { ArrowUpRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSceneLoader } from "@/features/hero/hero-scene-loader";
import { capabilityStrip, siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 md:px-6"
    >
      <div className="absolute inset-y-20 right-0 w-full max-w-5xl opacity-90 [mask-image:linear-gradient(to_left,black,transparent)] md:w-2/3">
        <HeroSceneLoader />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
        <div>
          <div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-4 py-2 text-sm text-[var(--color-muted)] backdrop-blur-xl"
            data-reveal
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            Available for ambitious builds
          </div>
          <p
            className="font-mono text-xs uppercase tracking-[0.5em] text-[var(--accent-cyan)]"
            data-reveal
          >
            {siteConfig.title}
          </p>
          <h1
            className="mt-5 max-w-5xl text-balance text-[clamp(4.5rem,13vw,12rem)] font-semibold leading-[0.78] tracking-[-0.12em] text-[var(--color-ink)]"
            data-reveal
          >
            {siteConfig.owner}
          </h1>
          <p
            className="mt-8 max-w-2xl text-pretty text-xl leading-9 text-[var(--color-muted)] md:text-2xl"
            data-reveal
          >
            I build complex software experiences across web, full-stack systems, games,
            applications, backend platforms, and AI integrations.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
            <Button href="#projects">
              Explore work <ArrowUpRight className="ml-2 inline" size={17} />
            </Button>
            <Button href="#contact" variant="secondary">
              Open terminal
            </Button>
          </div>
        </div>

        <div className="relative min-h-[28rem] lg:min-h-[42rem]" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-full max-w-md rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-5 backdrop-blur-2xl" data-reveal>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Live System
              </span>
              <Activity size={18} className="text-[var(--accent-cyan)]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["60 FPS", "R3F", "GSAP", "Lenis"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[.06] p-4">
                  <span className="text-lg font-semibold text-[var(--color-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2" data-reveal>
          <div className="flex gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex min-w-full animate-marquee gap-3">
              {[...capabilityStrip, ...capabilityStrip].map((capability, index) => (
                <span
                  key={`${capability}-${index}`}
                  className="whitespace-nowrap rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-5 py-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
