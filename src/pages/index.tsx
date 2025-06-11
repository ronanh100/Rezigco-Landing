import React, { lazy, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { setupLazyLoadingObserver } from '@/lib/optimize-bundle';

// Only the absolute critical components loaded immediately (above the fold)
import FloatingNavbar from '@/components/FloatingNavbar';
// Use dynamic import for Hero with ssr: false to match production behavior
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});

// Dynamically import all other components with aggressive code splitting
const Features = dynamic(() => import('@/components/Features'), {
  ssr: false, 
});

const RotatingWords = dynamic(() => import('@/components/RotatingWords'), {
  ssr: false,
});

const Setup = dynamic(() => import('@/components/Setup'), {
  ssr: false,
});

const AIIntelligence = dynamic(() => import('@/components/AIIntelligence'), {
  ssr: false,
});

const ChatEngagerBenefits = dynamic(() => import('@/components/ChatEngagerBenefits'), {
  ssr: false,
});

const DealNavigatorBenefits = dynamic(() => import('@/components/InboundAutomatorBenefits'), {
  ssr: false,
});

const ZiggySetupTimeline = dynamic(() => import('@/components/ZiggySetupTimeline'), {
  ssr: false,
});

const GetDemo = dynamic(() => import('@/components/GetDemo'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

// Simple loading components 
const SectionLoader = () => (
  <div className="w-full py-12">
    <div className="container mx-auto px-4">
      <div className="h-40 bg-gray-100 rounded-lg animate-pulse"></div>
    </div>
  </div>
);

export default function Home() {
  // Set up intersection observers after mount
  useEffect(() => {
    setupLazyLoadingObserver();
    
    // Critical: Preload Ziggy image immediately on load
    const preloadZiggy = new Image();
    preloadZiggy.src = '/ziggy_static.png';
  }, []);

  return (
    <>
      <Head>
        <title>Rezigco | AI-Powered Real Estate Solutions</title>
        <meta name="description" content="Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence." />
        <meta name="keywords" content="real estate, AI, property management, real estate technology, proptech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/ziggy_static.png" fetchPriority="high" />
        {/* Remove ziggy_new.png preload if it's not being used */}
      </Head>
      
      <main className="min-h-screen">
        <FloatingNavbar />
        <Hero />
        
        <div data-component="Features">
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </div>
        
        <div data-component="RotatingWords">
          <Suspense fallback={<SectionLoader />}>
            <RotatingWords />
          </Suspense>
        </div>
        
        <div data-component="Setup">
          <Suspense fallback={<SectionLoader />}>
            <Setup />
          </Suspense>
        </div>
        
        <div data-component="AIIntelligence">
          <Suspense fallback={<SectionLoader />}>
            <AIIntelligence />
          </Suspense>
        </div>
        
        <div data-component="ChatEngagerBenefits" className="container mx-auto px-4 py-24">
          <Suspense fallback={<SectionLoader />}>
            <ChatEngagerBenefits />
          </Suspense>
        </div>
        
        <div data-component="DealNavigatorBenefits" className="container mx-auto px-4 pt-0 pb-24">
          <Suspense fallback={<SectionLoader />}>
            <DealNavigatorBenefits />
          </Suspense>
        </div>
        
        <div data-component="ZiggySetupTimeline">
          <Suspense fallback={<SectionLoader />}>
            <ZiggySetupTimeline />
          </Suspense>
        </div>
        
        <div data-component="GetDemo">
          <Suspense fallback={<SectionLoader />}>
            <GetDemo />
          </Suspense>
        </div>
        
        <div data-component="Footer">
          <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
            <Footer />
          </Suspense>
        </div>
      </main>
    </>
  );
} 