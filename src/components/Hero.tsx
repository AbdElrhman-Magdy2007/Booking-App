
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <motion.div 
      className="relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-section h-[600px] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat leading-tight"
              variants={itemVariants}
            >
              Discover Your <span className="text-secondary">Perfect Stay</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 font-lato"
              variants={itemVariants}
            >
              Unparalleled accommodations and exclusive deals worldwide
            </motion.p>
            
            {/* Search Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl p-6 mt-8 backdrop-blur-sm bg-opacity-95"
              variants={itemVariants}
            >
              <SearchForm />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-4 w-4 rounded-full bg-secondary opacity-30 animate-ping" style={{ top: '15%', left: '10%', animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute h-3 w-3 rounded-full bg-primary opacity-20 animate-ping" style={{ top: '30%', left: '20%', animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute h-5 w-5 rounded-full bg-white opacity-20 animate-ping" style={{ top: '70%', left: '15%', animationDuration: '5s', animationDelay: '0.5s' }}></div>
        <div className="absolute h-4 w-4 rounded-full bg-secondary opacity-30 animate-ping" style={{ top: '20%', left: '80%', animationDuration: '4.5s', animationDelay: '0.7s' }}></div>
        <div className="absolute h-3 w-3 rounded-full bg-primary opacity-20 animate-ping" style={{ top: '40%', left: '85%', animationDuration: '3.5s', animationDelay: '1.2s' }}></div>
        <div className="absolute h-5 w-5 rounded-full bg-white opacity-20 animate-ping" style={{ top: '75%', left: '75%', animationDuration: '5.5s', animationDelay: '0.2s' }}></div>
      </div>
    </motion.div>
  );
};

export default Hero;
