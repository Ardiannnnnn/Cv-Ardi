import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Russo_One, Teko, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display fonts for stroke text
const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ardian - Software Engineer",
  description: "Portfolio website of Ardian, a passionate software engineer specializing in React, TypeScript, and modern web technologies.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${russoOne.variable} ${teko.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}