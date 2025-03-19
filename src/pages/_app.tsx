import { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import '../styles/globals.css';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');
        
        .font-bricolage {
          font-family: "Bricolage Grotesque", sans-serif;
          font-optical-sizing: auto;
          font-style: normal;
          font-variation-settings: "wdth" 100;
        }
      `}</style>
      <div className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${bricolage.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
} 