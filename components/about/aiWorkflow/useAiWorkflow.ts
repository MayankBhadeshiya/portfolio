"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ease = [0.16, 1, 0.3, 1] as const;

export function useAiWorkflow() {
  const reduceMotion = usePrefersReducedMotion();

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 0.8, ease, delay: index * 0.1 },
        };

  // Terminal lines appear one after another once the panel is in view.
  const line = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: -8 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, ease, delay: 0.4 + index * 0.18 },
        };

  return { rise, line };
}
