import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BreedCard } from "./bree-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const breeds = [
  {
    imageUrl: "/livorno.jpeg", // Replace with SVG or image URL
    name: "Livorno",
    description:
      "Lorem Ipsum is simply dummy To the printing and typesetting industry Lorem.",
  },
  {
    imageUrl: "/araucana.jpeg", // Replace with SVG or image URL
    name: "Araucana",
    description:
      "Lorem Ipsum is simply dummy To the printing and typesetting industry Lorem.",
  },
  {
    imageUrl: "/legbar.jpg", // Replace with SVG or image URL
    name: "Legbar Crema",
    description:
      "Lorem Ipsum is simply dummy To the printing and typesetting industry Lorem.",
  },
  {
    imageUrl: "/marans.jpeg", // Replace with SVG or image URL
    name: "Marans",
    description:
      "Lorem Ipsum is simply dummy To the printing and typesetting industry Lorem.",
  },
  {
    imageUrl: "/olive.jpeg", // Replace with SVG or image URL
    name: "Olive Egger",
    description:
      "Lorem Ipsum is simply dummy To the printing and typesetting industry Lorem.",
  },
];

const ProductCategories = () => {
  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">OUR GLOSSARY OF BREEDS</h2>
        <p className="text-gray-600">
          A comprehensive guide showcasing various breeds with detailed
          information.
        </p>
      </motion.div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {breeds.map((breed, index) => (
        <BreedCard
          key={breed.name}
          {...breed}
          index={index}
        />
      ))}
    </div> */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {breeds.map((breed, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <BreedCard key={breed.name} {...breed} index={index} />{" "}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-4">
          <Button
            className="text-white bg-red hover:bg-olive "
            onClick={() => {}}
          >
            Discover all the breeds &nbsp; <ArrowRight width={18} height={18} />
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
};

export default ProductCategories;

/**
 * 'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'

interface Breed {
  name: string
  imageUrl: string
}

const breeds: Breed[] = [
  {
    name: "Livorno",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-30%20204158-0cnZdP0S3pCat4T4vQ6X2aPcMoITGP.png#livorno"
  },
  {
    name: "Araucana",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-30%20204158-0cnZdP0S3pCat4T4vQ6X2aPcMoITGP.png#araucana"
  },
  {
    name: "Legbar Crema",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-30%20204158-0cnZdP0S3pCat4T4vQ6X2aPcMoITGP.png#legbar"
  },
  {
    name: "Marans",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-30%20204158-0cnZdP0S3pCat4T4vQ6X2aPcMoITGP.png#marans"
  },
  {
    name: "Olive Egger",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-30%20204158-0cnZdP0S3pCat4T4vQ6X2aPcMoITGP.png#olive"
  }
]

export function BreedsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {breeds.map((breed) => (
            <div key={breed.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
              <Card className="group relative overflow-hidden rounded-xl aspect-[4/5]">
                <Image
                  src={breed.imageUrl}
                  alt={breed.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{breed.name}</h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}


 */
