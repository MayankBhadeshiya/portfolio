import { profile } from "@/data/profile";

// The badge artwork is the official Credly image, saved in /public.
const IMAGE = "/badges/aws-saa.png";

// The AWS certification's public Credly link, from the résumé data.
export function useAwsBadge() {
  const cert = profile.certifications.find((c) => c.issuer === "Amazon Web Services");
  return { url: cert?.url ?? "", image: IMAGE };
}
