import Image from "next/image";
import styles from "./Footer.module.css";

const APP_LINKS = [
  { label: "Télécharger", href: "#pricing" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
];

const COMMUNITY_LINKS = [
  { label: "Instagram", href: "https://instagram.com/bloomwellness.app", external: true },
  { label: "Partager une idée", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "CGU", href: "#" },
  { label: "Confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/images/icon-small.png"
              alt="BloomWellness"
              width={36}
              height={36}
              className={styles.brandIcon}
            />
            <p className={styles.brandName}>BloomWellness</p>
            <p className={styles.brandDesc}>
              L&apos;app nutrition intelligente, pensée en français par un
              développeur indépendant passionné.
            </p>
          </div>

          {/* App */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>App</h4>
            <ul>
              {APP_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.colLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Communauté</h4>
            <ul>
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.colLink}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Légal</h4>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.colLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>© 2026 BloomWellness. Fait en France.</p>
          <p>Un projet indépendant.</p>
        </div>
      </div>
    </footer>
  );
}
