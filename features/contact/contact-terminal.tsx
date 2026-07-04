"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig, terminalCommands } from "@/lib/site-data";

type Line = {
  kind: "input" | "output";
  value: string;
};

const initialLines: Line[] = [
  { kind: "output", value: "Project Hope terminal ready." },
  { kind: "output", value: "Type `help` to explore commands." },
];

export function ContactTerminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commandMap = useMemo(
    () => new Map(terminalCommands.map((item) => [item.command, item])),
    [],
  );

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines(initialLines);
      return;
    }

    const match = commandMap.get(command);
    const response = match?.response ?? [`Command not found: ${command}`, "Type `help` for options."];

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
    <section id="contact" className="relative px-4 py-28 md:px-6 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeader eyebrow="Contact" title="Talk to the portfolio like a system.">
          The terminal is not decoration. It exposes routes through the portfolio: projects,
          resume, social links, contact details, and hidden developer mode.
        </SectionHeader>

        <GlassPanel className="min-h-[34rem]">
          <div
            className="h-full w-full text-left"
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
              />
            </form>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["help", "projects", "resume", "email", "github", "linkedin", "download"].map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => runCommand(command)}
                className="rounded-full border border-[var(--color-line)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              >
                {command}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Direct email placeholder: <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-ink)]">{siteConfig.email}</a>
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
