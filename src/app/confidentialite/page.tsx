import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Confidentialité — BloomWellness",
  description: "Politique de confidentialité et traitement des données personnelles de BloomWellness.",
};

export default function ConfidentialitePage() {
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
          <h1 className={styles.title}>Politique de Confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : avril 2026</p>
        </div>

        <div className={styles.content}>
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est l&apos;éditeur indépendant de l&apos;application
            BloomWellness. Pour toute question : <a href="mailto:contactbloomwellness@bloom-nutri.com">contactbloomwellness@bloom-nutri.com</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>BloomWellness collecte les données suivantes :</p>
          <ul>
            <li>Données de compte : adresse email, prénom</li>
            <li>Données de santé : poids, taille, objectifs nutritionnels</li>
            <li>Données d&apos;utilisation : aliments consommés, repas enregistrés, plages de jeûne</li>
            <li>Données techniques : type d&apos;appareil, version de l&apos;OS, identifiants anonymes</li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Fournir et personnaliser les fonctionnalités de l&apos;application</li>
            <li>Améliorer les recommandations du coach IA</li>
            <li>Assurer la sécurité et le bon fonctionnement du service</li>
            <li>Envoyer des communications liées au service (avec votre consentement)</li>
          </ul>

          <h2>4. Base légale</h2>
          <p>
            Le traitement est fondé sur l&apos;exécution du contrat (utilisation du service),
            votre consentement explicite pour les données de santé, et nos intérêts légitimes
            pour l&apos;amélioration du service.
          </p>

          <h2>5. Conservation des données</h2>
          <p>
            Vos données sont conservées pendant toute la durée de votre utilisation du service,
            puis supprimées dans un délai de 30 jours après la clôture de votre compte, sauf
            obligation légale contraire.
          </p>

          <h2>6. Partage des données</h2>
          <p>
            Vos données ne sont pas vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Nos prestataires techniques (hébergement, analytics) dans le strict cadre de leurs missions</li>
            <li>Les autorités compétentes sur demande légale</li>
          </ul>

          <h2>7. Vos droits (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition et de limitation du traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>
            . Vous pouvez également déposer une réclamation auprès de la{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              CNIL
            </a>
            .
          </p>

          <h2>8. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, perte ou destruction.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Le site web utilise des cookies techniques nécessaires à son fonctionnement. Aucun
            cookie publicitaire ou de tracking tiers n&apos;est utilisé.
          </p>
        </div>
      </div>
    </div>
  );
}
