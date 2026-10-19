"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { profile } from "@/data/profile";
import type { StackCardData } from "./projectsTypes";

// How much smaller each buried card ends up than the one in front of it.
const SCALE_STEP = 0.05;

// Cards stick one on top of another as you scroll. While the stack builds,
// each card shrinks toward its target scale so the earlier ones recede.
export function useProjects() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });

  const total = profile.projects.length;
  const cards: StackCardData[] = profile.projects.map((project, index) => ({
    project,
    index,
    number: String(index + 1).padStart(2, "0"),
    range: [index / total, 1],
    targetScale: 1 - (total - 1 - index) * SCALE_STEP,
  }));

  return { listRef, cards, scrollYProgress };
}
