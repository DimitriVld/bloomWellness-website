import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={`${styles.label} ${light ? styles.labelLight : "label"}`}>
        {label}
      </span>
      <h2 className={`${styles.title} ${light ? styles.titleLight : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${styles.subtitle} ${light ? styles.subtitleLight : "body-text"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
