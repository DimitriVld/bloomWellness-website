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
  metadataBase: new URL("https://bloom-nutri.com"),
  title: "BloomWellness — Nutrition intelligente, pensée en français",
  description:
    "Coach nutrition IA français, compatible Apple Santé et Apple Watch. Suivi calories CIQUAL, jeûne intermittent, recettes françaises. L'app créée par un développeur indépendant.",
  keywords: [
    "nutrition",
    "coach IA",
    "calories",
    "CIQUAL",
    "Apple Santé",
    "Apple Watch",
    "jeûne intermittent",
    "application nutrition française",
  ],
  openGraph: {
    title: "BloomWellness — Nutrition intelligente, pensée en français",
    description:
      "Coach nutrition IA français, compatible Apple Santé et Apple Watch. Suivi calories CIQUAL, jeûne intermittent, recettes françaises.",
    images: [{ url: "/images/brand/Bw-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomWellness — Nutrition intelligente, pensée en français",
    description:
      "Coach nutrition IA français, compatible Apple Santé et Apple Watch. Suivi calories CIQUAL, jeûne intermittent.",
    images: ["/images/brand/Bw-logo.png"],
  },
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
