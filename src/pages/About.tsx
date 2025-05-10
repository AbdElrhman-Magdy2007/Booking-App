
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Check, Shield, Clock } from 'lucide-react';

const About = () => {
  // Placeholder team data - would be fetched from a database in a real app
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Sarah founded StayHub with a vision to revolutionize the hotel booking experience for travelers worldwide.'
    },
    {
      name: 'David Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'With over 15 years in tech, David leads our development team in creating innovative solutions for seamless booking experiences.'
    },
    {
      name: 'Priya Patel',
      role: 'Customer Experience Lead',
      image: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" 
              alt="Luxury hotel lobby" 
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to StayHub – Your Trusted Travel Partner</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover exceptional stays at unbeatable prices, wherever your journey takes you
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Story</h2>
            <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-lg">
              <p>
                At StayHub, we are passionate about making travel seamless and enjoyable. Founded in 2025, our platform connects travelers with the best hotels worldwide, offering unbeatable prices and exceptional service. Our mission is to empower you to explore the world with confidence, whether you're planning a relaxing getaway or an important business trip.
              </p>
              <p>
                We understand that finding the perfect accommodation is crucial to a successful journey. That's why we've built a platform that simplifies the booking process while ensuring you have all the information you need to make informed decisions. Our curated selection of hotels spans luxury resorts, boutique accommodations, and budget-friendly options to suit every preference and need.
              </p>
              <p>
                What sets StayHub apart is our commitment to transparency and customer satisfaction. We believe in showing honest reviews, clear pricing, and detailed information about each property. Our dedicated support team works around the clock to address any concerns and ensure your travel experience exceeds expectations.
              </p>
              <p>
                As we continue to grow, we remain focused on our core values of trust, innovation, and exceptional service. We're constantly evolving our platform with new features and expanding our network of hotel partners to bring you even more options for your travels.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us</h2>
            <p className="text-gray-600 text-center mb-12">We're committed to making your travel experience exceptional</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 bg-blue-50 p-4 rounded-full">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
            <p className="text-gray-600 text-center mb-12">The passionate people behind StayHub</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Stay?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who book their accommodations through StayHub.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start Booking Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
