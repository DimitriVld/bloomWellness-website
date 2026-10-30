import Button from "@/components/ui/Button/Button";
import { APP_STORE_URL } from "@/lib/site";
import styles from "./Pricing.module.scss";

const FREE_FEATURES = [
  "Calories, macros, eau et poids",
  "Recherche et scan du code-barres",
  "Séance libre, historique et records",
  "Amis, bravos et défis à rejoindre",
  "20 messages au coach IA par mois",
];

const PRO_FEATURES = [
  "Coach IA illimité, nutrition et sport",
  "Programme sport et séances à la demande",
  "Scanner photo des repas",
  "Progression et historique illimités",
  "Jeûne avancé, bilan de la semaine, créer des défis",
];

export default function Pricing() {
  return (
    <section id="tarifs" className={styles.pricing}>
      {/* Ancienne ancre conservée pour les liens existants */}
      <span id="pricing" aria-hidden="true" />
      <div className="container">
        <h2 className={`h2 ${styles.title}`}>Gratuit pour commencer.</h2>
        <p className={styles.lead}>
          Bloom Pro quand tu veux, avec 14 jours d’essai. Annulable en 2 clics
          dans les réglages de ton iPhone.
        </p>
        <div className={styles.plans}>
          <article className={styles.plan}>
            <div>
              <h3 className={styles.planName}>Gratuit</h3>
              <p className={styles.price}>0 €</p>
            </div>
            <ul className={styles.list}>
              {FREE_FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Button variant="outline" href={APP_STORE_URL} external fullWidth>
                Télécharger Bloom
              </Button>
            </div>
          </article>
          <article className={`${styles.plan} ${styles.pro}`}>
            <div className={styles.proHead}>
              <h3 className={styles.planName}>Bloom Pro</h3>
              <span className={styles.badge}>14 jours offerts</span>
            </div>
            <div>
              <p className={`${styles.price} ${styles.proPrice}`}>
                39,99 €<span className={styles.period}> / an</span>
              </p>
              <p className={styles.priceNote}>
                Soit 3,33 € par mois. Ou 6,99 € par mois, sans engagement.
              </p>
            </div>
            <ul className={styles.list}>
              {PRO_FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Button variant="lime" href={APP_STORE_URL} external fullWidth>
                Commencer mes 14 jours gratuits
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
