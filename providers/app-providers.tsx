"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function AppProviders({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      smoothWheel: true,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 48, filter: "blur(18px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: reducedMotion ? 0.2 : 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return <>{children}</>;
}
