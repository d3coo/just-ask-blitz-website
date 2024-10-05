import React from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock category data
const categories = [
  { id: 1, name: 'Furniture', products: [
    { id: 1, name: 'Modern Chair', price: 199.99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 3, name: 'Minimalist Bookshelf', price: 299.99, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ]},
  { id: 2, name: 'Lighting', products: [
    { id: 2, name: 'Sleek Table Lamp', price: 89.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ]},
];

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find(cat => cat.id === parseInt(params.id));

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
                Add to Cart
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}