"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { useLocaleStore } from "@/stores/locale-store";
import { siteConfig } from "@/lib/site-data";

type Line = {
  kind: "input" | "output";
  value: string;
};

export function ContactTerminal() {
  const t = useTranslations();
  const locale = useLocaleStore((state) => state.locale);
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const initialLines = useMemo<Line[]>(
    () => [
      { kind: "output", value: t.contact.terminalReady },
      { kind: "output", value: t.contact.terminalHint },
    ],
    [t.contact.terminalHint, t.contact.terminalReady],
  );

  useEffect(() => {
    setLines(initialLines);
  }, [initialLines, locale]);

  const commandMap = useMemo(
    () => new Map(t.contact.commands.map((item) => [item.command, item])),
    [t.contact.commands],
  );

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines(initialLines);
      return;
    }

    const match = commandMap.get(command);
    const response = match?.response ?? [
      `${t.contact.commandNotFound} ${command}`,
      t.contact.typeHelp,
    ];

    setLines((current) => [
      ...current,
      { kind: "input", value: command },
      ...response.map((value) => ({ kind: "output" as const, value })),
    ]);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <section id="contact" data-chapter="Final Gate" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title}>
          {t.contact.description}
        </SectionHeader>

        <GlassPanel className="min-h-[34rem]">
          <div
            className="h-full w-full text-start"
            onClick={() => inputRef.current?.focus()}
            data-cursor="Type"
          >
            <div className="mb-5 flex items-center justify-between border-b border-[var(--color-line)] pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                <span className="h-3 w-3 rounded-full bg-[#f7d794]" />
                <span className="h-3 w-3 rounded-full bg-[#63e6be]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                contact.sh
              </span>
            </div>

            <div className="min-h-80 space-y-2 font-mono text-sm leading-7">
              {lines.map((line, index) => (
                <p
                  key={`${line.kind}-${line.value}-${index}`}
                  className={line.kind === "input" ? "text-[var(--accent-cyan)]" : "text-[var(--color-muted)]"}
                >
                  {line.kind === "input" ? "$ " : ""}
                  {line.value}
                </p>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-6 flex items-center gap-3">
              <span className="font-mono text-[var(--accent-cyan)]">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="h-11 flex-1 bg-transparent font-mono text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
                placeholder="help"
                aria-label="Terminal command"
                dir="ltr"
              />
            </form>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["help", "artifacts", "resume", "email", "github", "linkedin", "download"].map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => runCommand(command)}
                className="rounded-full border border-[var(--color-line)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
                dir="ltr"
              >
                {command}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            {t.contact.directEmail}{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-ink)]" dir="ltr">
              {siteConfig.email}
            </a>
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
