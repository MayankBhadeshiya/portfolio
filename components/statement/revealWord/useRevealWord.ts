"use client";

import { useReducedMotion, useTransform, type MotionValue } from "motion/react";

const DIM = 0.16;

// Brings the word from dim to full strength across its slice of the scroll.
export function useRevealWord(progress: MotionValue<number>, range: [number, number]) {
  const reduceMotion = useReducedMotion();
  const opacity = useTransform(progress, range, [reduceMotion ? 1 : DIM, 1]);
  return { opacity };
}
