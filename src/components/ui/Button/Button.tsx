import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "dark" | "outline" | "lime";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  variant,
  size = "md",
  children,
  href,
  external,
  fullWidth,
  icon,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </>
  );

  if (href && external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
}
