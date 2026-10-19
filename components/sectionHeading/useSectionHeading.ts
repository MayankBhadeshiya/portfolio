"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ease = [0.16, 1, 0.3, 1] as const;

export function useSectionHeading() {
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

  return { rise };
}
