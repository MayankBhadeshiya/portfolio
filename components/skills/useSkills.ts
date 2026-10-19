"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import type { BentoGroup } from "./skillsTypes";

const ease = [0.16, 1, 0.3, 1] as const;

// Column spans on the 12-column bento, in data order. Bigger groups get more room.
const SPANS = [7, 5, 4, 3, 5];

export function useSkills() {
  const reduceMotion = useReducedMotion();

  const groups: BentoGroup[] = profile.skills.map((group, i) => ({
    ...group,
    accentClass: `accent-${group.discipline ?? "ink"}`,
    style: { "--span": SPANS[i] ?? 4 } as CSSProperties,
  }));

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 0.8, ease, delay: index * 0.06 },
        };

  return { groups, rise };
}
