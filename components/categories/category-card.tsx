"use client";

import { Category } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = Icons[category.icon];

  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
          <p className="text-gray-600">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}