import Image from "next/image";
import styles from "./PhoneFrame.module.scss";

/*
 * Écrans provisoires : remplacer les fichiers public/images/app/placeholder-*.webp
 * par de vraies captures (mettre à jour width/height ci-dessous si le ratio change).
 */
export const APP_SCREENS = {
  home: { src: "/images/app/placeholder-home.webp", width: 600, height: 1013 },
  recherche: { src: "/images/app/placeholder-recherche.webp", width: 600, height: 1131 },
  seance: { src: "/images/app/placeholder-seance.webp", width: 600, height: 1131 },
  amis: { src: "/images/app/placeholder-amis.webp", width: 600, height: 1013 },
} as const;

/** Hauteur / largeur de l'écran, calée sur les captures les plus hautes. */
const SCREEN_RATIO = 1131 / 600;

interface PhoneFrameProps {
  screen: keyof typeof APP_SCREENS;
  alt: string;
  className?: string;
  /** Écran au-dessus de la ligne de flottaison : chargé en priorité. */
  eager?: boolean;
  sizes?: string;
}

export default function PhoneFrame({
  screen,
  alt,
  className,
  eager,
  sizes = "290px",
}: PhoneFrameProps) {
  const { src, width, height } = APP_SCREENS[screen];
  // Capture plus courte que l'écran : affichée en entier, le bas se fond dans le fond de l'app.
  const short = height / width < SCREEN_RATIO;

  return (
    <div className={[styles.phone, className].filter(Boolean).join(" ")}>
      <div className={styles.screen}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className={short ? `${styles.img} ${styles.fade}` : styles.img}
        />
      </div>
    </div>
  );
}
