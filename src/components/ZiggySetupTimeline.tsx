import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ZiggySetupTimeline() {
  const data = [
    {
      title: "Set Up Your Account",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Create your Rezigco account, connect your calendar, and upload key documents, links, and videos. 
          Ziggy learns from your materials to align with your brand, ensuring seamless interactions.
        </p>
      ),
    },
    {
      title: "Select Ziggy's Capabilities",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Choose the tools that best support your business. Chat Engager, Inbound Automator, 
          Data Organizer, or Insights, Ziggy adapts to your needs and you only use what you need.
        </p>
      ),
    },
    {
      title: "Ziggy is Live!",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Your AI agent is ready to streamline your real estate workflow. 
          Eliminate manual work, get more high intent leads and enhance your overall productivity.
        </p>
      ),
    },
  ];
  
  return (
    <section className="py-8 md:py-12 w-full">
      <Timeline data={data} />
    </section>
  );
} 