"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import { MenuIcon, XIcon } from "@/components/ui/Icons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Mon histoire", href: "#story" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="#" className={styles.logo} aria-label="BloomWellness — Accueil">
            <Image
              src="/images/icon-small.png"
              alt=""
              width={34}
              height={34}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.logoText}>BloomWellness</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.cta}>
            <Button variant="primary" size="sm" href="#pricing">
              Télécharger
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
            aria-modal="true"
            role="dialog"
          >
            <nav className={styles.mobileNav}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                style={{ marginTop: "8px" }}
              >
                <Button variant="primary" href="#pricing" fullWidth>
                  Télécharger l&apos;app
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
