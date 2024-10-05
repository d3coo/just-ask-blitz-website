import { Button } from '@/components/ui/button';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';

export default function MobileApp() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get Our Mobile App</h2>
            <p className="text-lg mb-6">
              Shop on the go with our mobile app. Get exclusive deals, track your orders, and enjoy a seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center">
                <FaGooglePlay className="mr-2" /> Google Play
              </Button>
              <Button className="flex items-center">
                <FaApple className="mr-2" /> App Store
              </Button>
              <Button className="flex items-center">
                <SiHuawei className="mr-2" /> AppGallery
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Mobile App"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}