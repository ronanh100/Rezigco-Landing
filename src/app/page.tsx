import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FloatingNavbar from '@/components/FloatingNavbar';
import RotatingWords from '@/components/RotatingWords';
import Setup from '@/components/Setup';

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <Hero />
      <Features />
      <RotatingWords />
      <Setup />
    </main>
  );
}
