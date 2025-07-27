import React, { lazy, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { setupLazyLoadingObserver } from '@/lib/optimize-bundle';
import Image from 'next/image';

// Only the absolute critical components loaded immediately (above the fold)
import FloatingNavbar from '@/components/FloatingNavbar';
// Hero should render only on the client to avoid hydration mismatch
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});

// Features component should render on server to prevent layout shift
import Features from '@/components/Features';

const RotatingWords = dynamic(() => import('@/components/RotatingWords'), {
  ssr: false,
});

const Setup = dynamic(() => import('@/components/Setup'), {
  ssr: false,
});

const AIIntelligence = dynamic(() => import('@/components/AIIntelligence'), {
  ssr: false,
});

const DealNavigatorBenefits = dynamic(() => import('@/components/InboundAutomatorBenefits'), {
  ssr: false,
});

const DataOrganizerBenefits = dynamic(() => import('@/components/DataOrganizerBenefits'), {
  ssr: false,
});

const InsightsBenefits = dynamic(() => import('@/components/InsightsBenefits'), {
  ssr: false,
});

const ZiggySetupTimeline = dynamic(() => import('@/components/ZiggySetupTimeline'), {
  ssr: false,
});

const FunctionParts = dynamic(() => import('@/components/FunctionParts'), {
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
    const preloadZiggy = new (window as any).Image();
    preloadZiggy.src = '/ziggy_static.png';
  }, []);

  return (
    <>
      <Head>
        <title>Finsho | Your AI Agent Driving Real Estate Deals Forward</title>
        <meta name="description" content="Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence." />
        <meta name="keywords" content="real estate, AI, property management, real estate technology, proptech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/ziggy_static.png" fetchPriority="high" />
        {/* Remove ziggy_new.png preload if it's not being used */}
      </Head>
      
      <main className="min-h-screen">
        <FloatingNavbar />
        <Hero />
        
        {/* New: White background section for dashboard/demo placeholder */}
        <section className="relative bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#7F00FF] max-w-6xl mx-auto" style={{boxShadow: '0 25px 50px -12px rgba(127, 0, 255, 0.25)'}}>
              <div className="aspect-[16/8] bg-white flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/Test_dashboard_screengrab.jpeg"
                  alt="Finsho Dashboard Preview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        
        <div data-component="FunctionParts">
          <Suspense fallback={<SectionLoader />}>
            <FunctionParts />
          </Suspense>
        </div>
        
        <div data-component="RotatingWords">
          <Suspense fallback={<SectionLoader />}>
            <RotatingWords />
          </Suspense>
        </div>
        
        {/* White background section - starts underneath placeholder */}
        <section className="relative bg-white -mt-16 pt-16">
          <div data-component="Features" style={{ minHeight: '400px' }}>
            <Suspense fallback={<SectionLoader />}>
              <Features />
            </Suspense>
          </div>
        </section>
        
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
        
        {/* BENEFITS SECTION - unified white background */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-24">
              <Suspense fallback={<SectionLoader />}>
                <DealNavigatorBenefits />
              </Suspense>
            </div>
          </div>
        </section>
        
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