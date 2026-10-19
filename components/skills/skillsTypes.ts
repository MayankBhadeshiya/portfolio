import type { CSSProperties } from "react";
import type { SkillGroup } from "@/data/profile";

export type BentoGroup = SkillGroup & {
  // Global accent class, e.g. "accent-mobile".
  accentClass: string;
  // Carries the --span custom property for the grid column span.
  style: CSSProperties;
};
