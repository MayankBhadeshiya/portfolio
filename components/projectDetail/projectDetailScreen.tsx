"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import LockedPreview from "@/components/projects/lockedPreview";
import styles from "./projectDetailStyles.module.css";
import type { ProjectDetailProps } from "./projectDetailTypes";
import { useProjectDetail } from "./useProjectDetail";

const s = strings.projectDetail;

export default function ProjectDetail({ project, next }: ProjectDetailProps) {
  const { nameReveal, rise, metaRows, links } = useProjectDetail(project);

  return (
    <article className={`accent-${project.discipline} ${styles.page}`}>
      <header className={styles.header}>
        <Link className={styles.back} href="/#work">
          {s.back}
        </Link>
        <motion.p className="chip" {...rise(0)}>
          {project.category}
        </motion.p>
        <h1 className={`display ${styles.name}`}>
          <span className={styles.mask}>
            <motion.span className={styles.line} {...nameReveal}>
              {project.name}
            </motion.span>
          </span>
        </h1>
        <motion.p className={styles.tagline} {...rise(1)}>
          {project.tagline}
        </motion.p>
        <motion.ul className={styles.stack} aria-label={s.stack} {...rise(2)}>
          {project.stack.map((t) => (
            <li key={t}>
              <ToolLogo name={t} label />
            </li>
          ))}
        </motion.ul>
      </header>

      {project.client && (
        <motion.div className={styles.preview} {...rise(2)}>
          <LockedPreview project={project} size="hero" />
        </motion.div>
      )}

      <motion.dl className={`card ${styles.meta}`} {...rise(2)}>
        {metaRows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </motion.dl>

      <div className={styles.body}>
        <motion.section className={styles.block} {...rise(0)}>
          <h2 className={styles.blockTitle}>{s.overview}</h2>
          <p className={styles.summary}>{project.summary}</p>
        </motion.section>

        <motion.section className={styles.block} {...rise(1)}>
          <h2 className={styles.blockTitle}>{s.highlights}</h2>
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </motion.section>

        {links.length > 0 && (
          <motion.section className={styles.block} {...rise(2)}>
            <h2 className={styles.blockTitle}>{s.links}</h2>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </div>

      {next && (
        <Link
          className={`accent-${next.discipline} ${styles.next}`}
          href={`/projects/${next.slug}`}
        >
          <span className={styles.nextLabel}>{s.next}</span>
          <span className={`display ${styles.nextName}`}>{next.name}</span>
        </Link>
      )}
    </article>
  );
}
