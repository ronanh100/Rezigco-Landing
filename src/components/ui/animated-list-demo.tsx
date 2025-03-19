"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/registry/magicui/animated-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  time: string;
}

const notifications: Item[] = [
  {
    name: "Property inquiry",
    description: "Is this listing still available for viewing?",
    time: "Just now",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "Selling question",
    description: "What are the next steps to sell my home?",
    time: "2m ago",
    icon: <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />,
    color: "#25D366", // WhatsApp green
  },
  {
    name: "Mortgage query",
    description: "Do I need pre-approval before viewing?",
    time: "5m ago",
    icon: <FontAwesomeIcon icon={faFacebookMessenger} className="text-white text-sm" />,
    color: "#0084FF", // Messenger blue
  },
  {
    name: "Property search",
    description: "Looking for 4-bed homes with garden",
    time: "10m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "Zillow lead",
    description: "Interested in more details about listing",
    time: "15m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "Viewing request",
    description: "Can I schedule a viewing this weekend?",
    time: "20m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "Price inquiry",
    description: "Is there room for negotiation on price?",
    time: "25m ago",
    icon: <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />,
    color: "#25D366", // WhatsApp green
  },
  {
    name: "Agent question",
    description: "Who will be handling the property tour?",
    time: "30m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "Relocation to the area",
    description: "I'm relocating and looking for properties. Can you recommend some options?",
    time: "35m ago",
    icon: <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />,
    color: "#25D366", // WhatsApp green
  },
  {
    name: "First time buyer",
    description: "I'm new to the buying process. Can you walk me through what to expect?",
    time: "40m ago",
    icon: <FontAwesomeIcon icon={faFacebookMessenger} className="text-white text-sm" />,
    color: "#0084FF", // Messenger blue
  },
  {
    name: "Investment opportunity",
    description: "Looking for rental properties with good ROI in the area",
    time: "45m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
  {
    name: "School district inquiry",
    description: "Which properties are in the best school districts?",
    time: "50m ago",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />,
    color: "#D44638", // Gmail red
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg p-2 bg-white",
        "transition-all duration-500 ease-out hover:bg-gray-50/50",
        "border border-gray-100/70"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: color }}
        >
          <div className="flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-row items-center text-xs font-medium">
            <span className="truncate">{name}</span>
            <span className="mx-1 text-xs opacity-50">·</span>
            <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
          </div>
          <p className="text-xs font-normal text-gray-600 truncate">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden",
        className
      )}
    >
      <div style={{ height: '100%' }}>
        <AnimatedList speed={700}>
          {notifications.map((item, idx) => (
            <Notification {...item} key={`notification-item-${idx}`} />
          ))}
        </AnimatedList>
      </div>
      
      {/* Additional gradient overlay specific to this component */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '25px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.95) 85%, rgba(255,255,255,1) 100%)',
          zIndex: 100,
        }}
      />
    </div>
  );
} 