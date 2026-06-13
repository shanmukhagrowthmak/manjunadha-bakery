import type { Metadata } from "next";
import { Fraunces, Lora, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manjunadha Bakery — Fresh-Baked Since 2012",
  description:
    "Fresh-baked buns, khara biscuits, dil pasand, and the Mangalore classics — made the same way, every single morning. Located in Koyyalagudem, West Godavari.",
  keywords: [
    "bakery",
    "Mangalore bun",
    "khara biscuit",
    "dil pasand",
    "rusk",
    "Koyyalagudem",
    "West Godavari",
    "fresh baked",
    "Andhra Pradesh",
  ],
  openGraph: {
    title: "Manjunadha Bakery — Fresh-Baked Since 2012",
    description:
      "Fresh-baked buns, khara biscuits, and the Mangalore classics — made the same way, every single morning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${lora.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
