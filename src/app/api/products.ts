import { BASE_URL } from '../constants/apiConstants';
import { FetchProductsParams, Product, ProductsResponse } from '../types/product';

// 상풍 리스트
export const fetchProducts = async ({ skip = 0, query = '' }: FetchProductsParams): Promise<ProductsResponse> => {
  const params = new URLSearchParams({
    skip: String(skip),
    limit: '20'
  });

  if (query) params.set('q', query);

  const url = `${BASE_URL}${query ? '/search' : ''}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('api error');
  }
  const data: ProductsResponse = await response.json();
  return data;
};

// 상풍 개별조회
export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data: Product = await response.json();
  return data;
};
