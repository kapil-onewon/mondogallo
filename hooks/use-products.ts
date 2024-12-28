"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";

// This is a mock function - replace with actual API call
const fetchProducts = async (categoryId: string): Promise<Product[]> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      id: "1",
      categoryId,
      name: "Premium Chicken Feed",
      description: "High-quality feed for optimal chicken health",
      price: 29.99,
      images: [
        "https://images.unsplash.com/photo-1471119115842-96070c40566d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1471119115842-96070c40566d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      features: [
        "Balanced nutrition",
        "All-natural ingredients",
        "Promotes healthy growth",
      ],
      specifications: {
        "Weight": "20kg",
        "Type": "All-purpose",
        "Age Range": "All ages",
      },
      stock: 100,
      rating: 4.5,
      reviews: 128,
    },
    // Add more mock products as needed
  ];
};

export function useProducts(categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts(categoryId)
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [categoryId]);

  return { products, isLoading };
}