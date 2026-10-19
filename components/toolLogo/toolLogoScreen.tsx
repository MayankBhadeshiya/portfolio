import styles from "./toolLogoStyles.module.css";
import type { ToolLogoProps } from "./toolLogoTypes";
import { useToolLogo } from "./useToolLogo";

// A tool's official logo, a lettered badge for tools without one, or no mark
// for concepts. With `label`, the name is shown next to it as a chip.
export default function ToolLogo({
  name,
  label = false,
  tone = "light",
  size = 16,
}: ToolLogoProps) {
  const { icon, fill, badge } = useToolLogo(name, tone);

  let mark = null;
  if (icon) {
    mark = (
      <svg
        className={styles.svg}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        role="img"
        aria-hidden={label ? true : undefined}
        aria-label={label ? undefined : name}
        style={{ fill }}
      >
        <path d={icon.path} />
      </svg>
    );
  } else if (badge) {
    mark = (
      <span
        className={styles.badge}
        style={{ minWidth: size, height: size, fontSize: size * 0.5 }}
        role={label ? undefined : "img"}
        aria-hidden={label ? true : undefined}
        aria-label={label ? undefined : name}
      >
        {badge}
      </span>
    );
  }

  if (!label) return mark;

  return (
    <span className={tone === "dark" ? `${styles.chip} ${styles.chipDark}` : styles.chip}>
      {mark}
      <span>{name}</span>
    </span>
  );
}
