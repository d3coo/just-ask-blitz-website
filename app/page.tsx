import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUs from '@/components/AboutUs';
import Categories from '@/components/Categories';
import MobileApp from '@/components/MobileApp';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Categories />
      <MobileApp />
      <Newsletter />
    </div>
  );
}