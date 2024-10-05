"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CartModal from './CartModal';
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';

const categories = [
  { id: 1, name: 'Furniture' },
  { id: 2, name: 'Lighting' },
];

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="ModernShop Logo"
            width={150}
            height={40}
          />
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/store" className="bg-primary text-primary-foreground px-3 py-2 rounded-md font-semibold">Store</Link></li>
            <li>
              <div className="relative group">
                <span className="hover:text-primary cursor-pointer">Categories</span>
                <ul className="absolute hidden group-hover:block bg-background shadow-md rounded-md mt-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link href={`/categories/${category.id}`} className="block px-4 py-2 hover:bg-primary hover:text-primary-foreground">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li><Link href="/auth/signin" className="hover:text-primary">Sign In</Link></li>
            <li><CartModal /></li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}