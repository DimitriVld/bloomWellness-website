import { Fragment } from "react";
import styles from "./SourcesStrip.module.scss";
import { reveal } from "@/lib/reveal";

const SOURCES = ["Base CIQUAL de l’ANSES", "Open Food Facts", "Apple Santé", "Sans publicité"];

export default function SourcesStrip() {
  return (
    <section aria-label="Sources et compatibilités" className={styles.strip}>
      <div className={`container ${styles.inner}`} {...reveal()}>
        {SOURCES.map((source, i) => (
          <Fragment key={source}>
            {i > 0 && (
              <span className={styles.sep} aria-hidden="true">
                /
              </span>
            )}
            <span>{source}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
