import type { Project } from "@/data/profile";

export type ProjectCoverProps = {
  project: Project;
  size?: "card" | "hero";
};
