import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl", className)} data-reveal>
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.45em] text-[var(--accent-cyan)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.08em] text-[var(--color-ink)] md:text-7xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--color-muted)]">
        {children}
      </p>
    </div>
  );
}
