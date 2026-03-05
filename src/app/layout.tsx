import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICONIC LUXE — Fine Jewelry for the Iconic Woman",
  description:
    "Discover ICONIC LUXE — a curated collection of fine jewelry crafted for those who are already iconic. Timeless design, ethically sourced, lifetime guarantee.",
  keywords: "fine jewelry, luxury jewelry, gold jewelry, iconic luxe, designer jewelry",
  openGraph: {
    title: "ICONIC LUXE — Fine Jewelry for the Iconic Woman",
    description:
      "Discover ICONIC LUXE — a curated collection of fine jewelry crafted for those who are already iconic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
