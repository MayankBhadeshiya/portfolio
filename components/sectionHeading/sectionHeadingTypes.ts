import type { DisciplineKey } from "@/data/profile";

export type SectionHeadingProps = {
  // id for the <h2>, so the section can point aria-labelledby at it.
  id: string;
  eyebrow: string;
  lines: readonly string[];
  accent?: DisciplineKey | "ink";
};
