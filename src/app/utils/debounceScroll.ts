import debounce from 'lodash.debounce';

export const createDebouncedScroll = (callback: () => void, delay = 200) => {
  return debounce(callback, delay);
};
