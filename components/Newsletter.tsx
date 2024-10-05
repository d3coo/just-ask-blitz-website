"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    });
    setEmail('');
  };

  return (
    <section className="bg-secondary py-12 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
        <p className="text-center mb-6">Subscribe to our newsletter for exclusive deals and updates.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-64"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}