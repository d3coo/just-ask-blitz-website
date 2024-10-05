"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const products = [
  { id: 1, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12' },
  { id: 2, name: 'Wireless Earbuds', price: 129.99, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df' },
  { id: 3, name: 'Laptop Stand', price: 49.99, image: 'https://images.unsplash.com/photo-1616509091215-57bbeka8b7ea' },
  { id: 4, name: 'Portable Charger', price: 39.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5' },
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Card 
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg m-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0 relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Button variant="secondary">Quick View</Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                  </div>
                  <Button variant="outline" size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}