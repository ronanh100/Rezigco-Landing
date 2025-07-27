import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
      title: "Finsho | AI-Powered Real Estate Solutions",
  description: "Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence.",
  keywords: ["real estate", "AI", "property management", "real estate technology", "proptech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
          
          .font-bricolage {
            font-family: "Bricolage Grotesque", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            font-variation-settings: "wdth" 100;
          }
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
