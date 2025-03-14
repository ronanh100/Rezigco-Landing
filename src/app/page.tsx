import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FloatingNavbar from '@/components/FloatingNavbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <Hero />
      <Features />
    </main>
  );
}
