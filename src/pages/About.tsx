import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Check, Shield, Clock, Star, Users, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // Placeholder team data - would be fetched from a database in a real app
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://i.postimg.cc/R0PVztfT/3cae079ca0b9e55ec6bfc1b358c9b1e2-1.jpg',
      bio: 'Sarah founded StayHub with a vision to revolutionize the hotel booking experience for travelers worldwide.'
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: 'https://i.postimg.cc/R0PVztfT/3cae079ca0b9e55ec6bfc1b358c9b1e2-1.jpg',
      bio: 'With over 15 years in tech, David leads our development team in creating innovative solutions for seamless booking experiences.'
    },
    {
      name: 'Priya Patel',
      role: 'Customer Experience Lead',
      image: 'https://i.postimg.cc/R0PVztfT/3cae079ca0b9e55ec6bfc1b358c9b1e2-1.jpg',
      bio: 'Priya ensures that every customer interaction with StayHub exceeds expectations, from booking to checkout.'
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: 'Best Prices',
      description: 'We guarantee competitive rates with no hidden fees.',
      icon: <Check className="h-8 w-8 text-primary" />
    },
    {
      title: 'Trusted Partners',
      description: 'We work with top hotels worldwide to ensure quality accommodations.',
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated team is here to assist you anytime, anywhere.',
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      title: 'Easy Booking',
      description: 'Book your perfect stay in just a few clicks with our intuitive platform.',
      icon: <Info className="h-8 w-8 text-primary" />
    }
  ];

  // Stats data
  const stats = [
    { number: '1M+', label: 'Happy Customers', icon: <Users className="h-6 w-6" /> },
    { number: '50K+', label: 'Hotels Worldwide', icon: <Globe className="h-6 w-6" /> },
    { number: '4.9', label: 'Customer Rating', icon: <Star className="h-6 w-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://i.postimg.cc/R0PVztfT/3cae079ca0b9e55ec6bfc1b358c9b1e2-1.jpg" 
              alt="Luxury hotel lobby" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Welcome to StayHub
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Your Trusted Partner for Exceptional Travel Experiences
            </motion.p>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-10"
            >
              Our Story
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg"
            >
              <p>
                At StayHub, we are passionate about making travel seamless and enjoyable. Founded in 2025, our platform connects travelers with the best hotels worldwide, offering unbeatable prices and exceptional service.
              </p>
              <p>
                We understand that finding the perfect accommodation is crucial to a successful journey. That's why we've built a platform that simplifies the booking process while ensuring you have all the information you need to make informed decisions.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-2"
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-center mb-12"
            >
              We're committed to making your travel experience exceptional
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 bg-primary/10 p-4 rounded-full">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet Our Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-2"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-center mb-12"
            >
              The passionate people behind StayHub
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Find Your Perfect Stay?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Join thousands of satisfied travelers who book their accommodations through StayHub.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Start Booking Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
