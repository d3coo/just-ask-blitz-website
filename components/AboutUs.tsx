import { Button } from '@/components/ui/button';

export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-6">
              At ModernShop, we're passionate about bringing you the latest in modern design and technology. Our curated selection of products is designed to enhance your lifestyle and bring beauty to your everyday experiences.
            </p>
            <p className="text-lg mb-6">
              Founded in 2023, we've quickly become a go-to destination for those seeking quality, style, and innovation. Our team of experts carefully selects each item in our inventory to ensure it meets our high standards of design and functionality.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}