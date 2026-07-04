"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -120, y: -120 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = event.target as HTMLElement | null;
      setLabel(target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? "");
    };

    const onPointerLeave = () => setVisible(false);

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    >
      <div
        className="rounded-full border border-[var(--accent-cyan)] bg-[var(--color-glass)] shadow-[0_0_40px_rgba(136,247,255,.22)] backdrop-blur-md transition-all duration-200"
        style={{
          width: label ? 86 : 18,
          height: label ? 38 : 18,
        }}
      >
        {label ? (
          <span className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
