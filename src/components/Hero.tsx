import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ui/scroll-reveal';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, 0.05, 0.01, 0.9],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const particleVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: (custom: number) => ({
      scale: [0.5, 1.2, 0.5],
      opacity: [0, 0.3, 0],
      transition: {
        repeat: Infinity,
        duration: 3 + custom,
        repeatDelay: custom * 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div 
      className="relative w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ opacity, scale, y }}
    >
      <div className="w-full h-[515px] flex items-center justify-center relative">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            y: useTransform(scrollY, [0, 300], [0, 50])
          }}
        >
          <img 
            src="https://i.postimg.cc/nzqMJgh4/ae727b41367c8d317c901cfb77d058cf.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight"
              variants={itemVariants}
            >
              Discover Your <span className="text-green-500 relative">
                Perfect Stay
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-green-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 mb-8 font-inter"
              variants={itemVariants}
            >
              Unparalleled accommodations and exclusive deals worldwide
            </motion.p>
            
            {/* Search Form with Glass Effect */}
            <motion.div 
              className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 mt-8 border border-white/20"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)',
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <SearchForm />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated Wave Divider */}
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

      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 ? 'bg-green-500' : 'bg-green-400'
            } opacity-20`}
            style={{
              height: `${3 + (i % 3)}rem`,
              width: `${3 + (i % 3)}rem`,
              top: `${15 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
