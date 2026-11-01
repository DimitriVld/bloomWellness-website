import Button from "@/components/ui/Button/Button";
import PhoneFrame from "@/components/ui/PhoneFrame/PhoneFrame";
import { DownloadIcon } from "@/components/ui/Icons";
import { APP_STORE_URL } from "@/lib/site";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      {/* Ancienne ancre conservée pour les liens existants */}
      <span id="hero" aria-hidden="true" />
      <div className="container">
        <p className={styles.tagline}>L’app française nutrition + sport</p>
        <h1 className={styles.title}>
          Mange mieux. Bouge plus. <span className="mark">Une seule app.</span>
        </h1>
        <p className={styles.lead}>
          Tes repas, ton programme muscu et tes amis réunis dans Bloom. Chaque
          séance ajuste ton objectif du jour.
        </p>
        <div className={styles.actions}>
          <Button
            variant="dark"
            size="lg"
            href={APP_STORE_URL}
            external
            icon={<DownloadIcon className={styles.downloadIcon} />}
          >
            Télécharger sur l’App Store
          </Button>
          <Button variant="outline" size="lg" href="#tarifs">
            Essai gratuit 14 jours
          </Button>
        </div>
        <div className={styles.fan}>
          <PhoneFrame
            screen="recherche"
            alt="Recherche d’un aliment"
            className={`${styles.side} ${styles.left}`}
            sizes="240px"
          />
          <PhoneFrame
            screen="home"
            alt="Accueil de Bloom avec les calories restantes"
            className={styles.center}
            sizes="(max-width: 720px) 160px, 240px"
            eager
          />
          <PhoneFrame
            screen="seance"
            alt="Séance guidée"
            className={`${styles.side} ${styles.right}`}
            sizes="240px"
          />
        </div>
      </div>
    </section>
  );
}
