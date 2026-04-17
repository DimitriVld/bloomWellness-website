import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "CGU — BloomWellness",
  description: "Conditions Générales d'Utilisation de l'application BloomWellness.",
};

export default function CGUPage() {
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
          <h1 className={styles.title}>Conditions Générales d&apos;Utilisation</h1>
          <p className={styles.updated}>Dernière mise à jour : avril 2026</p>
        </div>

        <div className={styles.content}>
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
            de l&apos;application mobile et du site web BloomWellness, édités par un développeur indépendant.
            En utilisant BloomWellness, vous acceptez sans réserve les présentes CGU.
          </p>

          <h2>2. Description du service</h2>
          <p>
            BloomWellness est une application de nutrition proposant :
          </p>
          <ul>
            <li>Un suivi alimentaire basé sur la base CIQUAL</li>
            <li>Un coach nutritionnel propulsé par intelligence artificielle</li>
            <li>Un suivi du jeûne intermittent</li>
            <li>Des recettes et suggestions personnalisées</li>
          </ul>
          <p>
            L&apos;application est à titre informatif uniquement et ne remplace en aucun cas un avis médical
            ou nutritionnel professionnel.
          </p>

          <h2>3. Accès et inscription</h2>
          <p>
            L&apos;accès à certaines fonctionnalités nécessite la création d&apos;un compte. Vous vous engagez à
            fournir des informations exactes et à maintenir la confidentialité de vos identifiants.
            Vous êtes seul responsable des actions effectuées depuis votre compte.
          </p>

          <h2>4. Abonnement et paiement</h2>
          <p>
            BloomWellness propose une offre gratuite et un abonnement Premium. Les conditions tarifaires
            en vigueur sont indiquées dans l&apos;application. Les paiements sont traités via les stores Apple
            App Store / Google Play et soumis à leurs conditions respectives. Aucun remboursement ne peut
            être accordé en dehors des politiques des stores.
          </p>

          <h2>5. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de l&apos;application (textes, visuels, logo, code) est la propriété
            exclusive de l&apos;éditeur. Toute reproduction ou utilisation sans autorisation préalable est
            strictement interdite.
          </p>

          <h2>6. Limitation de responsabilité</h2>
          <p>
            L&apos;éditeur s&apos;efforce de maintenir le service disponible mais ne garantit pas une disponibilité
            ininterrompue. BloomWellness ne saurait être tenu responsable des dommages directs ou indirects
            résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser l&apos;application.
          </p>

          <h2>7. Modification des CGU</h2>
          <p>
            L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs
            seront informés des changements significatifs par notification dans l&apos;application ou par email.
            La poursuite de l&apos;utilisation du service vaut acceptation des nouvelles CGU.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les parties s&apos;efforceront
            de trouver une solution amiable avant tout recours judiciaire.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux présentes CGU :{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
