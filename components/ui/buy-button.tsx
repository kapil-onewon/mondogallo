"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { toast } from "sonner";

interface BuyButtonProps {
  name: string;
  price: string;
}

export function BuyButton({ name, price }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    toast.success(`Added ${name} to cart`);
  };

  return (
    <Button 
      onClick={handleBuy} 
      disabled={loading}
      className="w-full mt-4"
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      {loading ? "Adding to cart..." : `Add to Cart ${price}`}
    </Button>
  );
}