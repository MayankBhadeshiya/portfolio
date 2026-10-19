"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import SectionHeading from "@/components/sectionHeading";
import styles from "./contactStyles.module.css";
import { useContact } from "./useContact";

const s = strings.contact;

export default function Contact() {
  const { links, year, rise } = useContact();

  return (
    <footer id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionHeading id="contact-title" eyebrow={s.eyebrow} lines={s.lines} accent="mobile" />
          <motion.p className={styles.body} {...rise(0)}>
            {s.body}
          </motion.p>
        </div>

        <motion.ul className={`card accent-mobile ${styles.panel}`} {...rise(1)}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                className={styles.row}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className={styles.label}>{link.label}</span>
                <span className={styles.value}>{link.value}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className={styles.foot}>
        <span>
          {s.copyright} {year} {profile.name}
        </span>
        <span>{s.builtWith}</span>
      </div>
    </footer>
  );
}
