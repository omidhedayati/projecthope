"use client";

import { Languages } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";
import { useTranslations } from "@/hooks/use-translations";
import { useLocaleStore } from "@/stores/locale-store";

export function LanguageSwitcher() {
  const t = useTranslations();
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: t.language.en },
    { value: "fa", label: t.language.fa },
  ];

  return (
    <div className="relative">
      <label className="sr-only" htmlFor="language-switcher">
        {t.language.switch}
      </label>
      <div className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-[var(--color-muted)]">
        <Languages size={15} />
      </div>
      <select
        id="language-switcher"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="h-11 appearance-none rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] py-2 ps-9 pe-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] backdrop-blur-xl transition hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cyan)]"
        aria-label={t.language.switch}
        data-cursor="Language"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
