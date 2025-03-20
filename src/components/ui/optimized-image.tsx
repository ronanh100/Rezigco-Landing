import Image from 'next/image';
import { cloudflareLoader } from '@/lib/utils';
import { CSSProperties, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  src: string;
  width: number;
  height: number;
  quality?: number;
  priority?: boolean;
  alt: string;
  style?: CSSProperties;
  className?: string;
}

/**
 * OptimizedImage component for use with Cloudflare Pages.
 * This component optimizes images while working around Cloudflare size limits.
 */
export default function OptimizedImage({
  src,
  width,
  height,
  quality = 75,
  priority = false,
  alt,
  style,
  className,
  ...props
}: OptimizedImageProps) {
  const isExternal = src.startsWith('http');

  // Handle local and external images differently
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      loader={isExternal ? undefined : cloudflareLoader}
      style={{
        maxWidth: '100%',
        objectFit: 'contain',
        ...style
      }}
      className={className}
      {...props}
    />
  );
} 