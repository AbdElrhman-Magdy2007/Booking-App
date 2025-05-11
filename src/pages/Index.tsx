import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

// مكون لبطاقة العرض الخاص
const OfferCard = ({ offer, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
        <motion.img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-slate font-poppins">{offer.title}</h3>
          <p className="text-gray-600 mb-4 font-inter">{offer.description}</p>
        </div>
        <Link to={offer.link}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-secondary text-slate hover:bg-secondary/80 rounded-full px-6 py-2 font-poppins">
              View Offer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

// مكون لبطاقة التقييم
const ReviewCard = ({ index, name, location }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', stiffness: 200 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-xl shadow-md p-6 h-full hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="flex items-center mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {Array(5).fill(0).map((_, i) => (
          <motion.span key={i} variants={starVariants}>
            <Star className="w-5 h-5 text-secondary fill-secondary" />
          </motion.span>
        ))}
      </motion.div>
      <p className="text-gray-600 mb-6 font-inter italic">
        "The hotel exceeded all our expectations. From the moment we arrived, the staff was incredibly attentive and made our stay memorable."
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
          <img
            src={`https://i.postimg.cc/R0PVztfT/3cae079ca0b9e55ec6bfc1b358c9b1e2-1.jpg`}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-bold text-slate font-poppins">{name}</p>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin size={14} className="mr-1" />
            <span className="font-inter">{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: 'easeIn' }
    }
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gray-50"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section variants={sectionVariants} initial="hidden" animate="visible">
          <Hero />
        </motion.section>

        {/* Popular Destinations */}
        <motion.section variants={sectionVariants} initial="hidden" animate="visible">
          <PopularDestinations />
        </motion.section>

        {/* Featured Hotels */}
        <motion.section
          className="py-16 bg-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.h2
                className="text-4xl font-bold text-center mb-3 font-poppins text-slate"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Featured <span className="text-primary">Hotels</span>
              </motion.h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <motion.p
                className="text-gray-600 text-center mb-12 font-inter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Handpicked accommodations for your perfect stay
              </motion.p>
            </ScrollReveal>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={sectionVariants}
            >
              {featuredHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <HotelCard {...hotel} />
                </motion.div>
              ))}
            </motion.div>
            <ScrollReveal delay={0.3} className="flex justify-center mt-12 w-full">
              <Link to="/search">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-3 shadow-md font-poppins">
                    Explore All Hotels <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </motion.section>

        {/* Special Offers */}
        <motion.section
          className="py-16 bg-gray-50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.h2
                className="text-4xl font-bold text-center mb-3 font-poppins text-slate"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Exclusive <span className="text-primary">Offers</span>
              </motion.h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <motion.p
                className="text-gray-600 text-center mb-12 font-inter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Limited-time deals for your next adventure
              </motion.p>
            </ScrollReveal>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={sectionVariants}
            >
              {specialOffers.map((offer, index) => (
                <OfferCard key={offer.id} offer={offer} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="py-16 bg-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.h2
                className="text-4xl font-bold text-center mb-3 font-poppins text-slate"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Guest <span className="text-primary">Reviews</span>
              </motion.h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <motion.p
                className="text-gray-600 text-center mb-12 font-inter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Authentic experiences from our satisfied travelers
              </motion.p>
            </ScrollReveal>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={sectionVariants}
            >
              {[
                { name: 'Michael Johnson', location: 'New York, USA' },
                { name: 'Sarah Wilson', location: 'London, UK' },
                { name: 'David Thompson', location: 'Sydney, Australia' }
              ].map((review, index) => (
                <ReviewCard
                  key={index}
                  index={index}
                  name={review.name}
                  location={review.location}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Download App CTA */}
        <motion.section
          className="py-16 bg-gradient-to-br from-slate to-primary text-white relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between"
              variants={sectionVariants}
            >
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <motion.h2
                  className="text-4xl font-bold mb-4 font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Get Our Mobile App
                </motion.h2>
                <motion.p
                  className="text-white/80 mb-6 font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Book on the go, receive exclusive app-only deals, and manage your trips with ease.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-white text-primary hover:bg-white hover:text-slate rounded-full px-6 py-2"
                      aria-label="Download from App Store"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 14L12 10L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      App Store
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-white text-primary hover:bg-white hover:text-slate rounded-full px-6 py-2"
                      aria-label="Download from Google Play"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L2 12L12 22L22 12L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Google Play
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="md:w-2/5"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="aspect-[9/16] rounded-2xl overflow-hidden relative"
                    initial={{ y: 0 }}
                    whileInView={{ y: [-10, 10] }}
                    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
                  >
                    <motion.img
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="App Screenshot"
                      className="h-full w-full object-cover rounded-2xl"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate/40 rounded-2xl" />
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-slate text-sm font-poppins">
                        <div className="font-bold mb-1">Booking confirmed!</div>
                        <div className="text-xs text-gray-600">Grand Luxury Resort & Spa - July 15-18</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;