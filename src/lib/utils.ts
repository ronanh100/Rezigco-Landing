import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Custom image loader for Cloudflare Pages
export const cloudflareLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // For absolute URLs (external images)
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images
  const params = [`width=${width}`];
  
  if (quality) {
    params.push(`quality=${quality}`);
  }
  
  // Format the image URL for Cloudflare Pages
  return `${src}?${params.join('&')}`;
};
