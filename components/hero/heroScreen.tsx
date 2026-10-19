"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./heroStyles.module.css";
import { useHero } from "./useHero";

export default function Hero() {
  const { ref, nameY, nameOpacity, glowScale, lineReveal, fadeIn, currentRole } = useHero();

  return (
    <section id="top" ref={ref} className={styles.hero}>
      <motion.div className={styles.glow} style={{ scale: glowScale }} aria-hidden="true" />

      <motion.h1 className={styles.name} style={{ y: nameY, opacity: nameOpacity }}>
        {[profile.firstName, profile.lastName].map((line, i) => (
          <span key={line} className={styles.mask}>
            <motion.span className={styles.line} {...lineReveal(i)}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.div className={styles.footer} {...fadeIn}>
        <p className={styles.intro}>{profile.intro}</p>
        <div className={styles.side}>
          <p className={styles.role}>{currentRole}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">
              {strings.hero.getInTouch}
            </a>
            <a
              className={styles.secondary}
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              {strings.hero.viewGithub}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
