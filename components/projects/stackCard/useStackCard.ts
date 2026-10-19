"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { CSSProperties } from "react";
import { useTransform } from "motion/react";
import { strings } from "@/constants/strings";
import type { StackCardMetric, UseStackCardArgs } from "./stackCardTypes";

export function useStackCard({ project, index, progress, range, targetScale }: UseStackCardArgs) {
  const reduceMotion = usePrefersReducedMotion();
  const scale = useTransform(progress, range, [1, reduceMotion ? 1 : targetScale]);

  // Each card sticks a little lower than the one before, so the edges of the
  // buried cards stay visible above the current one.
  const itemStyle = { "--i": index } as CSSProperties;

  const metrics: StackCardMetric[] = [
    { label: strings.projects.platforms, value: project.platforms.join(", ") },
    { label: strings.projects.stack, value: project.stack.slice(0, 2).join(" + ") },
    { label: strings.projects.role, value: project.role },
  ];

  return { scale, itemStyle, metrics };
}
