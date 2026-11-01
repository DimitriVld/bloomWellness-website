import PhoneFrame from "@/components/ui/PhoneFrame/PhoneFrame";
import styles from "./Friends.module.scss";
import { reveal } from "@/lib/reveal";

export default function Friends() {
  return (
    <section id="amis" className={styles.friends}>
      <div className="container">
        <div className={styles.panel} {...reveal("scale")}>
          <div className={styles.copy} {...reveal("up", 150)}>
            <p className={`eyebrow ${styles.eyebrow}`}>Amis et défis</p>
            <h2 className={`h2 ${styles.title}`}>Plus motivant à plusieurs.</h2>
            <p className={styles.text}>
              Partage tes séances, envoie des bravos, lancez un défi. Pas de
              poids, pas de calories : juste l’effort.
            </p>
          </div>
          <div className={styles.visual} {...reveal("rise", 250)}>
            <PhoneFrame screen="amis" alt="Fil des amis" sizes="240px" />
          </div>
        </div>
      </div>
    </section>
  );
}
