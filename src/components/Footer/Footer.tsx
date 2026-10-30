import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/site";
import styles from "./Footer.module.scss";

const LINKS = [
  { label: "CGU", href: "/cgu" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Supprimer mon compte", href: "/supprimer-mon-compte" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© 2026 Bloom Wellness</span>
        <nav aria-label="Liens légaux" className={styles.links}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
