import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import { FetchProductsParams, Order } from '../types/product';

export const useProducts = ({ skip = 0, query = '' }: FetchProductsParams) => {
  return useQuery({
    queryKey: ['products', query, skip],
    queryFn: () => fetchProducts({ query, skip })
  });
};

export const useInfiniteProducts = (query: string, sortBy?: string, order?: Order) => {
  return useInfiniteQuery({
    queryKey: ['products', query, sortBy, order],
    queryFn: ({ pageParam = 0 }) => fetchProducts({ skip: pageParam, query, sortBy, order }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.products.length === 20 ? allPages.length * 20 : undefined;
    },
    initialPageParam: 0
  });
};
