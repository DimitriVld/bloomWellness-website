import styles from "./Faq.module.scss";
import { reveal } from "@/lib/reveal";

const QUESTIONS = [
  {
    question: "Bloom est-il gratuit ?",
    answer:
      "Oui. Repas, eau, poids, séance libre et amis sont gratuits. Bloom Pro ajoute le programme sport, la photo des repas et le coach illimité.",
  },
  {
    question: "Comment marche l’essai gratuit ?",
    answer:
      "14 jours de Bloom Pro offerts, rien à payer aujourd’hui. Arrête-le quand tu veux dans les réglages de ton iPhone, au plus tard 24 h avant la fin.",
  },
  {
    question: "Faut-il une Apple Watch ?",
    answer:
      "Non. Apple Santé est facultatif : il ajoute tes pas, ton énergie active et tes séances.",
  },
  {
    question: "Mes amis voient-ils mes calories ?",
    answer:
      "Jamais. Tu choisis ce que tu partages ; ni ton poids ni tes calories ne sont visibles.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <h2 className={styles.title} {...reveal()}>Questions fréquentes</h2>
        <div className={styles.grid}>
          {QUESTIONS.map(({ question, answer }, i) => (
            <article key={question} className={styles.card} {...reveal("up", (i % 2) * 100)}>
              <h3 className={styles.question}>{question}</h3>
              <p className={styles.answer}>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
