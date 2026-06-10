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
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>
        </div>

        <div className={styles.content}>

          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et
            l&apos;utilisation de l&apos;application mobile et du site web BloomWellness, édités par
            un développeur indépendant établi en France. En utilisant BloomWellness, vous acceptez
            sans réserve les présentes CGU.
          </p>

          <h2>2. Description du service</h2>
          <p>BloomWellness est une application de nutrition et de bien-être proposant :</p>
          <ul>
            <li>Un suivi alimentaire basé sur la base de données officielle CIQUAL (ANSES)</li>
            <li>Un coach nutritionnel propulsé par intelligence artificielle, personnalisé en français</li>
            <li>Un suivi du jeûne intermittent (protocoles 16:8, 18:6, 20:4, 14:10)</li>
            <li>Un suivi de l&apos;hydratation avec objectifs personnalisés</li>
            <li>Des recettes saines adaptées aux produits disponibles en France</li>
            <li>
              La synchronisation avec <strong>Apple Santé</strong> et <strong>Apple Watch</strong> pour
              intégrer votre activité physique réelle (pas, calories actives, poids) à votre suivi
              nutritionnel — fonctionnalité soumise à votre autorisation explicite
            </li>
            <li>
              Le <strong>suivi du cycle menstruel</strong> pour adapter les recommandations
              nutritionnelles à chaque phase du cycle — fonctionnalité soumise à votre consentement
              explicite distinct, conformément à l&apos;article 9 du RGPD
            </li>
          </ul>
          <p>
            L&apos;application est fournie à titre informatif uniquement et ne remplace en aucun cas
            un avis médical, nutritionnel ou gynécologique professionnel. En cas de condition médicale
            particulière, consultez un professionnel de santé.
          </p>

          <h2>3. Données de santé et consentements</h2>
          <p>
            L&apos;utilisation des fonctionnalités liées à Apple Santé, Apple Watch et au suivi du cycle
            menstruel est entièrement facultative et conditionnée à votre consentement explicite,
            recueilli dans l&apos;application pour chaque fonctionnalité de manière indépendante. Vous
            pouvez activer ou désactiver chacune de ces fonctionnalités à tout moment depuis les
            paramètres de l&apos;application ou depuis les réglages iOS. Le traitement de ces données est
            décrit en détail dans notre{" "}
            <Link href="/confidentialite">Politique de Confidentialité</Link>, notamment les sections
            5 (Apple HealthKit) et 6 (cycle menstruel).
          </p>

          <h2>4. Accès et inscription</h2>
          <p>
            L&apos;accès à certaines fonctionnalités nécessite la création d&apos;un compte. Vous vous engagez
            à fournir des informations exactes et à maintenir la confidentialité de vos identifiants.
            Vous êtes seul responsable des actions effectuées depuis votre compte. Tout accès non
            autorisé doit être signalé sans délai à{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>
            .
          </p>

          <h2>5. Abonnement et paiement</h2>
          <p>
            BloomWellness propose une offre gratuite et un abonnement Premium. Les conditions
            tarifaires en vigueur sont affichées dans l&apos;application avant tout achat. Les paiements
            sont traités exclusivement via l&apos;Apple App Store et soumis à ses conditions. Aucun
            remboursement ne peut être accordé par BloomWellness en dehors des politiques de
            remboursement d&apos;Apple.
          </p>

          <h2>6. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de l&apos;application et du site (textes, visuels, logo, code,
            algorithmes) est la propriété exclusive de l&apos;éditeur ou fait l&apos;objet de licences en
            sa faveur. Toute reproduction, représentation ou exploitation sans autorisation préalable
            écrite est strictement interdite. Les marques Apple, Apple Santé et Apple Watch sont la
            propriété d&apos;Apple Inc.
          </p>

          <h2>7. Limitation de responsabilité</h2>
          <p>
            L&apos;éditeur s&apos;efforce de maintenir le service disponible mais ne garantit pas une
            disponibilité ininterrompue. Les recommandations du coach IA sont générées
            automatiquement et ne constituent pas un avis médical ou nutritionnel professionnel.
            BloomWellness ne saurait être tenu responsable des dommages directs ou indirects
            résultant de l&apos;utilisation des recommandations de l&apos;application, notamment en cas
            de condition médicale préexistante. Les données synchronisées depuis Apple Santé
            dépendent de la fiabilité des capteurs et applications sources.
          </p>

          <h2>8. Modification des CGU</h2>
          <p>
            L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les
            utilisateurs seront informés des changements significatifs par notification dans
            l&apos;application ou par e-mail au moins <strong>15 jours avant leur entrée en vigueur</strong>.
            La poursuite de l&apos;utilisation du service après ce délai vaut acceptation des nouvelles CGU.
          </p>

          <h2>9. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les parties
            s&apos;efforceront de trouver une solution amiable avant tout recours judiciaire. À défaut
            d&apos;accord, les tribunaux français seront compétents.
          </p>

          <h2>10. Contact</h2>
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
