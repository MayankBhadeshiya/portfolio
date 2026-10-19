"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./experienceStyles.module.css";
import { useExperience } from "./useExperience";

export default function Experience() {
  const { listRef, lineScale, itemMotion } = useExperience();

  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title}>
        {strings.experience.title}
      </h2>

      <div className={styles.grid}>
        <div className={styles.timelineWrap}>
          <motion.span className={styles.line} style={{ scaleY: lineScale }} aria-hidden="true" />
          <ol ref={listRef} className={styles.timeline}>
            {profile.experience.map((job, i) => (
              <motion.li key={job.company} className={styles.job} {...itemMotion(i)}>
                <span className={styles.period}>{job.period}</span>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                {job.summary && <p className={styles.summary}>{job.summary}</p>}
              </motion.li>
            ))}
          </ol>
        </div>

        <aside className={styles.aside}>
          <motion.div {...itemMotion(0)}>
            <h3 className={styles.asideTitle}>{strings.credentials.title}</h3>
            <ul className={styles.asideList}>
              {profile.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...itemMotion(1)}>
            <h3 className={styles.asideTitle}>{strings.experience.education}</h3>
            <ul className={styles.asideList}>
              <li>
                {profile.education.degree}, {profile.education.school}
              </li>
            </ul>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
