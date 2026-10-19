"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { strings } from "@/constants/strings";
import ProjectCover from "./projectCover";
import styles from "./projectsStyles.module.css";
import { useProjects } from "./useProjects";

export default function Projects() {
  const {
    projects,
    floating,
    activeProject,
    cardX,
    cardY,
    cardMotion,
    rowMotion,
    onRowEnter,
    onListLeave,
    onPointerMove,
  } = useProjects();

  if (projects.length === 0) return null;

  return (
    <section
      id="projects"
      className={floating ? `${styles.section} ${styles.floating}` : styles.section}
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className={styles.title}>
        {strings.projects.title}
      </h2>

      <ul className={styles.list} onPointerMove={onPointerMove} onPointerLeave={onListLeave}>
        {projects.map((project, i) => (
          <motion.li key={project.slug} className={styles.item} {...rowMotion(i)}>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.row}
              onPointerEnter={() => onRowEnter(project.slug)}
              aria-label={`${strings.projects.view}: ${project.name}`}
            >
              <div className={styles.inlineCover}>
                <ProjectCover project={project} />
              </div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.tagline}>{project.tagline}</p>
              <ul className={styles.meta}>
                {project.platforms.map((p) => (
                  <li key={p}>{p}</li>
                ))}
                {project.stack.slice(0, 3).map((s) => (
                  <li key={s} className={styles.stackItem}>
                    {s}
                  </li>
                ))}
              </ul>
            </Link>
          </motion.li>
        ))}
      </ul>

      {floating && (
        <motion.div className={styles.float} style={{ x: cardX, y: cardY }} aria-hidden="true">
          <AnimatePresence mode="popLayout">
            {activeProject && (
              <motion.div key={activeProject.slug} {...cardMotion}>
                <ProjectCover project={activeProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
