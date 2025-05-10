
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Bath, Car } from 'lucide-react';

export interface HotelProps {
  id: number;
  name: string;
  image: string;
  stars: number;
  price: number;
  originalPrice?: number;
  location: string;
  amenities: string[];
}

const HotelCard = ({
  id,
  name,
  image,
  stars,
  price,
  originalPrice,
  location,
  amenities
}: HotelProps) => {
  // Calculate discount percentage if there's an original price
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;
    
  // Map amenity names to icons
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi size={16} />;
      case 'pool':
      case 'beach access':
        return <Bath size={16} />;
      case 'parking':
        return <Car size={16} />;
      default:
        return null;
    }
  };
  
  // Only show up to 3 amenities in the card
  const displayAmenities = amenities.slice(0, 3);
  
  return (
    <motion.div
      className="hotel-card bg-white rounded-lg overflow-hidden shadow-lg h-full"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/hotel/${id}`} className="block h-full">
        <div className="relative">
          <img 
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          
          {originalPrice && (
            <div className="absolute top-3 right-3 bg-secondary text-charcoal font-bold text-xs rounded-full px-2 py-1">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 text-charcoal font-montserrat">{name}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex mr-2">
              {Array(5).fill(0).map((_, index) => (
                <Star 
                  key={index} 
                  size={16} 
                  className={`${index < stars ? 'text-secondary fill-secondary' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {stars}-Star Hotel
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={14} className="mr-1 text-primary" />
            <span>{location}</span>
          </div>
          
          {/* Amenities */}
          <div className="flex gap-2 mb-4">
            {displayAmenities.map((amenity, index) => (
              getAmenityIcon(amenity) && (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs flex items-center"
                >
                  {getAmenityIcon(amenity)}
                  <span className="ml-1">{amenity}</span>
                </span>
              )
            ))}
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-primary font-montserrat">${price}</span>
                {originalPrice && (
                  <span className="ml-2 text-sm text-gray-400 line-through">${originalPrice}</span>
                )}
              </div>
              <p className="text-sm text-gray-500">per night</p>
            </div>
            
            <motion.div 
              className="text-sm font-medium text-primary hover:text-emerald-dark underline flex items-center"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HotelCard;
