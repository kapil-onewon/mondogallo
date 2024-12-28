"use client";

import { useState, useEffect } from "react";
import { Service } from "@/types";

const fetchServices = async (categoryId: string): Promise<Service[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const services: Record<string, Service[]> = {
    "transportation": [
      {
        id: "1",
        categoryId: "transportation",
        name: "Livestock Transport",
        description: "Safe and comfortable transportation for your livestock",
        price: 75,
        availability: "24/7",
        image: "https://images.unsplash.com/photo-1586191582056-b7f0372a3ce6",
      },
      {
        id: "2",
        categoryId: "transportation",
        name: "Cold Chain Delivery",
        description: "Temperature-controlled transport for perishables",
        price: 85,
        availability: "Mon-Sat",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
      },
    ],
    "egg-delivery": [
      {
        id: "3",
        categoryId: "egg-delivery",
        name: "Same Day Delivery",
        description: "Fresh eggs delivered within hours",
        price: 25,
        availability: "Daily",
        image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05",
      },
    ],
    "professionals": [
      {
        id: "4",
        categoryId: "professionals",
        name: "Veterinary Service",
        description: "Expert veterinary care for your livestock",
        price: 120,
        availability: "On Call",
        image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      },
      {
        id: "5",
        categoryId: "professionals",
        name: "Farm Consultant",
        description: "Professional advice for farm management",
        price: 95,
        availability: "Weekdays",
        image: "https://images.unsplash.com/photo-1595925889916-2a1d773a0613",
      },
    ],
  };

  return services[categoryId] || [];
};

export function useServices(categoryId: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchServices(categoryId)
      .then(data => {
        setServices(data);
        setIsLoading(false);
      });
  }, [categoryId]);

  return { services, isLoading };
}