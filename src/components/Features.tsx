"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { FlipWords } from "@/components/ui/flip-words";
import { TextAnimate } from "@/registry/magicui/text-animate";

export default function Features() {
  const tabs = [
    {
      title: "Chat Engager",
      value: "chat-engager",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 pl-10 pr-10 pb-8 text-gray-800 bg-white border-2 border-[#922ea4] font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <div className="space-y-4 text-sm md:text-base pt-4">
            <div>
              <h4 className="font-semibold text-[#922ea4]">Seamless Integration</h4>
              <span>
                Embed the chat on your site effortlessly.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Custom Design</h4>
              <span>
                Match the chat's style to your branding and colors.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">24/7 Engagement</h4>
              <span>
                Always available to answer queries and book calls.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Chat Analytics</h4>
              <span>
                Monitor chats, track trends, and analyze performance.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Tailored Responses</h4>
              <span>
                Deliver accurate answers using your custom business knowledge base.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Inbound Automator",
      value: "inbound-automator",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 pl-10 pr-10 pb-8 text-gray-800 bg-white border-2 border-[#922ea4] font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <div className="space-y-4 text-sm md:text-base pt-4">
            <div>
              <h4 className="font-semibold text-[#922ea4]">Message Analysis</h4>
              <span>
                Understand inquiries with intelligent AI-driven insights.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Lead Qualification</h4>
              <span>
                Identify high-intent leads that meet your criteria to move to the next stage.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Personalized Replies</h4>
              <span>
                Tailor responses to inquiries in your tone using info from your business knowledge base.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Lead Profiling</h4>
              <span>
                Build detailed profiles for better follow-up.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Inquiry Analytics</h4>
              <span>
                Track inquiries, conversions, and engagement trends.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Data Organiser",
      value: "data-organiser",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 pl-10 pr-10 pb-8 text-gray-800 bg-white border-2 border-[#922ea4] font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <div className="space-y-4 text-sm md:text-base pt-4">
            <div>
              <h4 className="font-semibold text-[#922ea4]">Data Import</h4>
              <span>
                Seamlessly upload files and integrate with databases and MLS systems.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Data Export</h4>
              <span>
                Extract organized data for use in databases and MLS systems.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Document Summarization</h4>
              <span>
                Always available to answer queries and book calls.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Interactive Documents</h4>
              <span>
                Ask questions directly about your documents for instant answers.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Insights",
      value: "insights",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 pl-10 pr-10 pb-8 text-gray-800 bg-white border-2 border-[#922ea4] font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <div className="space-y-4 text-sm md:text-base pt-4">
            <div>
              <h4 className="font-semibold text-[#922ea4]">Comprehensive Area Insights</h4>
              <span>
                Deliver detailed neighborhood analytics, such demographics, services, and environmental data.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Smart Lead Matching</h4>
              <span>
                Enable leads to discover listings that align with their needs using intelligent filtering.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Enhanced Listings</h4>
              <span>
                Add valuable area insights to elevate your property profiles.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Automated Data Generation</h4>
              <span>
                Instantly create area insights and conduct neighborhood research with minimal effort.
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-[#922ea4]">Embeddable Widgets</h4>
              <span>
                Integrate area insights section seamlessly into your website.
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative bg-white pt-20 pb-20 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Put Ziggy To Work,
            </h2>
            <div className="h-[60px] flex items-center justify-center mt-1">
              <FlipWords 
                words={["Your Way", "24/7", "Seamlessly"]} 
                duration={800} 
                className="text-[#922ea4] font-bold text-3xl md:text-5xl" 
              />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-xl text-gray-600 max-w-3xl mx-auto block">
              Select the capabilities of your hired AI agent, letting Ziggy handle the tedious work while unlocking new opportunities for success in real estate:
            </span>
          </div>
        </div>
        
        <div className="h-[24rem] md:h-[28rem] [perspective:1000px] relative flex flex-col max-w-4xl mx-auto w-full items-center justify-start mb-16">
          <Tabs 
            tabs={tabs} 
            contentClassName="mt-16" 
            containerClassName="justify-center"
            activeTabClassName="bg-[#922ea4] text-white font-semibold !important"
            tabClassName="font-medium"
          />
        </div>
      </div>
    </section>
  );
} 