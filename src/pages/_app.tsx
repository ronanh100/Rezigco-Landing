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
    // Disable analytics for Cloudflare optimization
    if (process.env.NODE_ENV === 'production') {
      // @ts-ignore
      window.nextAnalytics = false;
    }
    
    // Only prefetch visible components on viewport entry
    if ('IntersectionObserver' in window) {
      const lazyLoadComponents = () => {
        // These will only load when user scrolls, not on initial render
        const importPromises = [
          import('@/lib/dynamic-components'),
        ];
        
        // Don't await - let them load in background
        Promise.all(importPromises).catch(() => {
          // Silently fail on preload error
        });
      };
      
      // Wait until idle to trigger component preloads
      if ('requestIdleCallback' in window) {
        // @ts-ignore
        window.requestIdleCallback(lazyLoadComponents, { timeout: 2000 });
      } else {
        setTimeout(lazyLoadComponents, 2000);
      }
    }
  }, []);
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${bricolage.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
} 