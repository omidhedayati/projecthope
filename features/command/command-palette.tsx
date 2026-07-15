"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { paletteActionIcons } from "@/lib/i18n/messages/en";
import { useTranslations } from "@/hooks/use-translations";

export function CommandPalette() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-command-trigger]")) {
        setOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const actions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const paletteActions = t.commandPalette.actions.map((action) => ({
      ...action,
      icon: paletteActionIcons[action.key as keyof typeof paletteActionIcons],
    }));

    if (!normalized) return paletteActions;

    return paletteActions.filter((action) =>
      `${action.label} ${action.hint}`.toLowerCase().includes(normalized),
    );
  }, [query, t.commandPalette.actions]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={t.commandPalette.ariaLabel}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-void)_86%,transparent)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--color-line)] px-5 py-4">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.commandPalette.placeholder}
            className="h-12 flex-1 bg-transparent text-lg text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-2 text-[var(--color-muted)] hover:bg-white/10 hover:text-[var(--color-ink)]"
            aria-label={t.commandPalette.close}
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={`${action.label}-${action.hint}`}
                href={action.href ?? "#contact"}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-start transition hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[var(--accent-cyan)]">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block font-medium text-[var(--color-ink)]">{action.label}</span>
                  <span className="block text-sm text-[var(--color-muted)]">{action.hint}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
