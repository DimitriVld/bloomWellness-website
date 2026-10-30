"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/* L'ancienne section #contact de l'accueil est devenue la page /contact. */
export default function LegacyAnchors() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#contact") {
      router.replace("/contact");
    }
  }, [router]);

  return null;
}
