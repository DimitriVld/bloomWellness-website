import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BloomWellness — Nutrition intelligente, pensée en français",
  description:
    "Coach IA, suivi calories CIQUAL, jeûne intermittent, recettes françaises. L'app nutrition créée par un développeur indépendant français.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
