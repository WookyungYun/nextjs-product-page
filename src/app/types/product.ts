export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  reviews?: Review[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchProductsParams {
  skip?: number;
  query?: string;
  sortBy?: string;
  order?: Order;
}

export interface ProductDetailPageProps {
  params: {
    id: string;
  };
}
export type Order = 'asc' | 'desc';
export interface ProductPageProps {
  searchParams: {
    query?: string;
    sortBy?: string;
    order?: Order;
  };
}

export interface SearchFormProps {
  defaultQuery: string;
}

export type ViewMode = 'list' | 'grid';

export interface ProductListProps {
  query: string;
  viewMode: ViewMode;
  sortBy?: string;
  order?: Order;
}

export interface ProductCardProps {
  product: Product;
  viewMode: ViewMode;
}

export interface ProductDetailProps {
  product: Product;
}

export interface ViewModeButtonsProps {
  viewMode: ViewMode;
  onClick: (mode: ViewMode) => void;
}

export interface ProductListWrapperProps {
  query: string;
  sortBy?: string;
  order?: Order;
}
