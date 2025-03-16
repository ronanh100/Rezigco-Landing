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

export default function Home() {
  return (
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
    </main>
  );
}
