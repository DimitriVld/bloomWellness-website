import Button from "@/components/ui/Button/Button";
import { APP_STORE_URL } from "@/lib/site";
import styles from "./FinalCta.module.scss";

export default function FinalCta() {
  return (
    <section id="telecharger" className={styles.final}>
      <div className="container">
        <div className={styles.panel}>
          <h2 className={styles.title}>
            Ta nutrition et ton sport,
            <br />
            enfin dans la même app.
          </h2>
          <div className={styles.cta}>
            <Button variant="dark" size="lg" href={APP_STORE_URL} external>
              Télécharger sur l’App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
