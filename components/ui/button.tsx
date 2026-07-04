import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]",
    variant === "primary" &&
      "bg-[var(--color-ink)] text-[var(--color-void)] shadow-[0_0_40px_rgba(136,247,255,.18)] hover:scale-[1.02]",
    variant === "secondary" &&
      "border border-[var(--color-line)] bg-[var(--color-glass)] text-[var(--color-ink)] backdrop-blur-xl hover:border-[var(--accent-cyan)]",
    variant === "ghost" &&
      "text-[var(--color-muted)] hover:bg-[var(--color-glass)] hover:text-[var(--color-ink)]",
    className,
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" data-cursor="Open">
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href} data-cursor="Open">
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
