export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  rating: number;
  reviews: number;
}

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  availability: string;
  image: string;
}