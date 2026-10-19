"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useRef, useState } from "react";
import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import type { BuildPhases } from "./buildScene/buildSceneTypes";

const ease = [0.16, 1, 0.3, 1] as const;

// Where each phase plays across the pinned hero's scroll (0 → 1).
// Sketch is on screen from the start; code, build and ship follow in turn.
const CODE: [number, number] = [0.08, 0.38];
const DATA: [number, number] = [0.42, 0.7];
const SHIP: [number, number] = [0.74, 0.9];

const stepAt = (p: number) => (p < CODE[0] ? 0 : p < DATA[0] ? 1 : p < SHIP[0] ? 2 : 3);

export function useHero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);

  const code = useTransform(scrollYProgress, CODE, [0, 1]);
  const data = useTransform(scrollYProgress, DATA, [0, 1]);
  const ship = useTransform(scrollYProgress, SHIP, [0, 1]);
  // The React atom behind the scene turns a third of the way round.
  const spin = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const done = useMotionValue(1);
  const still = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = stepAt(p);
    if (next !== step) setStep(next);
  });

  // With reduced motion there's no pin: show the finished, shipped app.
  const phases: BuildPhases = reduceMotion
    ? { code: done, data: done, ship: done, spin: still }
    : { code, data, ship, spin };

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay: 0.05 + index * 0.08 },
        };

  return {
    ref,
    phases,
    step: reduceMotion ? 3 : step,
    progress: reduceMotion ? done : scrollYProgress,
    reduceMotion,
    rise,
  };
}
