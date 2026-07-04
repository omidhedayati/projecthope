"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(136,247,255,.16),transparent_58%)]" />
  ),
});

export function HeroSceneLoader() {
  return <HeroScene />;
}
