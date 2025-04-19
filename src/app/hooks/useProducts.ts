import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import { FetchProductsParams } from '../types/product';

export const useProducts = ({ skip = 0, query = '' }: FetchProductsParams) => {
  return useQuery({
    queryKey: ['products', query, skip],
    queryFn: () => fetchProducts({ query, skip })
  });
};
