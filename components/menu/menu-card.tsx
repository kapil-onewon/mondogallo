"use client";

import { BuyButton } from "@/components/ui/buy-button";
import { DishCarousel } from "./dish-carousel";
import type { MenuItem } from "@/data/menu-items";

export function MenuCard({ images, name, description, price }: MenuItem) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-200">
      <DishCarousel images={images} name={name} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold">{price}</p>
        <BuyButton name={name} price={price} />
      </div>
    </div>
  );
}