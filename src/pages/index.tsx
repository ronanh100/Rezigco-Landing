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
        
        {/* New: White background section for dashboard/demo placeholder */}
        <section className="relative bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] max-w-6xl mx-auto transition-shadow transition-transform duration-300 ease-in-out hover:shadow-[0_20px_60px_-10px_rgba(127,0,255,0.28)] hover:-translate-y-1">
              <div className="aspect-[16/8] bg-white flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/Test_dashboard_screengrab.jpeg"
                  alt="Rezigco Dashboard Preview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Problems vs Solutions Section */}
        <section className="relative bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#7F00FF]/10 rounded-full mb-6">
                <span className="text-[#7F00FF] font-bold text-sm tracking-wide">DEAL NAVIGATOR</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                From <span className="text-[#7F00FF]">Chaos</span> to <span className="text-[#7F00FF]">Control</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stop chasing deals. Start closing them with AI that works like your best team member.
              </p>
            </div>
            
            {/* Clean Grid Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_-10px_rgba(127,0,255,0.28)] hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Manual chasing and messy inboxes</h3>
                </div>
                <p className="text-gray-600 mb-6">Agents waste hours following up with solicitors and digging through threads.</p>
                <div className="flex items-center text-[#7F00FF] font-semibold">
                  <span>Finsho follows up for you</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_-10px_rgba(127,0,255,0.28)] hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">CRMs that just sit there</h3>
                </div>
                <p className="text-gray-600 mb-6">Traditional tools store data but don't progress the sale or adapt to what's happening.</p>
                <div className="flex items-center text-[#7F00FF] font-semibold">
                  <span>Finsho takes real action</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_-10px_rgba(127,0,255,0.28)] hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">No clarity for clients or agents</h3>
                </div>
                <p className="text-gray-600 mb-6">Everyone asks "where is this at?" — and no one has the answer.</p>
                <div className="flex items-center text-[#7F00FF] font-semibold">
                  <span>Everyone stays in the loop</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_-10px_rgba(127,0,255,0.28)] hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Emails ignored or lost in spam</h3>
                </div>
                <p className="text-gray-600 mb-6">CRM messages feel robotic and get overlooked.</p>
                <div className="flex items-center text-[#7F00FF] font-semibold">
                  <span>Messages that feel human</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-[#7F00FF] to-[#9B4DFF] rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Deal Flow?</h3>
                <p className="text-xl mb-8 opacity-90">Join agents who've already automated their way to more closed deals.</p>
                <button className="bg-white text-[#7F00FF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* White background section - starts underneath placeholder */}
        <section className="relative bg-white -mt-16 pt-16">
          <div data-component="Features" style={{ minHeight: '400px' }}>
            <Suspense fallback={<SectionLoader />}>
              <Features />
            </Suspense>
          </div>
        </section>
        
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