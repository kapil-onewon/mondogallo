"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Since 1970, we've been dedicated to providing the highest quality farm products and services.
              Our commitment to excellence and sustainable farming practices has made us a trusted name in
              the agricultural industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-2xl font-bold mb-2">10k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt="Farm landscape"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}