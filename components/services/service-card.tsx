"use client";

import { Service } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{service.availability}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${service.price}/hr</span>
          <Button>Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}