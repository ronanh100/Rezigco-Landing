import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ZiggySetupTimeline() {
  const data = [
    {
      title: "Choose Your Capabilities",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Pick the tools that suit your workflow, whether that means engaging leads, progressing deals, or both.
        </p>
      ),
    },
    {
      title: "Set Up Your Account",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Create your account, connect what matters, and get started quickly without any complexity.
        </p>
      ),
    },
    {
      title: "Go Live!",
      content: (
        <p className="text-black text-base md:text-lg leading-relaxed mt-0">
          Your AI agent is ready to work. Start capturing leads, moving deals forward, and saving valuable time.
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