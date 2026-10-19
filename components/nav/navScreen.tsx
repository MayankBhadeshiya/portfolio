"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./navStyles.module.css";
import { useNav } from "./useNav";

export default function Nav() {
  const { scrolled, hidden } = useNav();

  return (
    <motion.header
      className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className={styles.nav} aria-label={strings.a11y.mainNav}>
        <a className={styles.name} href="#top">
          {profile.name}
        </a>
        <ul className={styles.links}>
          <li>
            <a href="#work">{strings.nav.work}</a>
          </li>
          <li>
            <a href="#experience">{strings.nav.experience}</a>
          </li>
          <li>
            <a href="#toolkit">{strings.nav.toolkit}</a>
          </li>
          <li>
            <a href="#contact">{strings.nav.contact}</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
