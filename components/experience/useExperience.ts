"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useSpring } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

// The timeline's line draws itself as the list scrolls through the viewport.
export function useExperience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.75", "end 0.55"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const lineScale = reduceMotion ? 1 : smooth;

  const itemMotion = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -15% 0px" },
          transition: { duration: 0.8, ease, delay: index * 0.08 },
        };

  return { listRef, lineScale, itemMotion };
}
