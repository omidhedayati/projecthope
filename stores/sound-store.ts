"use client";

import { create } from "zustand";

type SoundState = {
  enabled: boolean;
  toggleSound: () => void;
  setSound: (enabled: boolean) => void;
};

export const useSoundStore = create<SoundState>((set) => ({
  enabled: false,
  toggleSound: () => set((state) => ({ enabled: !state.enabled })),
  setSound: (enabled) => set({ enabled }),
}));
