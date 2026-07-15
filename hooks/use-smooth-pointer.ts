"use client";

import { useEffect, useState } from "react";

type PointerSnapshot = {
  x: number;
  y: number;
  tilt: number;
  visible: boolean;
};

type TrailPoint = { x: number; y: number };

const TRAIL_LENGTH = 6;
const INITIAL_POINTER: PointerSnapshot = { x: -120, y: -120, tilt: 0, visible: false };
const INITIAL_TRAIL: TrailPoint[] = Array.from({ length: TRAIL_LENGTH }, () => ({
  x: -120,
  y: -120,
}));

export function useSmoothPointer() {
  const [pointer, setPointer] = useState<PointerSnapshot>(INITIAL_POINTER);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>(INITIAL_TRAIL);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = INITIAL_POINTER.x;
    let y = INITIAL_POINTER.y;
    let visible = false;
    let targetX = x;
    let targetY = y;
    const trail = INITIAL_TRAIL.map((point) => ({ ...point }));
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
    };

    const onPointerLeave = () => {
      visible = false;
      setPointer((current) => ({ ...current, visible: false }));
    };

    const tick = () => {
      const nextX = x + (targetX - x) * 0.18;
      const nextY = y + (targetY - y) * 0.18;
      const vx = nextX - x;
      const tilt = Math.max(-22, Math.min(22, vx * 14));

      x = nextX;
      y = nextY;

      for (let index = trail.length - 1; index > 0; index -= 1) {
        trail[index] = { ...trail[index - 1] };
      }
      trail[0] = { x, y };

      setPointer({ x, y, tilt, visible });
      setTrailPoints(trail.map((point) => ({ ...point })));

      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return { pointer, trailPoints };
}
