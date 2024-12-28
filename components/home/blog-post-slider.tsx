"use client";

import * as React from "react";
import { motion } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "../../data/blog-posts";
import { BlogCard } from "../ui/blog-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function BlogPostSlider() {
  const [api, setApi] = React.useState<any>();

  const options = {
    align: "start",
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
  };

  return (
    <div className="w-full container mx-auto px-4 pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Blogs & Articles</h2>
        <p className="text-gray-600">Most liked blogs & articles</p>
      </motion.div>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {blogPosts.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <BlogCard post={post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-4">
          <Button className="text-white bg-red hover:bg-olive ">
            View All &nbsp; <ArrowRight width={18} height={18} />
          </Button>
          <div className="flex items-center gap-2">
            <CarouselPrevious
              className="static text-red hover:bg-white/20 translate-x-0"
              variant="outline"
            />
            <CarouselNext
              className="static text-red hover:bg-white/20 translate-x-0"
              variant="outline"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
