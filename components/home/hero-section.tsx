"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5"
      >
        <source 
          src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Farm Fresh Solutions</h1>
          <p className="text-xl md:text-2xl mb-8">Delivering Quality Farm Products Since 1970</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#products" className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition">
              View Products
            </a>
            <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}