'use client';

import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useInfiniteProducts } from '../../hooks/useProducts';
import { ProductListProps } from '../../types/product';
import { CardWrapper, ProductsGrid } from './product.style';
import ProductCard from './productCard';

export default function ProductList({ query, viewMode }: ProductListProps) {
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
    <ProductsGrid $viewMode={viewMode}>
      {allProducts?.map((product) => (
        <CardWrapper key={product.id}>
          <ProductCard product={product} viewMode={viewMode} />
        </CardWrapper>
      ))}
      {productCount === 0 && <p>일치하는 결과가 없습니다.</p>}
      {!isFetchingNextPage && !hasNextPage && productCount > 0 && <p>더 이상 불러올 수 없습니다.</p>}
    </ProductsGrid>
  );
}
