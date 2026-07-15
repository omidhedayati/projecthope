"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArchiveWisp } from "@/components/cursor/archive-wisp";
import { useSmoothPointer } from "@/hooks/use-smooth-pointer";

type CursorMode = "default" | "artifact";

function resolveMode(target: HTMLElement | null, label: string): CursorMode {
  if (target?.closest("#projects, [data-cursor-zone='artifact']")) {
    return "artifact";
  }

  if (/artifact|inspect|open|quest/i.test(label)) {
    return "artifact";
  }

  return "default";
}

export function CustomCursor() {
  const { pointer, trailPoints } = useSmoothPointer();
  const [label, setLabel] = useState("");
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const nextLabel = target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? "";
      setLabel(nextLabel);
      setMode(resolveMode(target, nextLabel));
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  if (typeof document === "undefined" || !pointer.visible) return null;

  return createPortal(
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ isolation: "isolate" }}
      aria-hidden="true"
    >
      {trailPoints.map((point, index) => (
        <span
          key={`trail-${index}`}
          className="absolute rounded-full bg-[var(--accent-cyan)]"
          style={{
            left: point.x,
            top: point.y,
            width: 10 - index * 1.2,
            height: 10 - index * 1.2,
            opacity: 0.22 - index * 0.03,
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
        />
      ))}

      <div
        className="absolute flex items-center gap-3"
        style={{
          left: pointer.x,
          top: pointer.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="relative transition-transform duration-150"
          style={{
            transform: `scale(${mode === "artifact" ? 1.12 : label ? 1.05 : 1})`,
          }}
        >
          <ArchiveWisp mode={mode} tilt={pointer.tilt} isHovering={Boolean(label)} />
        </div>

        {label ? (
          <span className="rounded-full border border-[var(--accent-cyan)]/40 bg-[var(--color-glass)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink)] shadow-[0_0_30px_rgba(136,247,255,.18)] backdrop-blur-md">
            {mode === "artifact" && !/scan|artifact|inspect/i.test(label) ? `Scan · ${label}` : label}
          </span>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
