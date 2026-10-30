"use client";

import Button from "@/components/ui/Button/Button";
import { SendIcon } from "@/components/ui/Icons";
import { CONTACT_EMAIL } from "@/lib/site";
import styles from "./ContactForm.module.scss";

const TOPICS = ["Question", "Bug", "Suggestion", "Abonnement", "Autre"];

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const topic = data.get("topic") as string;
    const message = data.get("message") as string;
    const subject = `${topic} · Bloom`;
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset className={styles.topics}>
        <legend className={styles.label}>C’est à quel sujet ?</legend>
        <div className={styles.chips}>
          {TOPICS.map((topic, i) => (
            <label key={topic} className={styles.chip}>
              <input
                type="radio"
                name="topic"
                value={topic}
                defaultChecked={i === 0}
                className={styles.chipInput}
              />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Prénom <span className={styles.optional}>(facultatif)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            autoComplete="given-name"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Ton e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder="toi@exemple.fr"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Ton message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          aria-describedby="message-hint"
          className={`${styles.input} ${styles.textarea}`}
        />
        <p id="message-hint" className={styles.hint}>
          Pour un bug, précise ton modèle d’iPhone et ta version d’iOS.
        </p>
      </div>

      <Button variant="dark" size="lg" type="submit" fullWidth icon={<SendIcon size={18} />}>
        Préparer mon e-mail
      </Button>
      <p className={styles.note}>
        Ton app mail s’ouvre avec le message prêt à envoyer. Rien n’est stocké
        sur ce site.
      </p>
    </form>
  );
}
