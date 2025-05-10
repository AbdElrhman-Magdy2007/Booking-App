
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Wifi, Pool, Parking } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface HotelProps {
  id: number;
  name: string;
  image: string;
  stars: number;
  price: number;
  originalPrice?: number; // Optional for showing discounted prices
  location: string;
  amenities: string[];
}

const HotelCard: React.FC<HotelProps> = ({
  id,
  name,
  image,
  stars,
  price,
  originalPrice,
  location,
  amenities
}) => {
  // Calculate discount percentage if applicable
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;
  
  // Render star icons based on rating
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < stars ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-300'}`}
      />
    ));
  };
  
  // Render amenity icons
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi size={16} />;
      case 'pool':
        return <Pool size={16} />;
      case 'parking':
        return <Parking size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="hotel-card bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-green-500">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Name and Stars */}
        <div className="mb-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex items-center mt-1">
            {renderStars()}
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        {/* Amenities */}
        <div className="flex items-center gap-3 my-3">
          {amenities.slice(0, 3).map((amenity, index) => (
            <div key={index} className="flex items-center text-gray-600 text-xs">
              {renderAmenityIcon(amenity)}
              <span className="ml-1">{amenity}</span>
            </div>
          ))}
        </div>
        
        {/* Price and Button */}
        <div className="flex justify-between items-end mt-4">
          <div>
            {originalPrice && (
              <span className="text-gray-400 text-sm line-through mr-2">
                ${originalPrice}/night
              </span>
            )}
            <span className="text-lg font-bold text-green-600">
              ${price}
            </span>
            <span className="text-gray-500 text-sm">/night</span>
          </div>
          <Link to={`/hotel/${id}`}>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
