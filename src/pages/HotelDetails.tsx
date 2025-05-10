
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { format } from 'date-fns';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, MapPin, Wifi, Pool, Parking, Check, Calendar as CalendarIcon, Users } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Sample hotel data
const hotels = [
  {
    id: '1',
    name: 'Grand Luxury Resort & Spa',
    description: 'Nestled in the heart of Downtown Dubai, Grand Luxury Resort & Spa offers an unparalleled luxury experience with stunning views of the city skyline and the Burj Khalifa. The hotel features spacious rooms with elegant decor, a full-service spa, multiple dining options, and a rooftop infinity pool.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    stars: 5,
    price: 299,
    originalPrice: 399,
    location: 'Downtown Dubai, UAE',
    amenities: [
      'Free WiFi',
      'Swimming Pool',
      'Fitness Center',
      'Spa',
      'Restaurant',
      'Room Service',
      'Parking',
      'Airport Shuttle',
      'Business Center',
      'Concierge Service'
    ],
    rating: 9.2,
    reviews: [
      {
        id: 1,
        user: 'John D.',
        rating: 5,
        comment: 'Exceptional service and amazing facilities. The rooftop pool is breathtaking with views of the Burj Khalifa. Highly recommended!',
        date: '2023-04-15'
      },
      {
        id: 2,
        user: 'Sarah M.',
        rating: 4,
        comment: 'Beautiful hotel with great amenities. The spa experience was particularly wonderful. Only giving 4 stars because the restaurant was a bit pricey.',
        date: '2023-03-28'
      },
      {
        id: 3,
        user: 'Robert K.',
        rating: 5,
        comment: 'One of the best hotels I\'ve ever stayed in. The staff went above and beyond to make our anniversary special. We\'ll definitely be back!',
        date: '2023-02-14'
      }
    ],
    roomTypes: [
      { id: 'standard', name: 'Standard Room', price: 299 },
      { id: 'deluxe', name: 'Deluxe Room', price: 399 },
      { id: 'suite', name: 'Executive Suite', price: 599 }
    ],
    latitude: 25.276987,
    longitude: 55.296249
  }
];

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find(h => h.id === id) || hotels[0]; // Fallback to first hotel if not found
  
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(hotel.roomTypes[0].id);
  
  const selectedRoom = hotel.roomTypes.find(room => room.id === roomType) || hotel.roomTypes[0];
  const nights = checkIn && checkOut 
    ? Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;
  const totalPrice = nights * selectedRoom.price;
  
  const handleBookNow = () => {
    if (!checkIn || !checkOut) {
      toast.error('Please select check-in and check-out dates');
      return;
    }
    
    toast.success('Redirecting to checkout...', { 
      description: 'This would redirect to the checkout page in the final implementation.' 
    });
  };
  
  // Render star icons based on rating
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < count ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Image Carousel */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-8">
            <Carousel className="w-full">
              <CarouselContent>
                {hotel.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
                      <img 
                        src={image} 
                        alt={`${hotel.name} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute z-10 inset-0 flex items-center justify-between p-4">
                <CarouselPrevious className="relative" />
                <CarouselNext className="relative" />
              </div>
            </Carousel>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Hotel Details */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                {/* Hotel Name and Rating */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                    <div className="flex items-center mb-1">
                      <div className="flex mr-2">
                        {renderStars(hotel.stars)}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {hotel.stars}-Star Hotel
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-end">
                    <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm">
                      Guest Rating: {hotel.rating}/10
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Based on {hotel.reviews.length} reviews
                    </div>
                  </div>
                </div>
                
                {/* Hotel Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">About This Hotel</h2>
                  <p className="text-gray-600">
                    {hotel.description}
                  </p>
                </div>
                
                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Room Types */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Available Rooms</h2>
                  <div className="space-y-4">
                    {hotel.roomTypes.map(room => (
                      <div 
                        key={room.id} 
                        className={`border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between ${
                          roomType === room.id ? 'border-primary bg-blue-50' : ''
                        }`}
                      >
                        <div>
                          <h3 className="font-semibold">{room.name}</h3>
                          <p className="text-sm text-gray-500">
                            Includes free WiFi, TV, and all basic amenities
                          </p>
                        </div>
                        <div className="flex items-center mt-3 md:mt-0">
                          <div className="text-right mr-4">
                            <p className="font-bold">${room.price}</p>
                            <p className="text-xs text-gray-500">per night</p>
                          </div>
                          {roomType === room.id ? (
                            <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                              Selected
                            </span>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => setRoomType(room.id)}
                            >
                              Select
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Reviews */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">Guest Reviews</h2>
                  <div className="space-y-6">
                    {hotel.reviews.map(review => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{review.user}</p>
                            <div className="flex items-center mt-1">
                              {renderStars(review.rating)}
                              <span className="ml-2 text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Book Your Stay</h2>
                
                <div className="space-y-4">
                  {/* Price Display */}
                  <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                    <div>
                      <p className="text-gray-600">From</p>
                      <p className="text-2xl font-bold text-primary">
                        ${selectedRoom.price}
                        <span className="text-sm font-normal text-gray-500">/night</span>
                      </p>
                    </div>
                    {hotel.originalPrice && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  
                  {/* Check In Date */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Check In</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? (
                            format(checkIn, "PPP")
                          ) : (
                            <span className="text-muted-foreground">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Check Out Date */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Check Out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? (
                            format(checkOut, "PPP")
                          ) : (
                            <span className="text-muted-foreground">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Guests</label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="w-full">
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-gray-400" />
                          <SelectValue placeholder="Select number of guests" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Room Type */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Room Type</label>
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        {hotel.roomTypes.map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            {room.name} - ${room.price}/night
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Price Summary */}
                  {checkIn && checkOut && nights > 0 && (
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">
                          ${selectedRoom.price} x {nights} nights
                        </span>
                        <span>${selectedRoom.price * nights}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Taxes & Fees (10%)</span>
                        <span>${Math.round(totalPrice * 0.1)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                        <span>Total</span>
                        <span>${Math.round(totalPrice * 1.1)}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Book Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 mt-4"
                    onClick={handleBookNow}
                    disabled={!checkIn || !checkOut}
                  >
                    Book Now
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    You won't be charged yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HotelDetails;
