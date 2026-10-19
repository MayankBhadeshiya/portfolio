import ToolLogo from "@/components/toolLogo";
import styles from "./codeEditorStyles.module.css";
import { useCodeEditor } from "./useCodeEditor";

// VS Code-style editor; each line "types" itself in as --code goes 0 → 1.
export default function CodeEditor() {
  const { tabs, lines, editorStyle, status } = useCodeEditor();

  return (
    <div className={styles.editor} style={editorStyle}>
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <span
            key={tab.name}
            className={i === 0 ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          >
            <ToolLogo name={tab.tool} size={11} tone="dark" />
            {tab.name}
          </span>
        ))}
      </div>

      <div className={styles.body}>
        {lines.map((line) => (
          <div key={line.key} className={styles.row} style={line.style}>
            <span className={styles.gutter}>{line.number}</span>
            <span className={styles.code}>
              <span className={styles.text}>
                {line.tokens.map((token, t) => (
                  <span key={t} className={styles[token.className]}>
                    {token.text}
                  </span>
                ))}
              </span>
              <span className={styles.caret} />
            </span>
          </div>
        ))}
      </div>

      <div className={styles.status}>
        <span>{status.branch}</span>
        <span>{status.language}</span>
      </div>
    </div>
  );
}
