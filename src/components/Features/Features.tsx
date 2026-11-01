import PhoneFrame from "@/components/ui/PhoneFrame/PhoneFrame";
import styles from "./Features.module.scss";
import { reveal } from "@/lib/reveal";

const SMALL_CARDS = [
  {
    title: "Un programme qui suit ta vie",
    text: "Séance libre ou footing imprévu : la suite s’adapte, sans culpabiliser.",
    tone: styles.mint,
  },
  {
    title: "Un oubli ? On complète le soir",
    text: "Un seul rappel, seulement si tu n’as pas ouvert l’app.",
    tone: styles.lime,
  },
  {
    title: "Des recettes à ta mesure",
    text: "Selon ce qu’il te reste, ton régime et tes allergènes.",
  },
  {
    title: "Coach IA",
    text: "Tes questions sur ta journée, et un bilan chaque semaine.",
  },
  {
    title: "Eau, jeûne et cycle",
    text: "Un verre en un tap, un timer de jeûne, des objectifs selon ta phase.",
  },
  {
    title: "Widgets et Apple Santé",
    text: "Ta journée sur l’écran d’accueil, tes pas et séances synchronisés.",
  },
];

export default function Features() {
  return (
    <section id="fonctions" className={styles.features}>
      {/* Anciennes ancres conservées pour les liens existants */}
      <span id="features" aria-hidden="true" />
      <span id="showcase" aria-hidden="true" />
      <div className="container">
        <h2 className={`h2 ${styles.title}`} {...reveal()}>
          Tout ce qu’il faut, rien de ce qui fatigue.
        </h2>
        <div className={styles.bento}>
          <article className={`${styles.card} ${styles.big}`} {...reveal()}>
            <p className="eyebrow">Repas</p>
            <h3 className={styles.bigTitle}>Note tes repas sans effort</h3>
            <p className={styles.bigText}>
              Recherche CIQUAL et Open Food Facts, scan du code-barres ou photo
              de l’assiette avec Bloom Pro.
            </p>
            <div className={styles.shot} {...reveal("rise", 200)}>
              <PhoneFrame screen="recherche" alt="Résultats de recherche pour poulet" sizes="240px" />
            </div>
          </article>
          <article className={`${styles.card} ${styles.big} ${styles.dark}`} {...reveal("up", 120)}>
            <p className={`eyebrow ${styles.eyebrowLime}`}>Sport</p>
            <h3 className={styles.bigTitle}>Ton coach muscu dans la poche</h3>
            <p className={styles.bigText}>
              Programme selon ton matériel et ton temps, séries et repos guidés,
              et le bon moment pour ajouter du poids.
            </p>
            <div className={styles.shot} {...reveal("rise", 320)}>
              <PhoneFrame screen="seance" alt="Séance en cours" sizes="240px" />
            </div>
          </article>
          {SMALL_CARDS.map((card, i) => (
            <article
              key={card.title}
              className={[styles.card, styles.small, card.tone].filter(Boolean).join(" ")}
              {...reveal("up", (i % 3) * 90)}
            >
              <h3 className={styles.smallTitle}>{card.title}</h3>
              <p className={styles.smallText}>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
