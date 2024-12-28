"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Fresh Farm Eggs",
    image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05",
    description: "Farm-fresh eggs delivered daily"
  },
  {
    id: 2,
    name: "Organic Feed",
    image: "https://images.unsplash.com/photo-1585668874431-acc10b2c836a",
    description: "Premium quality organic feed"
  },
  {
    id: 3,
    name: "Farm Equipment",
    image: "https://images.unsplash.com/photo-1595925889916-2a1d773a0613",
    description: "Modern farming equipment"
  }
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our selection of premium farm products</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}