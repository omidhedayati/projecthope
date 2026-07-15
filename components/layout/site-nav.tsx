"use client";

import { Command } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { useTranslations } from "@/hooks/use-translations";

export function SiteNav() {
  const t = useTranslations();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl">
        <a
          href="#hero"
          className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--color-ink)]"
          data-cursor="Home"
        >
          {t.nav.brand}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {t.nav.items.map((item) => (
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
            data-cursor={t.nav.questMenu}
          >
            <Command size={15} />
            <span>{t.nav.questMenu}</span>
          </button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
