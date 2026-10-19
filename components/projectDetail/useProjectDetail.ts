"use client";

import { useReducedMotion } from "motion/react";
import type { Project } from "@/data/profile";
import { strings } from "@/constants/strings";
import type { DetailLink, MetaRow } from "./projectDetailTypes";

const ease = [0.16, 1, 0.3, 1] as const;
const s = strings.projectDetail;

export function useProjectDetail(project: Project) {
  const reduceMotion = useReducedMotion();

  const nameReveal = reduceMotion
    ? {}
    : {
        initial: { y: "105%" },
        animate: { y: "0%" },
        transition: { duration: 1.1, ease, delay: 0.1 },
      };

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 0.8, ease, delay: 0.25 + index * 0.08 },
        };

  const metaRows: MetaRow[] = [
    { label: s.role, value: project.role },
    { label: s.platforms, value: project.platforms.join(", ") },
    { label: s.stack, value: project.stack.join(", ") },
  ];

  // Only links that have been filled in appear.
  const { appStore, playStore, github, live } = project.links ?? {};
  const candidates: (DetailLink | null)[] = [
    appStore ? { label: s.appStore, href: appStore } : null,
    playStore ? { label: s.playStore, href: playStore } : null,
    github ? { label: s.github, href: github } : null,
    live ? { label: s.live, href: live } : null,
  ];
  const links = candidates.filter((link): link is DetailLink => link !== null);

  return { nameReveal, rise, metaRows, links };
}
