"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import SectionHeading from "@/components/sectionHeading";
import ToolLogo from "@/components/toolLogo";
import TiltCard from "./tiltCard";
import styles from "./aboutStyles.module.css";
import { useAbout } from "./useAbout";

export default function About() {
  const { stats, rise } = useAbout();

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <SectionHeading
            id="about-title"
            eyebrow={strings.about.eyebrow}
            lines={strings.about.lines}
            accent="mobile"
          />

          <motion.p className={styles.body} {...rise(0)}>
            {profile.now}
          </motion.p>

          <motion.dl className={styles.stats} {...rise(1)}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.label}</dt>
                <dd className="display">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className={styles.domains} {...rise(2)}>
            <p className={styles.domainsLabel}>{strings.about.domainsLabel}</p>
            <ul>
              {profile.domains.map((d) => (
                <li key={d} className="chip">
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div className={styles.cardCol} {...rise(1)}>
          <TiltCard />
        </motion.div>
      </div>

      <ul className={styles.disciplines}>
        {profile.disciplines.map((d, i) => (
          <motion.li
            key={d.key}
            className={`card accent-${d.key} ${styles.discipline}`}
            {...rise(2 + i)}
          >
            <h3 className={styles.disciplineName}>{d.name}</h3>
            <p className={styles.disciplineBody}>{d.body}</p>
            <ul className={styles.tools}>
              {d.tools.map((t) => (
                <li key={t}>
                  <ToolLogo name={t} label />
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
