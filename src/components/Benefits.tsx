"use client";

import React from 'react';
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextAnimate } from "@/registry/magicui/text-animate";

export default function Benefits() {
  return (
    <section className="relative w-full bg-white font-manrope py-16">
      <BackgroundLines containerClassName="absolute inset-0" lineClassName="via-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[#7F00FF]">
            Unlock the Full Potential of Your Real Estate Business
          </h2>
          
          {/* Inbound Automator Benefits */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] py-12 px-4">
              <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center text-[#7F00FF]">Inbound Automator</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BenefitCard 
                  title="Automate Tasks, Save Time & Boost Productivity"
                  description="Streamline repetitive tasks like inquiries and pre-qualifying leads, so you can focus on meaningful opportunities."
                  light
                />
                <BenefitCard 
                  title="Build Smarter Lead Profiles, Improved Follow-Ups"
                  description="Get detailed insights and analytics to refine your strategy and boost conversion rates."
                  light
                />
                <BenefitCard 
                  title="Manage Inquiries 24/7, Capture Every Lead"
                  description="Ensure every inquiry is managed promptly, even when you're unavailable."
                  light
                />
              </div>
            </div>
          </div>
          
          {/* Data Organiser Benefits */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] py-12 px-4">
              <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">Data Organiser</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BenefitCard 
                  title="Simplify Data workflows, Save Time & Frustration"
                  description="Automate importing and exporting from databases and MLS systems to eliminate manual work."
                />
                <BenefitCard 
                  title="Make Documents Actionable, Get Instant Answers"
                  description="Transform static documents into interactive resources that provide immediate answers to your questions, enhancing your decision-making process."
                />
                <BenefitCard 
                  title="Keep Everything Connected, Stay Effortlessly Organized"
                  description="Streamline how you manage data and documents for seamless access when you need it."
                />
              </div>
            </div>
          </div>
          
          {/* Insights Benefits */}
          <div>
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(127,0,255,0.15)] py-12 px-4">
              <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center">Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BenefitCard 
                  title="Smarter Insights, Higher Lead Conversions"
                  description="Enable potential buyers to discover the most suitable listings through detailed area data, boosting engagement and conversions."
                />
                <BenefitCard 
                  title="Automated Research, Save Valuable Time"
                  description="Effortlessly generate area insights in seconds, freeing you to focus on growing your business."
                />
                <BenefitCard 
                  title="Detailed Listings, Drive Buyer Engagement"
                  description="Provide buyers with the area details they care about, keeping them on your listings longer and increasing their interest."
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}

function BenefitCard({ title, description, light }: { title: string; description: string; light?: boolean }) {
  return (
    <div className={light ? "bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 border border-gray-100" : "bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"}>
      <h4 className={light ? "text-xl font-semibold mb-3 text-[#7F00FF]" : "text-xl font-semibold mb-3"}>
        <TextAnimate animation="blurInUp" by="word" once delay={0.01} duration={0.2}>
          {title}
        </TextAnimate>
      </h4>
      <div className={light ? "text-gray-700" : "text-white/90"}>
        <TextAnimate animation="blurInUp" by="word" once delay={0.03} duration={0.2} as="span">
          {description}
        </TextAnimate>
      </div>
    </div>
  );
} 