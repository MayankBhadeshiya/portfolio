"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";

const ease = [0.16, 1, 0.3, 1] as const;

export function useHero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // As the hero scrolls away the name drifts up and fades; the glow swells.
  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -180]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduceMotion ? 1 : 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.6]);

  // The one orchestrated load moment: each line of the name rises out of a mask.
  const lineReveal = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { y: "105%" },
          animate: { y: "0%" },
          transition: { duration: 1.1, ease, delay: 0.15 + index * 0.12 },
        };

  const fadeIn = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease, delay: 0.65 },
      };

  const [latestJob] = profile.experience;
  const currentRole = `${latestJob.role} ${strings.hero.roleAt} ${latestJob.company}`;

  return { ref, nameY, nameOpacity, glowScale, lineReveal, fadeIn, currentRole };
}
