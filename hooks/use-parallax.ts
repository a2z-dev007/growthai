'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

export function useParallax(multiplier = 0.5) {
  const [offset, setOffset] = useState(0);
  
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const updateOffset = () => {
      setOffset(lenis.scroll * multiplier);
    };

    lenis.on('scroll', updateOffset);
    
    return () => {
      lenis.off('scroll', updateOffset);
    };
  }, [lenis, multiplier]);

  return offset;
}
