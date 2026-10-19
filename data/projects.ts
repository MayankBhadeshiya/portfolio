import { profile, type Project } from "./profile";

export function getProject(slug: string): Project | undefined {
  return profile.projects.find((p) => p.slug === slug);
}

// The project after `slug`, wrapping back to the first one at the end.
export function getNextProject(slug: string): Project | undefined {
  const { projects } = profile;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return undefined;
  return projects[(index + 1) % projects.length];
}
