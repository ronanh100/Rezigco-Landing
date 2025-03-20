import { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import '../styles/globals.css';
import { useEffect } from 'react';

// Font optimizations - load only weights we actually use
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  // Preload critical components on client-side navigation
  useEffect(() => {
    // Prefetch critical components
    import('@/components/Features');
    import('@/components/RotatingWords');
    
    // Disable Next.js analytics for Cloudflare optimization
    if (process.env.NODE_ENV === 'production') {
      // @ts-ignore
      window.nextAnalytics = false;
    }
  }, []);
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${bricolage.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
} 