"use client";

import { useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import type { ContactLink } from "./contactTypes";

const ease = [0.16, 1, 0.3, 1] as const;

// Shows a URL without its protocol and trailing slash, e.g. github.com/name.
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function useContact() {
  const reduceMotion = useReducedMotion();
  const { email, linkedin, github, resume } = profile.links;
  const s = strings.contact;

  // Only links that have been filled in appear.
  const candidates: (ContactLink | null)[] = [
    email ? { label: s.email, value: email, href: `mailto:${email}`, external: false } : null,
    linkedin
      ? { label: s.linkedin, value: displayUrl(linkedin), href: linkedin, external: true }
      : null,
    { label: s.github, value: displayUrl(github), href: github, external: true },
    resume ? { label: s.resume, value: displayUrl(resume), href: resume, external: true } : null,
  ];
  const links = candidates.filter((link): link is ContactLink => link !== null);

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30, filter: "blur(6px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 1, ease, delay: 0.2 + index * 0.12 },
        };

  return { links, year: new Date().getFullYear(), rise };
}
