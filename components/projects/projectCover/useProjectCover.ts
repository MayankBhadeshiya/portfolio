import type { CSSProperties } from "react";
import type { Project } from "@/data/profile";

// Points the cover's --accent at the project's color token.
export function useProjectCover(project: Project) {
  const style = { "--accent": `var(--color-${project.accent})` } as CSSProperties;
  const platformsLabel = project.platforms.join(" / ");
  return { style, platformsLabel };
}
