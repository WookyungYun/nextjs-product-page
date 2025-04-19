'use client';

import { useState } from 'react';
import ProductList from './productList';
import ViewModeButtons from './viewModeButtons';
import { ProductListWrapperProps, ViewMode } from '@/app/types/product';
import { setViewModeLocalStorage } from '@/app/utils/viewMode';

export default function ProductListWrapper({ query, sortBy, order }: ProductListWrapperProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setViewModeLocalStorage(mode);
  };
  return (
    <>
      <ViewModeButtons viewMode={viewMode} onClick={handleViewModeChange} />
      <ProductList query={query} viewMode={viewMode} sortBy={sortBy} order={order} />
    </>
  );
}
