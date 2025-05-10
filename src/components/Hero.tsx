
import React from 'react';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero-section h-[600px] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white mb-8">
              Search deals on hotels, homes, and much more...
            </p>
            
            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
