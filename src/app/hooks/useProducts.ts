import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import { FetchProductsParams } from '../types/product';

export const useProducts = ({ skip = 0, query = '' }: FetchProductsParams) => {
  return useQuery({
    queryKey: ['products', query, skip],
    queryFn: () => fetchProducts({ query, skip })
  });
};

export const useInfiniteProducts = (query: string) => {
  return useInfiniteQuery({
    queryKey: ['products', query],
    queryFn: ({ pageParam = 0 }) => fetchProducts({ skip: pageParam, query }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.products.length === 20 ? allPages.length * 20 : undefined;
    },
    initialPageParam: 0
  });
};
