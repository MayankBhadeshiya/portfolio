import type { Project } from "@/data/profile";

export type ProjectDetailProps = {
  project: Project;
  next?: Project;
};

export type MetaRow = {
  label: string;
  value: string;
};

export type DetailLink = {
  label: string;
  href: string;
};
