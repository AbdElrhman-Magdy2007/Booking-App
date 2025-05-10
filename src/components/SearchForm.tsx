
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Search, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from 'date-fns';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchForm = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState('2');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (destination) params.append('destination', destination);
    if (checkIn) params.append('checkIn', checkIn.toISOString());
    if (checkOut) params.append('checkOut', checkOut.toISOString());
    if (guests) params.append('guests', guests);
    
    // Navigate to search results with query parameters
    navigate(`/search?${params.toString()}`);
  };

  // Animation variants for form fields
  const formFieldVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1, 
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      {/* Destination */}
      <motion.div 
        className="flex-1"
        variants={formFieldVariants}
        initial="initial"
        animate="animate"
        custom={1}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" size={18} />
          <Input 
            type="text"
            placeholder="Where are you going?"
            className="pl-10 border-2 border-gray-200 focus:border-primary form-field-focus"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </motion.div>
      
      {/* Check-in Date */}
      <motion.div 
        className="flex-1"
        variants={formFieldVariants}
        initial="initial"
        animate="animate"
        custom={2}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left font-normal border-2 border-gray-200 form-field-focus hover:bg-white"
            >
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              {checkIn ? (
                format(checkIn, "PPP")
              ) : (
                <span className="text-muted-foreground">Check-in date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              disabled={(date) => date < new Date()}
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </motion.div>
      
      {/* Check-out Date */}
      <motion.div 
        className="flex-1"
        variants={formFieldVariants}
        initial="initial"
        animate="animate"
        custom={3}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left font-normal border-2 border-gray-200 form-field-focus hover:bg-white"
            >
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              {checkOut ? (
                format(checkOut, "PPP")
              ) : (
                <span className="text-muted-foreground">Check-out date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
            <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </motion.div>
      
      {/* Guests */}
      <motion.div 
        className="w-full md:w-32"
        variants={formFieldVariants}
        initial="initial"
        animate="animate"
        custom={4}
      >
        <div className="flex items-center">
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full border-2 border-gray-200 form-field-focus">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-primary" />
                <SelectValue placeholder="Guests" />
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
      </motion.div>
      
      {/* Search Button */}
      <motion.div
        variants={formFieldVariants}
        initial="initial"
        animate="animate"
        custom={5}
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          type="submit" 
          className="bg-secondary text-slate hover:bg-secondary/90 h-10 px-8 font-poppins font-medium shadow-lg btn-hover-effect btn-secondary-hover"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </motion.div>
    </form>
  );
};

export default SearchForm;
