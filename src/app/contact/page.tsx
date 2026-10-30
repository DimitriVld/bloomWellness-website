import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/Contact/ContactForm";
import { InstagramIcon, MailIcon } from "@/components/ui/Icons";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import styles from "./contact.module.scss";

export const metadata: Metadata = {
  title: "Contact · Bloom",
  description:
    "Une question, un bug, une idée ? Écris directement au créateur de Bloom, il répond à chaque message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <p className="eyebrow">Contact</p>
        <h1 className={styles.title}>Écris-moi, je réponds à chaque message.</h1>
        <p className={styles.lead}>
          Une question, un bug ou une idée pour Bloom ? C’est moi, Dimitri, qui
          lis et réponds, pas un robot.
        </p>
      </header>

      <div className={styles.layout}>
        <section aria-labelledby="form-title" className={styles.formCard}>
          <h2 id="form-title" className="visually-hidden">
            Formulaire de contact
          </h2>
          <ContactForm />
        </section>

        <aside className={styles.aside}>
          <section aria-labelledby="direct-title" className={styles.block}>
            <h2 id="direct-title" className={styles.blockTitle}>
              Écrire directement
            </h2>
            <ul className={styles.channels}>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.channel}>
                  <span className={styles.channelIcon}>
                    <MailIcon size={18} />
                  </span>
                  <span className={styles.channelText}>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channel}
                >
                  <span className={styles.channelIcon}>
                    <InstagramIcon size={18} />
                  </span>
                  <span className={styles.channelText}>{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="quick-title" className={`${styles.block} ${styles.quick}`}>
            <h2 id="quick-title" className={styles.blockTitle}>
              Ta réponse est peut-être déjà là
            </h2>
            <dl className={styles.answers}>
              <div>
                <dt>Gérer ou annuler Bloom Pro</dt>
                <dd>
                  Sur ton iPhone : Réglages, puis ton nom, puis Abonnements.
                </dd>
              </div>
              <div>
                <dt>Supprimer ton compte</dt>
                <dd>
                  <Link href="/supprimer-mon-compte">Voir la marche à suivre</Link>
                </dd>
              </div>
              <div>
                <dt>Essai gratuit, Apple Watch, amis</dt>
                <dd>
                  <Link href="/#faq">Lire les questions fréquentes</Link>
                </dd>
              </div>
            </dl>
          </section>
        </aside>
      </div>
    </div>
  );
}
