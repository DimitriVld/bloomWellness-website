"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import { AppleIcon, CheckIcon } from "@/components/ui/Icons";
import styles from "./Hero.module.scss";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const phone1Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const phone2Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        {/* Left — content */}
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <CheckIcon size={14} className={styles.badgeIcon} />
            Pensée par un utilisateur, pour les utilisateurs
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            Ta nutrition,
            <br />
            <em className={styles.accent}>enfin</em> bien conseillée.
          </motion.h1>

          <motion.p
            className={`${styles.subtitle} body-text`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            Coach IA personnalisé, suivi calories avec la base CIQUAL, jeûne
            intermittent, recettes françaises ! Tout ce qu&apos;il te manquait,
            dans une seule app.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <Button
              variant="primary"
              href="#pricing"
              icon={<AppleIcon size={18} />}
            >
              Télécharger sur l&apos;App Store
            </Button>
            <Button variant="outline" href="#story">
              Découvrir l&apos;histoire
            </Button>
          </motion.div>
        </div>

        {/* Right — phones */}
        <motion.div
          className={styles.phones}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          aria-hidden="true"
        >
          <motion.div
            className={styles.phoneWrapper1}
            style={{ y: phone1Y }}
          >
            <div className={styles.phone}>
              <Image
                src="/images/screenshots/dashboard.png"
                alt="Tableau de bord BloomWellness"
                width={240}
                height={480}
                className={styles.phoneImg}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.phoneWrapper2}
            style={{ y: phone2Y }}
          >
            <div className={styles.phone}>
              <Image
                src="/images/screenshots/coach.png"
                alt="Coach Nutrition IA"
                width={240}
                height={480}
                className={styles.phoneImg}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
