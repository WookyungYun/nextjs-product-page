import ProductList from './components/productList';
import SearchForm from './components/searchForm';
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
