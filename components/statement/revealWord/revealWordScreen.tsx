"use client";

import { motion } from "motion/react";
import styles from "./revealWordStyles.module.css";
import type { RevealWordProps } from "./revealWordTypes";
import { useRevealWord } from "./useRevealWord";

export default function RevealWord({ children, progress, range }: RevealWordProps) {
  const { opacity } = useRevealWord(progress, range);

  return (
    <motion.span className={styles.word} style={{ opacity }}>
      {children}
    </motion.span>
  );
}
