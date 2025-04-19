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
}

export interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export interface ProductPageProps {
  searchParams: {
    query?: string;
  };
}

export interface SearchFormProps {
  defaultQuery: string;
}

export interface ProductListProps {
  query: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductDetailProps {
  product: Product;
}
