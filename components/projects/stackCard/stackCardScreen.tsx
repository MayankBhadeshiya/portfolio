"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import LockedPreview from "../lockedPreview";
import styles from "./stackCardStyles.module.css";
import type { StackCardProps } from "./stackCardTypes";
import { useStackCard } from "./useStackCard";

const s = strings.projects;

export default function StackCard({
  project,
  index,
  number,
  progress,
  range,
  targetScale,
}: StackCardProps) {
  const { scale, itemStyle, metrics } = useStackCard({
    project,
    index,
    progress,
    range,
    targetScale,
  });

  return (
    <li className={styles.item} style={itemStyle}>
      <motion.article
        className={`card accent-${project.discipline} ${styles.card}`}
        style={{ scale }}
      >
        <div className={styles.main}>
          <div className={styles.head}>
            <span className={`display ${styles.number}`}>{number}</span>
            <span className="chip">{project.category}</span>
          </div>
          <h3 className={`display ${styles.title}`}>{project.name}</h3>
          <p className={styles.description}>{project.summary}</p>
          <ul className={styles.tech}>
            {project.stack.map((t) => (
              <li key={t}>
                <ToolLogo name={t} label />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.side}>
          {project.client && <LockedPreview project={project} />}
          <dl className={styles.metrics}>
            {metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <Link className={styles.view} href={`/projects/${project.slug}`}>
            {s.view}
          </Link>
        </div>
      </motion.article>
    </li>
  );
}
