"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Button from "@/components/ui/Button/Button";
import { CheckIcon, XIcon } from "@/components/ui/Icons";
import styles from "./Pricing.module.scss";

type Feature = { label: string; locked?: boolean };

const PLANS = [
  {
    name: "Gratuit",
    price: "0€",
    period: "",
    note: "Pour découvrir",
    featured: false,
    badge: null,
    features: [
      { label: "Suivi calories & macros" },
      { label: "20 messages Coach IA / mois" },
      { label: "Timer jeûne basique" },
      { label: "Historique 7 jours" },
    ] as Feature[],
    cta: null,
  },
  {
    name: "Annuel Fondateur",
    price: "19,99€",
    period: "/an",
    note: "Tarif de lancement, pour toujours",
    featured: true,
    badge: "Prix fondateur",
    features: [
      { label: "Tout illimité" },
      { label: "Coach IA illimité" },
      { label: "Scanner photo IA" },
      { label: "Historique complet" },
      { label: "Protocoles jeûne avancés" },
    ] as Feature[],
    cta: "Choisir ce plan",
  },
  {
    name: "Mensuel",
    price: "3,99€",
    period: "/mois",
    note: "Sans engagement",
    featured: false,
    badge: null,
    features: [
      { label: "Tout illimité" },
      { label: "Coach IA illimité" },
      { label: "Scanner photo IA" },
      { label: "Historique complet" },
      { label: "Protocoles jeûne avancés" },
    ] as Feature[],
    cta: null,
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Pricing() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-10%" });

  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeader
          label="Tarifs"
          title="Commence gratuitement."
          subtitle="L'essentiel est gratuit. Passe en Premium pour tout débloquer."
        />

        <div ref={gridRef} className={styles.grid}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              {plan.badge && (
                <span className={styles.badge}>{plan.badge}</span>
              )}

              <p className={styles.planName}>{plan.name}</p>

              <div className={styles.priceRow}>
                <span className={styles.priceAmount}>{plan.price}</span>
                {plan.period && (
                  <span className={styles.pricePeriod}>{plan.period}</span>
                )}
              </div>
              <p className={styles.priceNote}>{plan.note}</p>

              <div className={styles.divider} />

              <ul className={styles.featureList}>
                {plan.features.map((feat) => (
                  <li
                    key={feat.label}
                    className={`${styles.featureItem} ${feat.locked ? styles.featureItemLocked : ""}`}
                  >
                    {feat.locked ? (
                      <XIcon size={15} className={styles.cross} />
                    ) : (
                      <CheckIcon size={15} className={styles.check} />
                    )}
                    <span>{feat.label}</span>
                  </li>
                ))}
              </ul>

              {plan.cta && (
                <Button variant="green" fullWidth href="#contact">
                  {plan.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
