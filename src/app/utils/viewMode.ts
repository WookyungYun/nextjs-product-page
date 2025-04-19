import { ViewMode } from '../types/product';

const VIEW_MODE_KEY = 'product_view_mode';
const VIEW_MODE_EXPIRY_KEY = 'product_view_mode_expiry';

export const getViewMode = (): ViewMode => {
  const storedExpiry = localStorage.getItem(VIEW_MODE_EXPIRY_KEY);
  const currentTime = new Date().getTime();

  if (!storedExpiry || currentTime > parseInt(storedExpiry)) {
    const newMode: ViewMode = Math.random() < 0.5 ? 'list' : 'grid';
    const expiryTime = currentTime + 24 * 60 * 60 * 1000; // 24 hours

    localStorage.setItem(VIEW_MODE_KEY, newMode);
    localStorage.setItem(VIEW_MODE_EXPIRY_KEY, expiryTime.toString());
    return newMode;
  }

  return localStorage.getItem(VIEW_MODE_KEY) as ViewMode;
};

export const setViewModeLocalStorage = (mode: ViewMode): void => {
  localStorage.setItem(VIEW_MODE_KEY, mode);
};
