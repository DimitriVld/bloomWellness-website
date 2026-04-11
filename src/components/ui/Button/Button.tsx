import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "outline" | "green";
  size?: "default" | "sm";
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  variant,
  size = "default",
  children,
  href,
  fullWidth,
  icon,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[variant],
    size === "sm" ? styles.sm : "",
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={className}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
