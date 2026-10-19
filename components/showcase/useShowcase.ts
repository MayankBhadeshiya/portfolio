"use client";

import { useRef, useState, type CSSProperties } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import { profile } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;

// The section is one viewport tall per chapter. While it's pinned, scroll
// position picks the active chapter and the phone swaps to its screen.
export function useShowcase() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const chapters = profile.capabilities;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(chapters.length - 1, Math.floor(p * chapters.length));
    if (next !== active) setActive(next);
  });

  const trackStyle = { "--chapters": chapters.length } as CSSProperties;

  const textMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.45, ease },
      };

  const screenMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: "12%", scale: 0.96 },
        animate: { opacity: 1, y: "0%", scale: 1 },
        exit: { opacity: 0, y: "-8%", scale: 0.98 },
        transition: { duration: 0.6, ease },
      };

  return {
    ref,
    chapters,
    active,
    chapter: chapters[active],
    progressScale,
    trackStyle,
    textMotion,
    screenMotion,
  };
}
