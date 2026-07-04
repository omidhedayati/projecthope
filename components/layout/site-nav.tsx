import { Command } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { ThemeToggle } from "@/features/theme/theme-toggle";

export function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl">
        <a
          href="#hero"
          className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-ink)]"
          data-cursor="Home"
        >
          Project Hope
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--color-muted)] transition hover:bg-white/10 hover:text-[var(--color-ink)]"
              data-cursor={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-11 items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-4 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)] md:inline-flex"
            data-command-trigger
            data-cursor="⌘K"
          >
            <Command size={15} />
            <span>Command</span>
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
