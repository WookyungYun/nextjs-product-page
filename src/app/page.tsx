import ProductList from './components/product/productList';
import SearchForm from './components/search/searchForm';
import { ProductPageProps } from './types/product';

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const params = await searchParams;
  const query = params.query ?? '';

  return (
    <>
      <SearchForm defaultQuery={query} />
      <ProductList query={query} />
    </>
  );
}
