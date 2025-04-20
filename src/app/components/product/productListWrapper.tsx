'use client';

import { useEffect, useRef, useState } from 'react';
import ProductList from './productList';
import ViewModeButtons from './viewModeButtons';
import { ProductListWrapperProps, ViewMode } from '@/app/types/product';
import { getViewMode, setViewModeLocalStorage, VIEW_MODE_EXPIRY_KEY } from '@/app/utils/viewMode';

export default function ProductListWrapper({ query, sortBy, order }: ProductListWrapperProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const timersRef = useRef<NodeJS.Timeout | null>(null);
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setViewModeLocalStorage(mode);
  };

  useEffect(() => {
    const updateViewMode = () => {
      const newMode: ViewMode = Math.random() < 0.5 ? 'list' : 'grid';
      setViewModeLocalStorage(newMode);
      setViewMode(newMode);
      // 타이머 예약
      const nextTimer = setTimeout(updateViewMode, 24 * 60 * 60 * 1000);
      timersRef.current = nextTimer;
    };

    const mode = getViewMode();
    setViewMode(mode);

    const storedExpiry = localStorage.getItem(VIEW_MODE_EXPIRY_KEY);
    const expiryTime = storedExpiry ? parseInt(storedExpiry, 10) : 0;

    const now = Date.now();
    const remainingTime = expiryTime - now;

    if (remainingTime <= 0) {
      // 이미 만료된 상태일때
      updateViewMode();
    } else if (remainingTime > 0) {
      const timer = setTimeout(updateViewMode, remainingTime);
      timersRef.current = timer;
    }

    return () => {
      if (timersRef.current) clearTimeout(timersRef.current);
    };
  }, []);

  return (
    <>
      <ViewModeButtons viewMode={viewMode} onClick={handleViewModeChange} />
      <ProductList query={query} viewMode={viewMode} sortBy={sortBy} order={order} />
    </>
  );
}
