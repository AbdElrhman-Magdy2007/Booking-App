
import React from 'react';
import { Link } from 'react-router-dom';

interface Destination {
  id: number;
  name: string;
  image: string;
  properties: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    properties: 358
  },
  {
    id: 2,
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    properties: 425
  },
  {
    id: 3,
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    properties: 512
  },
  {
    id: 4,
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    properties: 387
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Popular Destinations</h2>
        <p className="text-gray-600 text-center mb-12">Discover the most popular places to stay</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link 
              key={destination.id}
              to={`/search?destination=${destination.name}`}
              className="destination-card group rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-80">
                <img 
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  <p className="text-white/90">{destination.properties} properties</p>
                </div>
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
