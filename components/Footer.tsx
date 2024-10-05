import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              ModernShop is your destination for cutting-edge products and exceptional shopping experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm hover:underline">Products</Link></li>
              <li><Link href="/categories" className="text-sm hover:underline">Categories</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:underline">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:underline">Returns</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Facebook</a></li>
              <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
              <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
              <li><a href="#" className="text-sm hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">&copy; 2023 ModernShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}