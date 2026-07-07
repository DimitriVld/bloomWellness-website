import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata: Metadata = {
  title: "Supprimer mon compte — BloomWellness",
  description:
    "Comment supprimer votre compte et vos données BloomWellness depuis l'application.",
};

export default function SupprimerMonComptePage() {
  return (
    <div className={`${styles.page} section`}>
      <div className={`container`}>
        <Link href="/" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Retour
        </Link>

        <div className={styles.header}>
          <span className={styles.label}>Compte</span>
          <h1 className={styles.title}>Supprimer mon compte</h1>
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>
        </div>

        <div className={styles.content}>

          <h2>Supprimer votre compte depuis l&apos;application</h2>
          <p>
            La suppression du compte s&apos;effectue directement depuis l&apos;application BloomWellness.
            Suivez les étapes ci-dessous :
          </p>
          <ol>
            <li>Ouvrez l&apos;application <strong>BloomWellness</strong> sur votre iPhone</li>
            <li>Appuyez sur l&apos;onglet <strong>Profil</strong> (icône en bas à droite)</li>
            <li>Appuyez sur <strong>Réglages</strong> (icône en haut à droite)</li>
            <li>Faites défiler jusqu&apos;à la section <strong>Compte</strong></li>
            <li>Appuyez sur <strong>Supprimer mon compte</strong></li>
            <li>Confirmez la suppression en suivant les instructions à l&apos;écran</li>
          </ol>
          <p>
            La suppression est <strong>immédiate et irréversible</strong>. Assurez-vous d&apos;avoir
            exporté vos données si nécessaire avant de confirmer.
          </p>

          <h2>Données supprimées</h2>
          <p>La suppression de votre compte entraîne l&apos;effacement définitif de :</p>
          <ul>
            <li>Votre adresse e-mail et prénom</li>
            <li>L&apos;intégralité de votre journal alimentaire et vos repas enregistrés</li>
            <li>Vos objectifs nutritionnels et votre historique de poids</li>
            <li>Vos plages de jeûne et données d&apos;hydratation</li>
            <li>Vos données de cycle menstruel (supprimées immédiatement)</li>
            <li>L&apos;historique de vos conversations avec le coach IA</li>
            <li>Toutes vos données de santé synchronisées depuis Apple Santé</li>
          </ul>
          <p>
            <strong>Note :</strong> les données que vous avez enregistrées dans Apple Santé
            via l&apos;application restent dans Apple Santé et relèvent de vos réglages iOS.
            Pour les supprimer, rendez-vous dans{" "}
            <strong>Réglages iOS &gt; Santé &gt; Données &gt; BloomWellness</strong>.
          </p>

          <h2>Abonnement en cours</h2>
          <p>
            La suppression du compte BloomWellness ne résilie pas automatiquement votre abonnement
            App Store. Pour éviter tout prélèvement futur, résiliez votre abonnement avant de
            supprimer votre compte depuis :{" "}
            <strong>Réglages iOS &gt; votre nom &gt; Abonnements &gt; BloomWellness</strong>.
          </p>

          <h2>Vous n&apos;avez plus accès à l&apos;application ?</h2>
          <p>
            Si vous ne pouvez pas accéder à l&apos;application pour supprimer votre compte, envoyez
            une demande de suppression par e-mail à{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>{" "}
            depuis l&apos;adresse associée à votre compte. Nous traiterons votre demande dans un délai
            de <strong>30 jours</strong> conformément au RGPD.
          </p>
          <p>
            Pour en savoir plus sur vos droits et le traitement de vos données, consultez notre{" "}
            <Link href="/confidentialite">Politique de Confidentialité</Link>.
          </p>

        </div>
      </div>
    </div>
  );
}
