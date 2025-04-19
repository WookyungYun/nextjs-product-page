import Image from 'next/image';
import { ProductCardProps } from '../../types/product';
import Link from 'next/link';

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <li>
        <Image src={product.thumbnail} alt={product.title} width={300} height={300} />
        <h3>{product.title}</h3>
        <p>{product.price}원</p>
        <p>{product.rating}</p>
        <p>{product.reviews?.length}개</p>
      </li>
    </Link>
  );
}
