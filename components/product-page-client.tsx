"use client";

import { useProduct } from "@/hooks/use-product";
import { Button } from "@/components/ui/button";
import { DishCarousel } from "@/components/menu/dish-carousel";

export default function ProductPageClient({
  productId,
}: {
  productId: string;
}) {
  const { product, isLoading } = useProduct(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="h-full">
          <DishCarousel images={product.images} name={product.name} />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold">${product.price}</span>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold">Specifications</h2>
            <dl className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2">
                  <dt className="font-medium">{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Button size="lg" className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
