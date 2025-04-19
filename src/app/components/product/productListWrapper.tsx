'use client';

import { useState } from 'react';
import ProductList from './productList';
import ViewModeButtons from './viewModeButtons';
import { ProductListWrapperProps } from '@/app/types/product';

export default function ProductListWrapper({ query }: ProductListWrapperProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  return (
    <>
      <ViewModeButtons viewMode={viewMode} setViewMode={setViewMode} />
      <ProductList query={query} viewMode={viewMode} />
    </>
  );
}
