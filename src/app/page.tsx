import { PageContainer } from './components/product/product.style';
import ProductListWrapper from './components/product/productListWrapper';
import SearchForm from './components/search/searchForm';
import { ProductPageProps } from './types/product';

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const params = await searchParams;
  const query = params.query ?? '';

  return (
    <PageContainer>
      <SearchForm defaultQuery={query} />
      <ProductListWrapper query={query} />
    </PageContainer>
  );
}
