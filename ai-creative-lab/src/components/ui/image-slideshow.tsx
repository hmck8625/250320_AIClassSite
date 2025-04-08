'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  interval?: number; // ミリ秒単位
  className?: string;
}

export function ImageSlideshow({ images, interval = 5000, className = '' }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 画像が1枚以下の場合は切り替え不要
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
