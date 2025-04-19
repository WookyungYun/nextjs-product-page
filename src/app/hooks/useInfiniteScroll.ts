import { useEffect, useMemo } from 'react';
import { createDebouncedScroll } from '../utils/debounceScroll';

interface InfiniteScrollOptions {
  isLoading: boolean;
  dataLength: number;
  hasNextPage: boolean;
  onLoadMore: () => void;
}

export const useInfiniteScroll = ({ isLoading, dataLength, hasNextPage, onLoadMore }: InfiniteScrollOptions) => {
  const handleScroll = () => {
    const isBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500;

    if (isBottom && !isLoading && hasNextPage) {
      onLoadMore();
    }
  };

  const debouncedScroll = useMemo(() => createDebouncedScroll(handleScroll, 200), [isLoading, dataLength, hasNextPage, onLoadMore]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [debouncedScroll]);
};
