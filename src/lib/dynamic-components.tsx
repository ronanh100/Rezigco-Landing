import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with loading states to improve initial load performance
export const ShimmerButton = dynamic(
  () => import("@/registry/magicui/shimmer-button").then(mod => mod.ShimmerButton),
  {
    ssr: false,
    loading: () => <div className="max-w-[200px] w-full h-10 bg-gray-100 rounded-md animate-pulse"></div>
  }
);

export const HeroHighlight = dynamic(
  () => import("@/components/ui/hero-highlight").then(mod => mod.HeroHighlight),
  {
    ssr: false,
    loading: () => <div className="py-8 md:py-10 bg-white rounded-lg"></div>
  }
);

export const Highlight = dynamic(
  () => import("@/components/ui/hero-highlight").then(mod => mod.Highlight),
  { ssr: false }
);



export const WordRotate = dynamic(
  () => import("@/registry/magicui/word-rotate").then(mod => mod.WordRotate),
  {
    ssr: false,
    loading: () => <div className="h-10 w-full bg-gray-50 animate-pulse rounded"></div>
  }
);

export const AnimatedList = dynamic(
  () => import("@/registry/magicui/animated-list").then(mod => mod.AnimatedList),
  {
    ssr: false,
    loading: () => <div className="h-40 w-full bg-gray-50 animate-pulse rounded"></div>
  }
);

export const FlipWords = dynamic(
  () => import("@/components/ui/flip-words").then(mod => mod.FlipWords),
  {
    ssr: false,
    loading: () => <div className="h-10 w-full bg-gray-50 animate-pulse rounded"></div>
  }
);

export const BackgroundBeamsWithCollision = dynamic(
  () => import("@/components/ui/background-beams-with-collision").then(mod => mod.BackgroundBeamsWithCollision),
  {
    ssr: false,
    loading: () => <div className="relative h-full w-full bg-gray-50 animate-pulse rounded"></div>
  }
);

export const OrbitingCircles = dynamic(
  () => import("@/registry/magicui/orbiting-circles").then(mod => mod.OrbitingCircles),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-50 animate-pulse rounded-full"></div>
  }
);

// UI Components demos with dynamic imports
export const ChatEngagerDemo = dynamic(
  () => import("@/components/ui/chat-engager-demo").then(mod => mod.ChatEngagerDemo),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-50 animate-pulse rounded-md">Loading...</div>
  }
);

export const AnimatedListDemo = dynamic(
  () => import("@/components/ui/animated-list-demo").then(mod => mod.AnimatedListDemo),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-50 animate-pulse rounded-md">Loading...</div>
  }
);

export const DataOrganizerDemo = dynamic(
  () => import("@/components/ui/data-organizer-demo").then(mod => mod.DataOrganizerDemo),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-50 animate-pulse rounded-md">Loading...</div>
  }
);

export const InsightsDemo = dynamic(
  () => import("@/components/ui/insights-demo").then(mod => mod.InsightsDemo),
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-50 animate-pulse rounded-md">Loading...</div>
  }
); 