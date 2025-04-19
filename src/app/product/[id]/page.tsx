import { fetchProduct } from '@/app/api/products';
import ProductDetail from '@/app/components/product/produtDetail';
import { ProductDetailPageProps } from '@/app/types/product';

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id: productId } = await params;
  const res = await fetchProduct(productId);

  return (
    <main>
      <ProductDetail product={res} />
    </main>
  );
}
