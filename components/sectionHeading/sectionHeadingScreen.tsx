"use client";

import { motion } from "motion/react";
import styles from "./sectionHeadingStyles.module.css";
import type { SectionHeadingProps } from "./sectionHeadingTypes";
import { useSectionHeading } from "./useSectionHeading";

// Small label over a two-line display heading; the second line takes the accent.
export default function SectionHeading({
  id,
  eyebrow,
  lines,
  accent = "frontend",
}: SectionHeadingProps) {
  const { rise } = useSectionHeading();

  return (
    <div className={`accent-${accent} ${styles.wrap}`}>
      <motion.p className="eyebrow" {...rise(0)}>
        {eyebrow}
      </motion.p>
      <motion.h2 id={id} className={`display ${styles.heading}`} {...rise(1)}>
        {lines.map((line, i) => (
          <span key={line} className={i === 0 ? styles.line : `${styles.line} ${styles.accent}`}>
            {line}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
