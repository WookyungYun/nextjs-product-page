'use client';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { useInfiniteProducts } from '../hooks/useProducts';
import { ProductListProps } from '../types/product';
import ProductCard from './productCard';

export default function ProductList({ query }: ProductListProps) {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteProducts(query);
  const allProducts = data?.pages.flatMap((page) => page.products) ?? [];
  const productCount = allProducts?.length ?? 0;

  // 무한스크롤
  useInfiniteScroll({
    isLoading: isFetchingNextPage,
    dataLength: allProducts.length,
    hasNextPage,
    onLoadMore: fetchNextPage
  });
  return (
    <ul>
      {allProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {productCount && <p>일치하는 결과가 없습니다.</p>}
      {!isFetchingNextPage && !hasNextPage && productCount > 0 && <p>더 이상 불러올 수 없습니다.</p>}
    </ul>
  );
}
