import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Critical components loaded immediately (above the fold)
import FloatingNavbar from '@/components/FloatingNavbar';
import Hero from '@/components/Hero';

// Dynamically import components (below the fold or not initially visible)
const Features = dynamic(() => import('@/components/Features'), {
  ssr: true, // Important component still SSR'd
});

const RotatingWords = dynamic(() => import('@/components/RotatingWords'), {
  ssr: true,
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

const InboundAutomatorBenefits = dynamic(() => import('@/components/InboundAutomatorBenefits'), {
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
  return (
    <>
      <Head>
        <title>Rezigco | AI-Powered Real Estate Solutions</title>
        <meta name="description" content="Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence." />
        <meta name="keywords" content="real estate, AI, property management, real estate technology, proptech" />
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/styles.css" as="style" />
      </Head>
      <main className="min-h-screen">
        <FloatingNavbar />
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RotatingWords />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Setup />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AIIntelligence />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="container mx-auto px-4 py-24">
            <ChatEngagerBenefits />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="container mx-auto px-4 pt-0 pb-24">
            <InboundAutomatorBenefits />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="container mx-auto px-4 pt-0 pb-24">
            <DataOrganizerBenefits />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="container mx-auto px-4 pt-0 pb-24">
            <InsightsBenefits />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ZiggySetupTimeline />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <GetDemo />
        </Suspense>
        
        <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
} 