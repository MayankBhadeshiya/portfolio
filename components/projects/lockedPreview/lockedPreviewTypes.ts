import type { Project } from "@/data/profile";

export type LockedPreviewProps = {
  project: Project;
  // "card" in the project stack, "hero" on the project's own page.
  size?: "card" | "hero";
};
