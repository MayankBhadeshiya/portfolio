"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./navStyles.module.css";
import { useNav } from "./useNav";

export default function Nav() {
  const { scrolled, hidden, links, barMotion } = useNav();

  return (
    <motion.header
      className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={barMotion}
    >
      <nav className={styles.nav} aria-label={strings.a11y.mainNav}>
        <Link className={styles.name} href="/">
          {profile.name}
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
