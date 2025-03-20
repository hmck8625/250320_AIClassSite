'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}
