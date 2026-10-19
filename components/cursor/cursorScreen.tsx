"use client";

import { motion } from "motion/react";
import styles from "./cursorStyles.module.css";
import { useCursor } from "./useCursor";

export default function Cursor() {
  const { enabled, x, y, hovering } = useCursor();

  if (!enabled) return null;

  return (
    <motion.div
      className={hovering ? `${styles.cursor} ${styles.ring}` : styles.cursor}
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}
