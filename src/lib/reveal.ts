import type { CSSProperties } from "react";

type RevealVariant = "up" | "scale" | "rise";

/*
 * Apparition au scroll, façon apple.com : fondu et légère montée.
 * Les styles sont dans globals.css, le déclenchement dans <ScrollReveal />.
 */
export function reveal(variant: RevealVariant = "up", delay = 0) {
  return {
    "data-reveal": variant,
    style: delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined,
  };
}
