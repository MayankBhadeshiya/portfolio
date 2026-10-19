import type { MotionValue } from "motion/react";
import type { Project } from "@/data/profile";

export type StackCardProps = {
  project: Project;
  index: number;
  number: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

export type UseStackCardArgs = Omit<StackCardProps, "number">;

export type StackCardMetric = {
  label: string;
  value: string;
};
