import styles from "./Founder.module.scss";
import { reveal } from "@/lib/reveal";

export default function Founder() {
  return (
    <section id="story" aria-label="Le mot du créateur" className={styles.founder}>
      <figure className={`container ${styles.inner}`}>
        <blockquote className={styles.quote} {...reveal()}>
          <p>
            « Je ne trouvais pas d’app française qui connaisse vraiment nos
            aliments et donne des conseils utiles. Alors j’ai créé Bloom, et je
            réponds à chacun de vos messages. »
          </p>
        </blockquote>
        <figcaption className={styles.author} {...reveal("up", 150)}>Dimitri, créateur de Bloom</figcaption>
      </figure>
    </section>
  );
}
