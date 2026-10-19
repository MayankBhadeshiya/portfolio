"use client";

import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import styles from "./dashboardStyles.module.css";
import type { DashboardProps } from "./dashboardTypes";
import { useDashboard } from "./useDashboard";

const s = strings.scene;

// A Next.js admin dashboard in a browser window. Each region goes wireframe →
// empty styled skeleton (code phase) → real data (build phase).
export default function Dashboard({ data }: DashboardProps) {
  const { kpis, chart } = useDashboard(data);

  return (
    <div className={`accent-frontend ${styles.browser}`}>
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.url}>
          <ToolLogo name="Next.js" size={10} />
          {s.url}
        </span>
      </div>

      <div className={styles.app}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <span className={styles.wire} />
          <div className={styles.skin}>
            <p className={styles.brand}>
              <ToolLogo name="Next.js" size={12} />
              <span>Acme</span>
            </p>
            <ul className={styles.nav}>
              {s.dashNav.map((item, i) => (
                <li key={item} className={i === 0 ? styles.navActive : undefined}>
                  <i />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className={styles.main}>
          {/* Top bar */}
          <div className={styles.topbar}>
            <div>
              <p className={styles.title}>{s.dashTitle}</p>
              <p className={styles.subtitle}>{s.dashSubtitle}</p>
            </div>
            <div className={styles.topRight}>
              <span className={styles.search}>{s.dashSearch}</span>
              <span className={styles.avatar} />
            </div>
          </div>

          {/* KPIs */}
          <div className={styles.kpis}>
            {kpis.map((kpi) => (
              <div key={kpi.label} className={styles.kpi}>
                <span className={styles.wire} />
                <div className={styles.skin}>
                  <p className={styles.kpiLabel}>{kpi.label}</p>
                  <span className={styles.skeleton} />
                  <div className={styles.live}>
                    <motion.p className={styles.kpiValue}>{kpi.value}</motion.p>
                    <span className={styles.delta}>{kpi.delta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className={styles.chartCard}>
            <span className={styles.wire} />
            <div className={`${styles.skin} ${styles.chartSkin}`}>
              <p className={styles.cardTitle}>{s.chartTitle}</p>
              <svg className={styles.chart} viewBox={chart.viewBox} preserveAspectRatio="none">
                <path className={styles.area} d={chart.area} />
                <path className={styles.line} d={chart.line} pathLength={1} />
              </svg>
              <div className={styles.days}>
                {s.chartDays.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className={styles.tableCard}>
            <span className={styles.wire} />
            <div className={styles.skin}>
              <p className={styles.cardTitle}>{s.tableTitle}</p>
              <div className={`${styles.row} ${styles.head}`}>
                {s.tableHead.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              {s.tableRows.map((r, i) => (
                <div key={r.id} className={`${styles.row} ${styles.bodyRow}`} data-row={i}>
                  <span className={styles.mono}>{r.id}</span>
                  <span className={styles.cell}>{r.customer}</span>
                  <span className={styles.pill} data-status={r.status}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vercel deploy toast (ship) */}
      <div className={styles.toast}>
        <ToolLogo name="Vercel" size={12} tone="dark" />
        <div>
          <p className={styles.toastTitle}>{s.vercelToast}</p>
          <p className={styles.toastSub}>{s.vercelToastSub}</p>
        </div>
      </div>
    </div>
  );
}
