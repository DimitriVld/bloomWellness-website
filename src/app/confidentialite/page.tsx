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
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>
        </div>

        <div className={styles.content}>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est l&apos;éditeur indépendant de l&apos;application
            BloomWellness, développeur indépendant établi en France.
            Pour toute question relative à vos données : <a href="mailto:contactbloomwellness@bloom-nutri.com">contactbloomwellness@bloom-nutri.com</a>
          </p>

          <h2>2. Données collectées</h2>
          <p>BloomWellness collecte uniquement les données nécessaires au fonctionnement du service :</p>
          <ul>
            <li><strong>Données de compte :</strong> adresse e-mail, prénom</li>
            <li>
              <strong>Données de santé générales :</strong> poids, taille, âge, objectifs
              nutritionnels, calories et macronutriments consommés, repas enregistrés, plages de jeûne,
              consommation d&apos;eau
            </li>
            <li>
              <strong>Données d&apos;activité physique (via Apple Santé, avec votre autorisation) :</strong>{" "}
              nombre de pas, distance parcourue, calories actives dépensées, entraînements,
              poids et composition corporelle synchronisés depuis Apple Santé ou Apple Watch
            </li>
            <li>
              <strong>Données de cycle menstruel (avec votre consentement explicite distinct) :</strong>{" "}
              date des dernières règles, durée du cycle, symptômes renseignés manuellement,
              données de cycle synchronisées depuis Apple Santé
            </li>
            <li>
              <strong>Données techniques :</strong> type d&apos;appareil, version de l&apos;OS,
              identifiants anonymes de session, journaux d&apos;erreurs anonymisés
            </li>
          </ul>

          <h2>3. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Fournir et personnaliser les fonctionnalités de l&apos;application (suivi nutritionnel, jeûne, hydratation)</li>
            <li>
              Adapter le budget calorique journalier à votre activité réelle (données Apple Santé / Apple Watch)
            </li>
            <li>
              Personnaliser les recommandations nutritionnelles du coach IA selon votre phase de cycle
              (si cette fonctionnalité est activée avec votre consentement)
            </li>
            <li>Améliorer la pertinence des conseils du coach IA</li>
            <li>Assurer la sécurité et le bon fonctionnement du service</li>
            <li>Envoyer des communications liées au service (avec votre consentement)</li>
          </ul>

          <h2>4. Base légale du traitement</h2>
          <ul>
            <li>
              <strong>Exécution du contrat (art. 6.1.b RGPD) :</strong> données de compte, données
              nutritionnelles de base, données techniques — nécessaires à la fourniture du service.
            </li>
            <li>
              <strong>Consentement explicite (art. 9.2.a RGPD) :</strong> données de santé issues
              d&apos;Apple Santé / Apple Watch et données de cycle menstruel — ces traitements reposent
              sur un consentement libre, éclairé, spécifique et distinct, recueilli lors de
              l&apos;activation de chaque fonctionnalité dans l&apos;application. Vous pouvez retirer ce
              consentement à tout moment sans que cela affecte la licéité du traitement antérieur.
            </li>
            <li>
              <strong>Intérêts légitimes (art. 6.1.f RGPD) :</strong> amélioration du service, sécurité,
              journaux d&apos;erreurs anonymisés.
            </li>
          </ul>

          <h2>5. Données de santé Apple HealthKit</h2>
          <p>
            BloomWellness utilise l&apos;API Apple HealthKit pour lire certaines données de santé stockées
            sur votre appareil iOS. Cette fonctionnalité est soumise à votre autorisation explicite,
            accordée via la fenêtre de permissions native d&apos;iOS.
          </p>
          <p><strong>Données lues depuis Apple Santé :</strong></p>
          <ul>
            <li>Nombre de pas et distance parcourue</li>
            <li>Calories actives dépensées</li>
            <li>Poids et composition corporelle</li>
            <li>Entraînements et activités sportives</li>
            <li>Données de cycle menstruel (si autorisées séparément — voir section 6)</li>
          </ul>
          <p><strong>Restrictions absolues applicables aux données HealthKit :</strong></p>
          <ul>
            <li>Les données HealthKit ne sont <strong>jamais</strong> utilisées à des fins publicitaires ou de marketing</li>
            <li>Elles ne sont <strong>jamais</strong> vendues, louées ou cédées à des courtiers en données ou à des tiers</li>
            <li>Elles ne sont <strong>jamais</strong> utilisées pour établir un profil commercial ou à des fins sans lien avec votre suivi de santé et nutrition</li>
            <li>Elles ne sont partagées avec des prestataires techniques que dans la stricte mesure nécessaire au fonctionnement du service, et uniquement dans le cadre d&apos;un accord de sous-traitance conforme au RGPD</li>
          </ul>
          <p>
            Vous pouvez révoquer l&apos;accès d&apos;Apple Santé à tout moment dans les réglages iOS :{" "}
            <strong>Réglages &gt; Santé &gt; Sources &gt; BloomWellness</strong>.
          </p>

          <h2>6. Données de cycle menstruel</h2>
          <p>
            Les données relatives au cycle menstruel constituent des données de santé à caractère
            particulièrement sensible relevant de la <strong>santé reproductive</strong>, soumises aux
            dispositions renforcées de l&apos;article 9 du RGPD et de la loi Informatique et Libertés.
          </p>
          <ul>
            <li>
              <strong>Consentement :</strong> un consentement explicite et distinct (art. 9.2.a RGPD)
              est recueilli lors de l&apos;activation de cette fonctionnalité. Ce consentement est
              indépendant de tout autre consentement et peut être retiré à tout moment depuis les
              paramètres de l&apos;application.
            </li>
            <li>
              <strong>Données collectées :</strong> date des dernières règles, durée et régularité du
              cycle, symptômes renseignés volontairement, données de cycle synchronisées depuis Apple
              Santé (si autorisées).
            </li>
            <li>
              <strong>Utilisation :</strong> ces données sont utilisées exclusivement pour personnaliser
              les recommandations nutritionnelles selon votre phase du cycle (folliculaire, ovulatoire,
              lutéale, menstruelle). Elles ne sont jamais transmises à des tiers à d&apos;autres fins.
            </li>
            <li>
              <strong>Minimisation :</strong> dans la mesure du possible, les données de cycle sont
              traitées localement sur l&apos;appareil. Lorsqu&apos;elles sont transmises à notre coach IA,
              seules les informations strictement nécessaires à la personnalisation nutritionnelle sont
              communiquées, sous forme agrégée et anonymisée.
            </li>
            <li>
              <strong>Effacement :</strong> la suppression de votre compte entraîne la suppression
              immédiate et irrévocable de toutes vos données de cycle. Vous pouvez également supprimer
              uniquement ces données depuis Réglages &gt; Mon profil &gt; Supprimer les données de cycle.
            </li>
          </ul>

          <h2>7. Sous-traitants et transferts hors UE</h2>
          <p>
            Vos données ne sont pas vendues à des tiers. Elles peuvent être partagées avec les
            sous-traitants suivants, dans le strict cadre de leurs missions et en vertu d&apos;un contrat
            de traitement des données conforme au RGPD :
          </p>
          <ul>
            <li>
              <strong>Hébergement et infrastructure :</strong> Railway (hébergement backend, États-Unis) —
              transfert encadré par les clauses contractuelles types (CCT) de la Commission européenne
            </li>
            <li>
              <strong>Site web :</strong> Vercel Inc. (États-Unis) — transfert encadré par les CCT
            </li>
            <li>
              <strong>Intelligence artificielle — Anthropic, PBC (États-Unis) :</strong> modèles
              Claude utilisés pour le coach nutritionnel.{" "}
              <a href="https://www.anthropic.com/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer">
                Data Processing Addendum Anthropic
              </a>
              . Transfert encadré par les clauses contractuelles types (CCT).
            </li>
            <li>
              <strong>Intelligence artificielle — Google LLC (États-Unis) :</strong> modèles Gemini
              utilisés pour certaines fonctionnalités de l&apos;application.{" "}
              <a href="https://cloud.google.com/terms/data-processing-addendum" target="_blank" rel="noopener noreferrer">
                Data Processing Addendum Google
              </a>
              . Transfert encadré par les CCT.
            </li>
            <p style={{ marginTop: "8px", marginBottom: "0" }}>
              Pour ces deux prestataires, seules les données nécessaires à la génération de conseils
              nutritionnels sont transmises (historique alimentaire, objectifs, données d&apos;activité
              agrégées). Les données de cycle menstruel sont préalablement anonymisées avant
              toute transmission.
            </p>
            <li>
              <strong>Paiements in-app :</strong> Apple App Store — traitement des abonnements soumis
              aux conditions d&apos;Apple ; BloomWellness ne reçoit aucune donnée bancaire.
            </li>
            <li>
              <strong>Autorités compétentes :</strong> sur demande légale dûment justifiée.
            </li>
          </ul>

          <h2>8. Conservation des données</h2>
          <p>
            Vos données sont conservées pendant toute la durée de votre utilisation du service, puis
            supprimées dans un délai de <strong>30 jours</strong> après la clôture de votre compte,
            sauf obligation légale contraire. Les données de cycle menstruel et les données Apple Santé
            sont supprimées <strong>immédiatement</strong> sur demande de suppression de compte ou sur
            exercice du droit à l&apos;effacement, sans délai de grâce.
          </p>

          <h2>9. Vos droits (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> à l&apos;ensemble de vos données, y compris les données de santé et de cycle</li>
            <li><strong>Droit de rectification</strong> de vos données inexactes ou incomplètes</li>
            <li><strong>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli ») — y compris effacement immédiat des données de santé et de cycle</li>
            <li><strong>Droit à la portabilité</strong> de vos données dans un format lisible par machine</li>
            <li><strong>Droit d&apos;opposition</strong> au traitement fondé sur nos intérêts légitimes</li>
            <li><strong>Droit de limitation</strong> du traitement en cas de contestation</li>
            <li>
              <strong>Droit de retrait du consentement</strong> pour les données de santé (Apple Santé,
              cycle menstruel) à tout moment, sans conséquence sur la licéité du traitement antérieur
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contactbloomwellness@bloom-nutri.com">
              contactbloomwellness@bloom-nutri.com
            </a>
            . Nous répondons dans un délai maximum de <strong>30 jours</strong>. Vous pouvez également
            déposer une réclamation auprès de la{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              CNIL
            </a>
            .
          </p>

          <h2>10. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, perte ou destruction : chiffrement
            des données en transit (TLS) et au repos, accès restreints, journaux d&apos;accès. Les données
            de santé et de cycle sont traitées avec un niveau de protection renforcé.
          </p>

          <h2>11. Cookies</h2>
          <p>
            Le site web utilise uniquement des cookies techniques strictement nécessaires à son
            fonctionnement (session, préférences d&apos;affichage). Aucun cookie publicitaire, de
            profilage ou de tracking tiers n&apos;est utilisé. Aucun consentement cookie n&apos;est requis
            pour ces cookies nécessaires.
          </p>

        </div>
      </div>
    </div>
  );
}
