"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Button from "@/components/ui/Button/Button";
import { CheckIcon } from "@/components/ui/Icons";
import styles from "./Pricing.module.scss";

const PLANS = [
  {
    name: "Gratuit",
    price: "0€",
    period: "",
    note: "Pour découvrir",
    featured: false,
    badge: null,
    features: [
      "Suivi calories & macros",
      "20 messages Coach IA / mois",
      "Timer jeûne basique",
      "Historique 7 jours",
    ],
    cta: null,
  },
  {
    name: "Annuel Fondateur",
    price: "19,99€",
    period: "/an",
    note: "Tarif de lancement, pour toujours",
    featured: true,
    badge: "Early Adopter",
    features: [
      "Tout illimité",
      "Coach IA illimité",
      "Scanner photo IA",
      "Widgets iOS",
      "Historique complet",
      "Protocoles jeûne avancés",
    ],
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
      "Tout illimité",
      "Coach IA illimité",
      "Scanner photo IA",
      "Widgets iOS",
    ],
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
                  <li key={feat} className={styles.featureItem}>
                    <CheckIcon size={15} className={styles.check} />
                    <span>{feat}</span>
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
