'use client';

import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useInfiniteProducts } from '../../hooks/useProducts';
import { ProductListProps } from '../../types/product';
import LoadingSpinner from '../common/loadingSpinner';
import { CardWrapper, CenteredMessage, ProductsGrid } from './product.style';
import ProductCard from './productCard';

export default function ProductList({ query, viewMode }: ProductListProps) {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteProducts(query);
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
    <>
      <ProductsGrid $viewMode={viewMode}>
        {allProducts?.map((product) => (
          <CardWrapper key={product.id}>
            <ProductCard product={product} viewMode={viewMode} />
          </CardWrapper>
        ))}
      </ProductsGrid>

      {isLoading ? <LoadingSpinner /> : productCount === 0 && <CenteredMessage>일치하는 결과가 없습니다.</CenteredMessage>}
      {!isFetchingNextPage && !hasNextPage && productCount > 0 && <CenteredMessage>더 이상 불러올 수 없습니다.</CenteredMessage>}
    </>
  );
}
