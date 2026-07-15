export type AmbientAudioSource = {
  label: string;
  url: string;
  volume: number;
};

// IVRESS brand site soundtrack used temporarily for testing.
// Served same-origin via next.config rewrites (/audio/ivress → brand.ivress.co.jp/audio).
// Replace with your own licensed audio before production launch.
export const ambientAudioSources: AmbientAudioSource[] = [
  {
    label: "IVRESS Part 01 (test)",
    url: "/audio/ivress/music/mp3/part_01.mp3",
    volume: 0.42,
  },
  {
    label: "IVRESS Part 02 (test)",
    url: "/audio/ivress/music/mp3/part_02.mp3",
    volume: 0.4,
  },
];
