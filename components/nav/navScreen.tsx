"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import styles from "./navStyles.module.css";
import { useNav } from "./useNav";

export default function Nav() {
  const { scrolled, hidden, links, contactHref, barMotion } = useNav();

  return (
    <motion.header
      className={scrolled ? `${styles.bar} ${styles.scrolled}` : styles.bar}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={barMotion}
    >
      <nav className={styles.nav} aria-label={strings.a11y.mainNav}>
        <Link className={styles.wordmark} href="/">
          {strings.nav.wordmark}
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className={styles.talk} href={contactHref}>
          {strings.nav.letsTalk}
        </a>
      </nav>
    </motion.header>
  );
}
