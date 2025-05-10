
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import HotelCard, { HotelProps } from '../components/HotelCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ui/scroll-reveal';
import { ArrowRight, Star, MapPin } from 'lucide-react';

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
  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <Hero />
        
        {/* Popular Destinations */}
        <PopularDestinations />
        
        {/* Special Offers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-2 font-montserrat text-charcoal">
                Exclusive <span className="text-primary">Offers</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-gray-600 text-center mb-12 font-lato">
                Limited-time deals for your next adventure
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {specialOffers.map((offer, index) => (
                <ScrollReveal 
                  key={offer.id} 
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.2}
                  className="w-full"
                >
                  <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-charcoal font-montserrat">{offer.title}</h3>
                        <p className="text-gray-600 mb-4 font-lato">{offer.description}</p>
                      </div>
                      <Link to={offer.link}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-secondary text-charcoal hover:bg-secondary/90 mt-4 btn-hover-effect btn-secondary-hover">
                            View Offer <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Hotels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-2 font-montserrat text-charcoal">
                Featured <span className="text-primary">Hotels</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-gray-600 text-center mb-12 font-lato">
                Handpicked accommodations for your perfect stay
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHotels.map((hotel, index) => (
                <ScrollReveal key={hotel.id} delay={index * 0.2} className="w-full">
                  <HotelCard key={hotel.id} {...hotel} />
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={0.3} className="flex justify-center mt-12 w-full">
              <Link to="/search">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90 px-8 shadow-md btn-hover-effect font-montserrat">
                    Explore All Hotels <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-2 font-montserrat text-charcoal">
                Guest <span className="text-primary">Reviews</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-gray-600 text-center mb-12 font-lato">
                Authentic experiences from our satisfied travelers
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <ScrollReveal key={index} delay={index * 0.2} className="w-full">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 font-lato italic">
                      "The hotel exceeded all our expectations. From the moment we arrived, the staff was incredibly attentive and made our stay memorable. The amenities were top-notch and the location was perfect for exploring the city."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 50}.jpg`} 
                          alt="Guest" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-charcoal font-montserrat">
                          {index === 0 ? 'Michael Johnson' : index === 1 ? 'Sarah Wilson' : 'David Thompson'}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={14} className="mr-1" />
                          <span className="font-lato">
                            {index === 0 ? 'New York, USA' : index === 1 ? 'London, UK' : 'Sydney, Australia'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Download App CTA */}
        <section className="py-16 bg-charcoal text-white wave-bg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <ScrollReveal direction="left" className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 font-montserrat">Get Our Mobile App</h2>
                <p className="text-white/80 mb-6 font-lato">
                  Book on the go, receive exclusive app-only deals, and manage your trips with ease using our mobile application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal btn-hover-effect">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 14L12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      App Store
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal btn-hover-effect">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Google Play
                    </Button>
                  </motion.div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="md:w-2/5">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform transition-transform hover:scale-105 duration-500">
                  <div className="aspect-[9/16] rounded-lg bg-white/5 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="App Screenshot" 
                      className="h-full w-full object-cover rounded-lg opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/50"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-lg backdrop-blur-sm shadow-lg">
                      <div className="text-charcoal text-sm font-montserrat">
                        <div className="font-bold mb-1">Booking confirmed!</div>
                        <div className="text-xs text-gray-600">Grand Luxury Resort & Spa - July 15-18</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
