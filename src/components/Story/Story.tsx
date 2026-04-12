"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Story.module.scss";

const ease = [0.23, 1, 0.32, 1] as const;

const HIGHLIGHTS = [
  { value: "1", label: "Développeur indépendant" },
  { value: "CIQUAL", label: "Base de données officielle française" },
  { value: "4", label: "Protocoles de jeûne inclus" },
];

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} id="story" className={`section ${styles.story}`}>
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span className={`label ${styles.badgeWrap}`}>
            Mon histoire
          </span>
          <h2 className={styles.title}>
            J&apos;ai créé l&apos;app
            <br />
            <em className={styles.accent}>que je ne trouvais pas.</em>
          </h2>
        </motion.div>

        {/* Body — two columns */}
        <motion.div
          className={styles.body}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          <p className={`${styles.para} body-text`}>
            Comme beaucoup, j&apos;ai voulu reprendre ma nutrition en main. Mais
            impossible de trouver une app qui donne de{" "}
            <strong>vrais bons conseils</strong>, en français, avec des aliments
            qu&apos;on mange vraiment chez nous.
          </p>
          <p className={`${styles.para} body-text`}>
            Les apps existantes&nbsp;? Des traductions approximatives, des bases
            de données américaines, et des conseils génériques. Alors j&apos;ai
            décidé de construire BloomWellness — l&apos;outil que j&apos;aurais
            voulu avoir dès le premier jour.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          <span className={styles.quoteGlyph} aria-hidden="true">&ldquo;</span>
          <p>
            Je ne suis pas une boîte de 120 personnes. Je suis un développeur
            qui utilise son propre produit tous les jours. Chaque fonctionnalité
            existe parce qu&apos;elle m&apos;a manqué.
          </p>
        </motion.blockquote>

        {/* Highlights */}
        <motion.div
          className={styles.highlights}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.32 }}
        >
          {HIGHLIGHTS.map((h) => (
            <div key={h.value} className={styles.highlight}>
              <span className={styles.highlightValue}>{h.value}</span>
              <span className={styles.highlightLabel}>{h.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
