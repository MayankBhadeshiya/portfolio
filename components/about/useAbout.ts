"use client";

import { useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import type { AboutStat } from "./aboutTypes";

const ease = [0.16, 1, 0.3, 1] as const;

export function useAbout() {
  const reduceMotion = useReducedMotion();

  const stats: AboutStat[] = [
    { label: strings.about.statSince, value: String(profile.startedYear) },
    { label: strings.about.statCompanies, value: String(profile.experience.length) },
    { label: strings.about.statCerts, value: String(profile.certifications.length) },
  ];

  const rise = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 0.8, ease, delay: 0.1 + index * 0.08 },
        };

  return { stats, rise };
}
