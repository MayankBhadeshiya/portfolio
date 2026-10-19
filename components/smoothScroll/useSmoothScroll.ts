"use client";

import { useReducedMotion } from "motion/react";
import type { LenisOptions } from "lenis";

const options: LenisOptions = {
  lerp: 0.09,
  anchors: true,
};

// Smooth scrolling is skipped entirely for people who ask for reduced motion.
export function useSmoothScroll() {
  const reduceMotion = useReducedMotion();
  return { enabled: !reduceMotion, options };
}
