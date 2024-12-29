"use client";

import { Category } from "@/types";
import { ProductGrid } from "@/components/products/product-grid";
import { ServiceList } from "@/components/services/service-list";

interface CategoryContentProps {
  category: Category;
}

export function CategoryContent({ category }: CategoryContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <h1 className="text-4xl font-bold mb-8">{category.title}</h1>
      <p className="text-xl text-gray-600 mb-12">{category.description}</p>
      
      {["products", "equipment"].includes(category.id) ? (
        <ProductGrid categoryId={category.id} />
      ) : (
        <ServiceList categoryId={category.id} />
      )}
    </div>
  );
}