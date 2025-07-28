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
        <section className="relative bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 font-manrope">
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
        
        {/* New Benefits Section */}
        <section className="bg-white py-8 md:py-12 pb-20 md:pb-24 font-manrope">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Time Icon */}
              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B266FF] to-[#E0C3FC] rounded-3xl animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-[#7F00FF] to-[#B266FF] rounded-2xl animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Main icon container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#7F00FF] via-[#B266FF] to-[#E0C3FC] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" 
                       style={{
                         boxShadow: '0 20px 40px -10px rgba(127, 0, 255, 0.4), 0 0 20px rgba(178, 102, 255, 0.3)',
                         background: 'linear-gradient(135deg, #7F00FF 0%, #B266FF 50%, #E0C3FC 100%)'
                       }}>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    
                    <svg className="w-12 h-12 text-white drop-shadow-lg relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#7F00FF] transition-colors duration-300">
                  Spend more time building relationships and closing deals
                </h3>
              </div>
              
              {/* Growth/Money Icon */}
              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B266FF] to-[#E0C3FC] rounded-3xl animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-[#7F00FF] to-[#B266FF] rounded-2xl animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{animationDelay: '0.8s'}}></div>
                  
                  {/* Main icon container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#7F00FF] via-[#B266FF] to-[#E0C3FC] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500" 
                       style={{
                         boxShadow: '0 20px 40px -10px rgba(127, 0, 255, 0.4), 0 0 20px rgba(178, 102, 255, 0.3)',
                         background: 'linear-gradient(135deg, #7F00FF 0%, #B266FF 50%, #E0C3FC 100%)'
                       }}>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    
                    <svg className="w-12 h-12 text-white drop-shadow-lg relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#7F00FF] transition-colors duration-300">
                  Handle more sales without adding extra costs
                </h3>
              </div>
              
              {/* Happy Icon */}
              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Animated background rings */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B266FF] to-[#E0C3FC] rounded-3xl animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{animationDelay: '0.6s'}}></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-[#7F00FF] to-[#B266FF] rounded-2xl animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{animationDelay: '0.1s'}}></div>
                  
                  {/* Main icon container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#7F00FF] via-[#B266FF] to-[#E0C3FC] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" 
                       style={{
                         boxShadow: '0 20px 40px -10px rgba(127, 0, 255, 0.4), 0 0 20px rgba(178, 102, 255, 0.3)',
                         background: 'linear-gradient(135deg, #7F00FF 0%, #B266FF 50%, #E0C3FC 100%)'
                       }}>
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    
                    <svg className="w-12 h-12 text-white drop-shadow-lg relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#7F00FF] transition-colors duration-300">
                  Keep every client happy and informed with ease
                </h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* White background section - starts underneath placeholder */}
        <section className="relative bg-white -mt-16 pt-16 font-manrope">
          <div data-component="Features" style={{ minHeight: '400px' }}>
            <Suspense fallback={<SectionLoader />}>
              <Features />
            </Suspense>
          </div>
        </section>
        
        {/* Timeline section with white background */}
        <section className="w-full bg-white font-manrope">
          <div data-component="ZiggySetupTimeline">
            <Suspense fallback={<SectionLoader />}>
              <ZiggySetupTimeline />
            </Suspense>
          </div>
        </section>
        
        <div data-component="RotatingWords">
          <Suspense fallback={<SectionLoader />}>
            <RotatingWords />
          </Suspense>
        </div>
        

        

        
        {/* BENEFITS SECTION - unified white background */}
        <section className="w-full bg-white py-16 font-manrope">
          <div className="container mx-auto px-4">
            <div className="mb-24">
              <Suspense fallback={<SectionLoader />}>
                <DealNavigatorBenefits />
              </Suspense>
            </div>
          </div>
        </section>
        
        {/* GetDemo section with white background */}
        <section className="w-full bg-white font-manrope">
          <div data-component="GetDemo">
            <Suspense fallback={<SectionLoader />}>
              <GetDemo />
            </Suspense>
          </div>
        </section>
        
        <div data-component="Footer">
          <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
            <Footer />
          </Suspense>
        </div>
      </main>
    </>
  );
} 