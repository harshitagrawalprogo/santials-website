import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SANTIALLS — Luxury Fragrance Intelligence Platform",
  description:
    "Discover, compare, and experience the world's most refined scents. The Bloomberg Terminal of Perfumes.",
  keywords: [
    "luxury perfume",
    "fragrance discovery",
    "niche perfume",
    "perfume database",
    "AI scent finder",
    "fragrance dupes",
  ],
  openGraph: {
    title: "SANTIALLS — Luxury Fragrance Intelligence Platform",
    description:
      "The ultimate destination for fragrance connoisseurs. Discover, compare, and experience the world's most refined scents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${inter.variable}`}>
      <body className="bg-obsidian text-ivory font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
