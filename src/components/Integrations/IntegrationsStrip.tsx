"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeartIcon, WatchIcon, BarChartIcon, ScaleIcon } from "@/components/ui/Icons";
import styles from "./IntegrationsStrip.module.scss";

// TODO: Replace HeartIcon/WatchIcon with official Apple assets once retrieved
// Apple HIG resources: https://developer.apple.com/design/human-interface-guidelines/
const INTEGRATIONS: Array<{
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  soon: boolean;
}> = [
  { icon: HeartIcon, label: "Apple Santé", soon: false },
  { icon: WatchIcon, label: "Apple Watch", soon: false },
  { icon: BarChartIcon, label: "Base CIQUAL / ANSES", soon: false },
  { icon: ScaleIcon, label: "Balance Bloom", soon: true },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function IntegrationsStrip() {
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(innerRef, { once: true, margin: "-10%" });

  return (
    <section className={styles.strip}>
      <div ref={innerRef} className={`container ${styles.inner}`}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className={styles.title}>Au cœur de ton écosystème</h2>
          <p className={styles.subtitle}>Tes données réunies au bon endroit.</p>
        </motion.div>

        <div className={styles.items}>
          {INTEGRATIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className={styles.item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.08 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} />
                </div>
                <span className={styles.label}>{item.label}</span>
                {item.soon && (
                  <span className={styles.soon}>Bientôt</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
