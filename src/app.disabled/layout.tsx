import type { Metadata } from "next";
import { Geist_Sans, Geist_Mono } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Initialize fonts properly
const geistSans = Geist_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: "Rezigco | AI-Powered Real Estate Solutions",
  description: "Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence.",
  keywords: "real estate, AI, property management, real estate technology, proptech"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/ziggy_new.png" fetchPriority="high" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 