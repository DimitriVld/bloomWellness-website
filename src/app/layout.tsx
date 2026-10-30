import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

// Police variable : un seul fichier couvre les graisses 400 à 800.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "Bloom : mange mieux, bouge plus, une seule app";
const DESCRIPTION =
  "Note tes repas, suis ton programme muscu et avance avec tes amis. L'app française nutrition et sport, sans publicité. 14 jours d'essai gratuit.";

// Pas encore de vraie image de partage 1200×630 : on garde le logo existant.
const SHARE_IMAGE = "/images/brand/Bw-logo.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://bloom-nutri.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Bloom",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SHARE_IMAGE }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
