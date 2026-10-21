import { profile } from "@/data/profile";

// The AWS certification's public Credly link, from the résumé data.
export function useAwsBadge() {
  const cert = profile.certifications.find((c) => c.issuer === "Amazon Web Services");
  return { url: cert?.url ?? "" };
}
