"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useThemeStore } from "@/stores/theme-store";

export function ThemeToggle() {
  const t = useTranslations();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] text-[var(--color-ink)] backdrop-blur-xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
      aria-label={t.theme.toggle}
      data-cursor="Theme"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
