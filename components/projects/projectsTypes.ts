import type { Project } from "@/data/profile";

export type StackCardData = {
  project: Project;
  index: number;
  // Display number, e.g. "01".
  number: string;
  // Slice of the list's scroll progress over which this card shrinks.
  range: [number, number];
  targetScale: number;
};
