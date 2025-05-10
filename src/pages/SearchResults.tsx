
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HotelCard, { HotelProps } from '../components/HotelCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Filter, X } from 'lucide-react';

// Sample hotels data
const allHotels: HotelProps[] = [
  {
    id: 1,
    name: 'Grand Luxury Resort & Spa',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 5,
    price: 299,
    originalPrice: 399,
    location: 'Downtown Dubai',
    amenities: ['Wifi', 'Pool', 'Parking', 'Spa', 'Restaurant']
  },
  {
    id: 2,
    name: 'Seaside Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 4,
    price: 159,
    location: 'Miami Beach',
    amenities: ['Wifi', 'Pool', 'Breakfast']
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
  },
  {
    id: 4,
    name: 'Mountain View Lodge',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 3,
    price: 129,
    location: 'Swiss Alps',
    amenities: ['Wifi', 'Parking', 'Breakfast']
  },
  {
    id: 5,
    name: 'City Center Apartments',
    image: 'https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 3,
    price: 99,
    originalPrice: 135,
    location: 'Paris, France',
    amenities: ['Wifi', 'Kitchen', 'Workspace']
  },
  {
    id: 6,
    name: 'Palm Beach Resort',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stars: 5,
    price: 349,
    location: 'Maldives',
    amenities: ['Wifi', 'Pool', 'Beach', 'Spa', 'Restaurant']
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests') || '1';
  
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    stars: [] as number[],
    amenities: [] as string[],
    distance: 10, // max 10km from city center
  });
  
  const [filteredHotels, setFilteredHotels] = useState<HotelProps[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Apply filters
  useEffect(() => {
    // Filter hotels based on search criteria and filters
    const filtered = allHotels.filter((hotel) => {
      // Filter by destination if specified
      if (destination && !hotel.location.toLowerCase().includes(destination.toLowerCase())) {
        return false;
      }
      
      // Filter by price range
      if (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1]) {
        return false;
      }
      
      // Filter by star rating if any stars are selected
      if (filters.stars.length > 0 && !filters.stars.includes(hotel.stars)) {
        return false;
      }
      
      // Filter by amenities if any amenities are selected
      if (filters.amenities.length > 0) {
        const hasAllSelectedAmenities = filters.amenities.every(amenity => 
          hotel.amenities.includes(amenity)
        );
        if (!hasAllSelectedAmenities) {
          return false;
        }
      }
      
      return true;
    });
    
    setFilteredHotels(filtered);
  }, [destination, filters]);
  
  const toggleStar = (star: number) => {
    setFilters(prev => {
      const stars = prev.stars.includes(star)
        ? prev.stars.filter(s => s !== star)
        : [...prev.stars, star];
      return { ...prev, stars };
    });
  };
  
  const toggleAmenity = (amenity: string) => {
    setFilters(prev => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Search Summary */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {destination ? `Hotels in ${destination}` : 'All Hotels'}
              </h1>
              <p className="text-gray-600">
                {filteredHotels.length} {filteredHotels.length === 1 ? 'hotel' : 'hotels'} found
                {checkIn && checkOut ? ` • ${checkIn.slice(0, 10)} to ${checkOut.slice(0, 10)}` : ''}
                {guests ? ` • ${guests} ${parseInt(guests) === 1 ? 'guest' : 'guests'}` : ''}
              </p>
            </div>
            <Button 
              className="mt-4 md:mt-0 flex items-center"
              variant="outline"
              onClick={toggleFilters}
            >
              <Filter size={16} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button 
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                    onClick={toggleFilters}
                    aria-label="Close filters"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Price per night</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 500]}
                      min={0}
                      max={500}
                      step={10}
                      value={[filters.priceRange[0], filters.priceRange[1]]}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                    />
                    <div className="flex justify-between">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}+</span>
                    </div>
                  </div>
                </div>
                
                {/* Star Rating Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Star Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <Checkbox
                          id={`star-${star}`}
                          checked={filters.stars.includes(star)}
                          onCheckedChange={() => toggleStar(star)}
                        />
                        <label 
                          htmlFor={`star-${star}`}
                          className="ml-2 flex items-center cursor-pointer"
                        >
                          {Array(5).fill(0).map((_, index) => (
                            <svg 
                              key={index} 
                              className={`w-4 h-4 ${index < star ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Amenities Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Amenities</h3>
                  <div className="space-y-2">
                    {['Wifi', 'Pool', 'Parking', 'Breakfast', 'Gym', 'Spa', 'Restaurant'].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <Checkbox
                          id={`amenity-${amenity}`}
                          checked={filters.amenities.includes(amenity)}
                          onCheckedChange={() => toggleAmenity(amenity)}
                        />
                        <label 
                          htmlFor={`amenity-${amenity}`}
                          className="ml-2 cursor-pointer"
                        >
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Distance from Center Filter */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-4">Distance from center</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[10]}
                      min={0}
                      max={10}
                      step={1}
                      value={[filters.distance]}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, distance: value[0] }))}
                    />
                    <div className="flex justify-between">
                      <span>0 km</span>
                      <span>{filters.distance} km</span>
                    </div>
                  </div>
                </div>
                
                {/* Reset Filters Button */}
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setFilters({
                    priceRange: [0, 500],
                    stars: [],
                    amenities: [],
                    distance: 10,
                  })}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Hotels Grid */}
            <div className="lg:w-3/4">
              {filteredHotels.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="text-6xl mb-4">🏨</div>
                  <h3 className="text-xl font-bold mb-2">No hotels found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters to find more options.
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setFilters({
                      priceRange: [0, 500],
                      stars: [],
                      amenities: [],
                      distance: 10,
                    })}
                  >
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredHotels.map(hotel => (
                    <HotelCard key={hotel.id} {...hotel} />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {filteredHotels.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      &lt;
                    </Button>
                    <Button variant="outline" className="bg-primary text-white">1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline" size="icon">
                      &gt;
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
