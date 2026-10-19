"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import SectionHeading from "@/components/sectionHeading";
import styles from "./experienceStyles.module.css";
import { useExperience } from "./useExperience";

const s = strings.experience;

export default function Experience() {
  const { listRef, lineScale, itemMotion } = useExperience();

  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <SectionHeading id="experience-title" eyebrow={s.eyebrow} lines={s.lines} accent="frontend" />

      <div className={styles.timeline}>
        <span className={styles.track} aria-hidden="true" />
        <motion.span className={styles.line} style={{ scaleY: lineScale }} aria-hidden="true" />

        <ol ref={listRef} className={styles.jobs}>
          {profile.experience.map((job, i) => (
            <motion.li key={job.company} className={styles.job} {...itemMotion(i)}>
              <span className={styles.period}>{job.period}</span>
              <span className={styles.dot} aria-hidden="true" />
              <div className={`card accent-ink ${styles.jobCard}`}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                {job.summary && <p className={styles.summary}>{job.summary}</p>}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className={styles.creds}>
        <motion.div className={`card accent-frontend ${styles.credCard}`} {...itemMotion(0)}>
          <h3 className={styles.credTitle}>{s.certifications}</h3>
          <ul className={styles.credList}>
            {profile.certifications.map((c) => (
              <li key={c.url}>
                <a className={styles.credLink} href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
                <span className={styles.credMeta}>
                  {c.issuer} · {s.verify}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className={`card accent-mobile ${styles.credCard}`} {...itemMotion(1)}>
          <h3 className={styles.credTitle}>{s.education}</h3>
          <ul className={styles.credList}>
            <li>
              {profile.education.degree}, {profile.education.school}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
