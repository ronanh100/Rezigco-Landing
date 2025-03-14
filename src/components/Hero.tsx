import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white text-black min-h-screen font-bricolage pb-16" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-20 relative z-10">
        <div className="flex flex-col items-center">
          {/* Text content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Your AI Hire, Streamlining the Real Estate Workflow
            </h1>
            <div className="text-xl md:text-2xl mb-10 text-gray-700 font-bricolage max-w-3xl mx-auto" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Ziggy automates key tasks 24/7, from inquiries and lead qualification to data organisation. Enabling you to focus on building relationships and closing deals.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="bg-[#922ea4] hover:bg-[#7a2589] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 font-bricolage" 
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Request Demo
              </Link>
              <Link 
                href="/learn-more" 
                className="bg-transparent hover:bg-gray-100 text-[#922ea4] border border-[#922ea4] font-semibold py-3 px-8 rounded-lg transition duration-300 font-bricolage"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 