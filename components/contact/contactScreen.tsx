"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./contactStyles.module.css";
import { useContact } from "./useContact";

export default function Contact() {
  const { links, year, rise } = useContact();

  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <motion.h2 className={styles.title} {...rise(0)}>
          {strings.contact.title}
        </motion.h2>

        <motion.ul className={styles.links} {...rise(1)}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target={link.external ? "_blank" : undefined} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <p className={styles.foot}>
          {strings.contact.copyright} {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
