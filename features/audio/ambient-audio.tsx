"use client";

import { useEffect, useRef } from "react";
import { AmbientAudioEngine } from "@/lib/ambient-audio-engine";
import { useSoundStore } from "@/stores/sound-store";

export function AmbientAudio() {
  const enabled = useSoundStore((state) => state.enabled);
  const engineRef = useRef<AmbientAudioEngine | null>(null);

  useEffect(() => {
    if (!engineRef.current) {
      engineRef.current = new AmbientAudioEngine();
    }

    const engine = engineRef.current;

    if (enabled) {
      void engine.start();
      return;
    }

    void engine.stop();

    return () => {
      void engine.stop();
    };
  }, [enabled]);

  return null;
}
