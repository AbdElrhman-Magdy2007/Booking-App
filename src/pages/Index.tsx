
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import HotelCard, { HotelProps } from '../components/HotelCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample featured hotels data
const featuredHotels: HotelProps[] = [
  {
    id: 1,
    name: 'Grand Luxury Resort & Spa',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 5,
    price: 299,
    originalPrice: 399,
    location: 'Downtown Dubai',
    amenities: ['Wifi', 'Pool', 'Parking']
  },
  {
    id: 2,
    name: 'Seaside Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 4,
    price: 159,
    location: 'Miami Beach',
    amenities: ['Wifi', 'Breakfast', 'Beach Access']
  },
  {
    id: 3,
    name: 'Urban Loft Suites',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 4,
    price: 189,
    originalPrice: 220,
    location: 'New York, Manhattan',
    amenities: ['Wifi', 'Gym', 'Restaurant']
  }
];

// Sample special offers data
const specialOffers = [
  {
    id: 1,
    title: 'Summer Getaway',
    description: 'Enjoy 20% off on all bookings for July and August',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/search?offer=summer'
  },
  {
    id: 2,
    title: 'Luxury Experience',
    description: 'Free spa treatment with 3-night bookings at 5-star hotels',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: '/search?offer=luxury'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <Hero />
        
        {/* Popular Destinations */}
        <PopularDestinations />
        
        {/* Special Offers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Special Offers</h2>
            <p className="text-gray-600 text-center mb-12">Exclusive deals for your next stay</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {specialOffers.map((offer) => (
                <div key={offer.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:w-2/5 h-48 md:h-auto">
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-gray-600">{offer.description}</p>
                    </div>
                    <Link to={offer.link}>
                      <Button className="bg-secondary hover:bg-secondary/90 mt-4">
                        View Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Hotels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Featured Hotels</h2>
            <p className="text-gray-600 text-center mb-12">Handpicked accommodations for your comfort</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHotels.map((hotel) => (
                <HotelCard key={hotel.id} {...hotel} />
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Link to="/search">
                <Button className="bg-primary hover:bg-primary/90 px-8">
                  View All Hotels
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">What Our Guests Say</h2>
            <p className="text-gray-600 text-center mb-12">Read testimonials from our satisfied customers</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Guest Name</p>
                      <p className="text-sm text-gray-500">Location</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Download App CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
                <p className="text-white/80 mb-6">
                  Get exclusive deals and manage your bookings on the go with our mobile application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14L12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    App Store
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="md:w-2/5">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="aspect-[9/16] rounded-lg bg-white/5 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="App Screenshot" 
                      className="h-full w-full object-cover rounded-lg opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
