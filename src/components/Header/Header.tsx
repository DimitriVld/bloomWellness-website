import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import { APP_STORE_URL, NAV_LINKS } from "@/lib/site";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/#top" className={styles.logo}>
          <span className={styles.logoMark}>
            <Image
              src="/images/brand/logo-mark.webp"
              alt=""
              width={28}
              height={21}
              preload
            />
          </span>
          <span className={styles.logoText}>Bloom</span>
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="dark" size="sm" href={APP_STORE_URL} external>
          Télécharger
        </Button>
      </div>
    </header>
  );
}
