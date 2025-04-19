import { ProductDetailProps } from '../types/product';

export default function ProductDetail({ product }: ProductDetailProps) {
  return <>{product.id}</>;
}
