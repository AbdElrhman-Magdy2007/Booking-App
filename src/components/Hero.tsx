
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/scroll-reveal';

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
        {/* Dynamic leaf pattern background */}
        <div className="leaf-pattern">
          {Array(8).fill(0).map((_, i) => (
            <div 
              key={i}
              className="leaf"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight"
              variants={itemVariants}
            >
              Discover Your <span className="text-secondary">Perfect Stay</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 font-inter"
              variants={itemVariants}
            >
              Unparalleled accommodations and exclusive deals worldwide
            </motion.p>
            
            {/* Search Form */}
            <motion.div 
              className="bg-white rounded-lg shadow-xl p-6 mt-8 backdrop-blur-sm bg-opacity-95"
              variants={itemVariants}
              whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
            >
              <SearchForm />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider with Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <motion.path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute h-4 w-4 rounded-full bg-secondary opacity-30" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.3, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 0 }}
          style={{ top: '15%', left: '10%' }}
        />
        <motion.div 
          className="absolute h-3 w-3 rounded-full bg-primary opacity-20" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 4, repeatDelay: 1 }}
          style={{ top: '30%', left: '20%' }}
        />
        <motion.div 
          className="absolute h-5 w-5 rounded-full bg-white opacity-20" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 5, repeatDelay: 0.5 }}
          style={{ top: '70%', left: '15%' }}
        />
        <motion.div 
          className="absolute h-4 w-4 rounded-full bg-secondary opacity-30" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.3, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, repeatDelay: 0.7 }}
          style={{ top: '20%', left: '80%' }}
        />
        <motion.div 
          className="absolute h-3 w-3 rounded-full bg-primary opacity-20" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 1.2 }}
          style={{ top: '40%', left: '85%' }}
        />
        <motion.div 
          className="absolute h-5 w-5 rounded-full bg-white opacity-20" 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, repeatDelay: 0.2 }}
          style={{ top: '75%', left: '75%' }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
