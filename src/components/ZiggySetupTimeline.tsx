import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ZiggySetupTimeline() {
  const data = [
    {
      title: "Connect Email",
      content: (
        <p className="text-black text-lg md:text-xl leading-relaxed mt-0">
          Securely link your Gmail or Outlook so Finsho can access and manage all deal-related communication.
        </p>
      ),
    },
    {
      title: "Create Deal",
      content: (
        <p className="text-black text-lg md:text-xl leading-relaxed mt-0">
          Add property details and include all parties involved, such as the buyers, sellers, and solicitors.
        </p>
      ),
    },
    {
      title: "Add Stages",
      content: (
        <p className="text-black text-lg md:text-xl leading-relaxed mt-0">
          Lay out the stages in order and include details for each step so your AI agent knows how you work.
        </p>
      ),
    },
    {
      title: "Begin Automation",
      content: (
        <p className="text-black text-lg md:text-xl leading-relaxed mt-0">
          Finsho scans your emails, identifies the first stage, and within minutes drafts a suggested follow-up email to keep things moving.
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