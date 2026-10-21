import Image from "next/image";
import { strings } from "@/constants/strings";
import styles from "./awsBadgeStyles.module.css";
import { useAwsBadge } from "./useAwsBadge";

const s = strings.hero.aws;

// The official AWS Certified Solutions Architect – Associate badge (from
// Credly), linking to its public verification page.
export default function AwsBadge() {
  const { url, image } = useAwsBadge();
  if (!url) return null;

  return (
    <a className={styles.badge} href={url} target="_blank" rel="noreferrer" aria-label={s.label}>
      <Image className={styles.image} src={image} alt="" width={120} height={120} priority />
      <span className={styles.text}>
        <span className={styles.eyebrow}>{s.eyebrow}</span>
        <span className={styles.title}>{s.title}</span>
      </span>
      <span className={styles.verify}>{s.verify}</span>
    </a>
  );
}
