import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Mentions Légales — BloomWellness",
  description: "Mentions légales de BloomWellness.",
};

export default function MentionsLegalesPage() {
  return (
    <div className={`${styles.page} section`}>
      <div className={`container`}>
        <Link href="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour
        </Link>

        <div className={styles.header}>
          <span className={styles.label}>Légal</span>
          <h1 className={styles.title}>Mentions Légales</h1>
          <p className={styles.updated}>Dernière mise à jour : avril 2026</p>
        </div>

        <div className={styles.content}>
          <h2>Éditeur</h2>
          <p>
            Le site et l&apos;application BloomWellness sont édités par un développeur indépendant.
          </p>
          <ul>
            <li><strong>Email :</strong> <a href="mailto:contactbloomwellness@bloom-nutri.com">contactbloomwellness@bloom-nutri.com</a></li>
            <li><strong>Pays :</strong> France</li>
          </ul>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par :
          </p>
          <ul>
            <li><strong>Vercel Inc.</strong></li>
            <li>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
            <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur le site et l&apos;application BloomWellness (textes,
            images, logo, code source, design) est protégé par le droit de la propriété intellectuelle
            et appartient à l&apos;éditeur ou à ses ayants droit. Toute reproduction, représentation,
            modification ou exploitation non autorisée est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données personnelles est décrit dans notre{" "}
            <Link href="/confidentialite">Politique de Confidentialité</Link>.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site utilise uniquement des cookies techniques strictement nécessaires à son
            fonctionnement. Aucun consentement n&apos;est requis pour ces cookies.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relatif à son utilisation
            sera soumis à la compétence des tribunaux français.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question :{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
