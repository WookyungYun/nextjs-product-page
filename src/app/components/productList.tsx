'use client';

import Image from 'next/image';
import { useProducts } from '../hooks/useProducts';
import { ProductListProps } from '../types/product';

export default function ProductList({ query }: ProductListProps) {
  const { data } = useProducts({ query });
  const productListData = data?.products;

  return (
    <ul>
      {productListData?.map((product) => (
        <li key={product.id}>
          <Image src={product.thumbnail} alt={product.title} width={300} height={300} />
          <h3>{product.title}</h3>
          <p>{product.price}원</p>
          <p>{product.rating}</p>
          <p>{product.reviews?.length}개</p>
        </li>
      ))}
      {productListData && productListData?.length < 1 && <p>일치하는 결과가 없습니다.</p>}
    </ul>
  );
}
