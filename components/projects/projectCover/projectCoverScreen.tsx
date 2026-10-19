import styles from "./projectCoverStyles.module.css";
import type { ProjectCoverProps } from "./projectCoverTypes";
import { useProjectCover } from "./useProjectCover";

export default function ProjectCover({ project, size = "card" }: ProjectCoverProps) {
  const { style, platformsLabel } = useProjectCover(project);

  return (
    <div
      className={size === "hero" ? `${styles.cover} ${styles.hero}` : styles.cover}
      style={style}
      aria-hidden="true"
    >
      <span className={styles.platforms}>{platformsLabel}</span>
      <span className={styles.name}>{project.name}</span>
    </div>
  );
}
