'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ScrollToTopButton } from './product.style';
import { ScrollToTopProps } from '@/app/types/product';

export default function ScrollToTop({ query, sortBy, order }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    router.push(`?query=${query}&sortBy=${sortBy}&order=${order}&skip=0`);
  };

  if (!visible) return null;

  return <ScrollToTopButton onClick={handleScrollToTop}>↑</ScrollToTopButton>;
}
