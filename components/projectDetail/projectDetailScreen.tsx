"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ProjectCover from "@/components/projects/projectCover";
import styles from "./projectDetailStyles.module.css";
import type { ProjectDetailProps } from "./projectDetailTypes";
import { useProjectDetail } from "./useProjectDetail";

const s = strings.projectDetail;

export default function ProjectDetail({ project, next }: ProjectDetailProps) {
  const { nameReveal, rise, metaRows, links } = useProjectDetail(project);

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.back} href="/#projects">
          {s.back}
        </Link>
        <h1 className={styles.name}>
          <span className={styles.mask}>
            <motion.span className={styles.line} {...nameReveal}>
              {project.name}
            </motion.span>
          </span>
        </h1>
        <motion.p className={styles.tagline} {...rise(0)}>
          {project.tagline}
        </motion.p>
      </header>

      <motion.div className={styles.cover} {...rise(1)}>
        <ProjectCover project={project} size="hero" />
      </motion.div>

      <motion.dl className={styles.meta} {...rise(0)}>
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
        <Link className={styles.next} href={`/projects/${next.slug}`}>
          <span className={styles.nextLabel}>{s.next}</span>
          <span className={styles.nextName}>{next.name}</span>
        </Link>
      )}
    </article>
  );
}
