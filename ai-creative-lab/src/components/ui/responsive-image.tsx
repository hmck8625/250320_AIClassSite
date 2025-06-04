'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 85,
  ...props
}: ResponsiveImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // スマホ最適化のためのsizes属性
  const responsiveSizes = sizes || `
    (max-width: 480px) 100vw,
    (max-width: 768px) 50vw,
    (max-width: 1024px) 33vw,
    25vw
  `;

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">画像を読み込めません</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    className: `
      duration-700 ease-in-out
      ${isLoading
        ? 'scale-110 blur-2xl grayscale'
        : 'scale-100 blur-0 grayscale-0'
      }
      ${className}
    `,
    onLoad: () => setLoading(false),
    onError: () => setHasError(true),
    priority,
    quality,
    sizes: responsiveSizes,
    ...props
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
      />
    );
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  );
}