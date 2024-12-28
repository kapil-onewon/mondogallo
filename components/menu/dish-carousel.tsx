"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DishCarouselProps {
  images: string[];
  name: string;
}

export function DishCarousel({ images, name }: DishCarouselProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-64">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <Dialog>
      <div className="relative h-64 cursor-pointer group">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <DialogTrigger asChild>
                  <div className="relative w-full h-[30vh]">
                    <Image
                      src={image}
                      alt={`${name} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </DialogTrigger>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-3 h-8 w-8" />
          <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-3 h-8 w-8" />
        </Carousel>
      </div>
      <DialogContent className="max-w-4xl">
        <DialogTitle className="text-lg font-semibold mb-4">{name}</DialogTitle>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh]">
                  <Image
                    src={image}
                    alt={`${name} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 h-8 w-8" />
          <CarouselNext className="right-3 h-8 w-8" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
