import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center mb-12 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Modern shopping experience"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Discover Modern Living at ModernShop</h1>
        <p className="text-xl mb-8">Elevate your space with our curated collection of contemporary furniture and decor</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Explore Collection</Button>
      </div>
    </div>
  );
}