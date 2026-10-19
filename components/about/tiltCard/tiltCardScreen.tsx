"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import styles from "./tiltCardStyles.module.css";
import { useTiltCard } from "./useTiltCard";

// A 3D "build badge" that leans toward the pointer, with a soft spotlight
// following it. The three bars are the three disciplines.
export default function TiltCard() {
  const {
    ref,
    rotateX,
    rotateY,
    spotlight,
    onPointerMove,
    onPointerLeave,
    monogram,
    current,
    disciplines,
  } = useTiltCard();

  return (
    <div className={styles.stage}>
      <motion.div
        ref={ref}
        className={styles.card}
        style={{ rotateX, rotateY }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        data-cursor
      >
        <motion.div className={styles.spotlight} style={{ background: spotlight }} />

        <div className={styles.top}>
          <span className={styles.label}>{strings.about.cardLabel}</span>
          <span className={styles.hole} aria-hidden="true" />
        </div>

        <p className={`display ${styles.monogram}`} aria-hidden="true">
          {monogram}
        </p>

        <ul className={styles.bars}>
          {disciplines.map((d) => (
            <li key={d.key} className={`accent-${d.key} ${styles.bar}`}>
              <span className={styles.barFill} />
              <span className={styles.barLabel}>{d.name}</span>
              <span className={styles.barLogos}>
                {d.tools.slice(0, 2).map((t) => (
                  <ToolLogo key={t} name={t} size={13} />
                ))}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p className={`display ${styles.name}`}>{profile.name}</p>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.current}>
            <span>{strings.about.cardCurrent}</span>
            <strong>{current}</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
