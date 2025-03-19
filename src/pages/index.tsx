import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FloatingNavbar from '@/components/FloatingNavbar';
import RotatingWords from '@/components/RotatingWords';
import Setup from '@/components/Setup';
import AIIntelligence from '@/components/AIIntelligence';
import ChatEngagerBenefits from '@/components/ChatEngagerBenefits';
import InboundAutomatorBenefits from '@/components/InboundAutomatorBenefits';
import DataOrganizerBenefits from '@/components/DataOrganizerBenefits';
import InsightsBenefits from '@/components/InsightsBenefits';
import ZiggySetupTimeline from '@/components/ZiggySetupTimeline';
import GetDemo from '@/components/GetDemo';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rezigco | AI-Powered Real Estate Solutions</title>
        <meta name="description" content="Revolutionizing property management and real estate transactions with cutting-edge artificial intelligence." />
        <meta name="keywords" content="real estate, AI, property management, real estate technology, proptech" />
      </Head>
      <main className="min-h-screen">
        <FloatingNavbar />
        <Hero />
        <Features />
        <RotatingWords />
        <Setup />
        <AIIntelligence />
        <div className="container mx-auto px-4 py-24">
          <ChatEngagerBenefits />
        </div>
        <div className="container mx-auto px-4 pt-0 pb-24">
          <InboundAutomatorBenefits />
        </div>
        <div className="container mx-auto px-4 pt-0 pb-24">
          <DataOrganizerBenefits />
        </div>
        <div className="container mx-auto px-4 pt-0 pb-24">
          <InsightsBenefits />
        </div>
        <ZiggySetupTimeline />
        <GetDemo />
        <Footer />
      </main>
    </>
  );
} 