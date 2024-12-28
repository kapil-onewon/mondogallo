"use client";

import { useServices } from "@/hooks/use-services";
import { ServiceCard } from "./service-card";

interface ServiceListProps {
  categoryId: string;
}

export function ServiceList({ categoryId }: ServiceListProps) {
  const { services, isLoading } = useServices(categoryId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}