"use client";

import { Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DishCarousel } from "@/components/menu/dish-carousel";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <DishCarousel images={product.images} name={product.name} />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <Link href={`/products/${product.id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}