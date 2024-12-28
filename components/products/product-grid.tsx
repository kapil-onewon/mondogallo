"use client";

import { ProductCard } from "./product-card";
import { useProducts } from "@/hooks/use-products";

interface ProductGridProps {
  categoryId: string;
}

export function ProductGrid({ categoryId }: ProductGridProps) {
  const { products, isLoading } = useProducts(categoryId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}