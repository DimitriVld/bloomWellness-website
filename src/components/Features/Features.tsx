"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import {
  MessageCircleIcon,
  CameraIcon,
  BarChartIcon,
  ClockIcon,
  DropletIcon,
  UtensilsIcon,
} from "@/components/ui/Icons";
import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: MessageCircleIcon,
    iconBg: "var(--green-light)",
    iconColor: "var(--green)",
    title: "Coach Nutrition IA",
    description:
      "Pose tes questions, reçois des conseils personnalisés basés sur tes objectifs et ton suivi du jour.",
  },
  {
    icon: CameraIcon,
    iconBg: "#fef3e2",
    iconColor: "#d97706",
    title: "Scanner photo IA",
    description:
      "Prends ton repas en photo. L'IA analyse et enregistre automatiquement les calories et macros.",
  },
  {
    icon: BarChartIcon,
    iconBg: "#fce7f3",
    iconColor: "#db2777",
    title: "Suivi calories & macros",
    description:
      "Base de données CIQUAL + 2M de produits. Recherche, scan code-barres, saisie manuelle.",
  },
  {
    icon: ClockIcon,
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    title: "Jeûne intermittent",
    description:
      "4 protocoles (16:8, 18:6, 20:4, 14:10), timer visuel, historique et statistiques.",
  },
  {
    icon: DropletIcon,
    iconBg: "#dbeafe",
    iconColor: "#3b82f6",
    title: "Hydratation",
    description:
      "Suivi de ta consommation d'eau avec objectif personnalisé et rappels intelligents.",
  },
  {
    icon: UtensilsIcon,
    iconBg: "var(--green-50)",
    iconColor: "var(--green)",
    title: "Recettes françaises",
    description:
      "Des recettes saines pensées pour nous, avec les produits qu'on trouve en France.",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-10%" });

  return (
    <section id="features" className="section">
      <div className="container">
        <SectionHeader label="Fonctionnalités" title="Tout ce dont tu as besoin." />

        <div ref={gridRef} className={styles.grid}>
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              >
                <div
                  className={styles.iconWrap}
                  style={{ background: feature.iconBg }}
                >
                  <span style={{ color: feature.iconColor } as React.CSSProperties} className={styles.icon}>
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
