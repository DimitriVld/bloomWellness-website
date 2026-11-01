import Button from "@/components/ui/Button/Button";
import { APP_STORE_URL } from "@/lib/site";
import styles from "./FinalCta.module.scss";
import { reveal } from "@/lib/reveal";

export default function FinalCta() {
  return (
    <section id="telecharger" className={styles.final}>
      <div className="container">
        <div className={styles.panel} {...reveal("scale")}>
          <h2 className={styles.title} {...reveal("up", 150)}>
            Ta nutrition et ton sport,
            <br />
            enfin dans la même app.
          </h2>
          <div className={styles.cta} {...reveal("up", 280)}>
            <Button variant="dark" size="lg" href={APP_STORE_URL} external>
              Télécharger sur l’App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
