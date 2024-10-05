import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 1, name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661' },
  { id: 2, name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050' },
  { id: 3, name: 'Home & Living', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a' },
  { id: 4, name: 'Sports & Outdoors', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
];

export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-0 relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  layout="responsive"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}