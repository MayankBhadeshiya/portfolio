"use client";

import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import SectionHeading from "@/components/sectionHeading";
import ToolLogo from "@/components/toolLogo";
import styles from "./skillsStyles.module.css";
import { useSkills } from "./useSkills";

export default function Skills() {
  const { groups, rise } = useSkills();

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow={strings.skills.eyebrow}
        lines={strings.skills.lines}
        accent="backend"
      />

      <div className={styles.bento}>
        {groups.map((group, i) => (
          <motion.div
            key={group.name}
            className={`card ${group.accentClass} ${styles.card}`}
            style={group.style}
            {...rise(i)}
          >
            <div className={styles.head}>
              <h3 className={styles.name}>{group.name}</h3>
              <span className={styles.count}>
                {group.skills.length} {strings.skills.countSuffix}
              </span>
            </div>
            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <ToolLogo name={skill} label />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
