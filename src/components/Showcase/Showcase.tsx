"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./Showcase.module.css";

const SLIDES = [
  {
    src: "/images/screenshots/dashboard.png",
    alt: "Tableau de bord BloomWellness",
    label: "Vue d'ensemble",
    title: "Tout ton suivi, d'un coup d'œil.",
    description:
      "Calories, macros, hydratation et objectifs du jour — concentrés en un seul écran clair. Plus besoin de chercher, tout est là dès l'ouverture de l'app.",
  },
  {
    src: "/images/screenshots/coach.png",
    alt: "Coach Nutrition IA",
    label: "Intelligence artificielle",
    title: "Un coach qui te connaît vraiment.",
    description:
      "Pose tes questions en langage naturel. Le coach analyse ton historique et tes objectifs pour te donner des conseils précis, personnalisés — pas des réponses génériques.",
  },
  {
    src: "/images/screenshots/add-meal.png",
    alt: "Ajouter un repas",
    label: "Journalisation",
    title: "Ajouter un repas en quelques secondes.",
    description:
      "Photo, recherche, scan de code-barres ou saisie manuelle. La base CIQUAL garantit des données nutritionnelles fiables pour les produits français.",
  },
  {
    src: "/images/screenshots/fasting.png",
    alt: "Jeûne intermittent",
    label: "Jeûne intermittent",
    title: "Quatre protocoles, un seul timer.",
    description:
      "16:8, 18:6, 20:4 ou 14:10 — suis ton jeûne avec un timer visuel, consulte ton historique et analyse tes performances dans le temps.",
  },
  {
    src: "/images/screenshots/hydration.png",
    alt: "Hydratation",
    label: "Hydratation",
    title: "Rester hydraté, sans y penser.",
    description:
      "Objectif personnalisé, rappels intelligents, suivi de tes différentes boissons. La bonne hydratation commence par en prendre conscience.",
  },
];

const INTERVAL = 4000;
const ease = [0.23, 1, 0.32, 1] as const;

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [activeIndex]); // reset timer on manual nav

  const goTo = (i: number) => setActiveIndex(i);

  return (
    <section id="showcase" className={styles.wrapper}>
      <motion.div
        ref={sectionRef}
        className={styles.inner}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        {/* Left — phone */}
        <div className={styles.phoneSide}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.phoneFrame}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease }}
            >
              <Image
                src={SLIDES[activeIndex].src}
                alt={SLIDES[activeIndex].alt}
                width={240}
                height={480}
                className={styles.phoneImg}
                priority={activeIndex === 0}
                loading={activeIndex === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — text */}
        <div className={styles.textSide}>
          <span className={styles.sectionLabel}>L&apos;app en action</span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.textContent}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease }}
            >
              <span className={styles.slideLabel}>
                {SLIDES[activeIndex].label}
              </span>
              <h2 className={styles.slideTitle}>
                {SLIDES[activeIndex].title}
              </h2>
              <p className={styles.slideDesc}>
                {SLIDES[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots + arrows */}
          <div className={styles.nav}>
            <button
              className={styles.arrow}
              onClick={() => goTo((activeIndex - 1 + SLIDES.length) % SLIDES.length)}
              aria-label="Précédent"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <div className={styles.dots} role="tablist">
              {SLIDES.map((slide, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={slide.label}
                  className={styles.dot}
                  onClick={() => goTo(i)}
                >
                  <motion.span
                    className={styles.dotInner}
                    animate={{
                      width: i === activeIndex ? 28 : 8,
                      background:
                        i === activeIndex
                          ? "var(--lime)"
                          : "rgba(255,255,255,0.25)",
                    }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  />
                </button>
              ))}
            </div>

            <button
              className={styles.arrow}
              onClick={() => goTo((activeIndex + 1) % SLIDES.length)}
              aria-label="Suivant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
