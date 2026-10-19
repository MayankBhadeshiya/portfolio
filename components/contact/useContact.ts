"use client";

import { useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import type { ContactLink } from "./contactTypes";

const ease = [0.16, 1, 0.3, 1] as const;

export function useContact() {
  const reduceMotion = useReducedMotion();
  const { email, linkedin, github, resume } = profile.links;

  // Only links that have been filled in appear.
  const links: ContactLink[] = [
    email ? { label: email, href: `mailto:${email}`, external: false } : null,
    linkedin ? { label: strings.contact.linkedin, href: linkedin, external: true } : null,
    { label: strings.contact.github, href: github, external: true },
    resume ? { label: strings.contact.resume, href: resume, external: true } : null,
  ].filter((link): link is ContactLink => link !== null);

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 48 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 1, ease, delay: index * 0.12 },
        };

  return { links, year: new Date().getFullYear(), rise };
}
