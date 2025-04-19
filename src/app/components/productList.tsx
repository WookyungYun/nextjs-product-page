'use client';

import { useProducts } from '../hooks/useProducts';
import { ProductListProps } from '../types/product';
import ProductCard from './productCard';

export default function ProductList({ query }: ProductListProps) {
  const { data } = useProducts({ query });
  const productListData = data?.products;

  return (
    <ul>
      {productListData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {productListData && productListData?.length < 1 && <p>일치하는 결과가 없습니다.</p>}
    </ul>
  );
}
