"use client";

import { strings } from "@/constants/strings";
import SectionHeading from "@/components/sectionHeading";
import StackCard from "./stackCard";
import styles from "./projectsStyles.module.css";
import { useProjects } from "./useProjects";

export default function Projects() {
  const { listRef, cards, scrollYProgress } = useProjects();

  if (cards.length === 0) return null;

  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <SectionHeading
          id="work-title"
          eyebrow={strings.projects.eyebrow}
          lines={strings.projects.lines}
        />

        <ol ref={listRef} className={styles.stack}>
          {cards.map((card) => (
            <StackCard
              key={card.project.slug}
              project={card.project}
              index={card.index}
              number={card.number}
              progress={scrollYProgress}
              range={card.range}
              targetScale={card.targetScale}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
