"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { LenisOptions } from "lenis";

const options: LenisOptions = {
  lerp: 0.09,
  anchors: true,
};

// Smooth scrolling is skipped entirely for people who ask for reduced motion.
export function useSmoothScroll() {
  const reduceMotion = usePrefersReducedMotion();
  return { enabled: !reduceMotion, options };
}
