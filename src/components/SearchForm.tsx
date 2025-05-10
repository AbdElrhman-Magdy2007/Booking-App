
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [guests, setGuests] = useState('1');
  
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

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      {/* Destination */}
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="text"
            placeholder="Where are you going?"
            className="pl-10"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </div>
      
      {/* Check-in Date */}
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left font-normal border"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkIn ? (
                format(checkIn, "PPP")
              ) : (
                <span className="text-muted-foreground">Check-in date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* Check-out Date */}
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left font-normal border"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkOut ? (
                format(checkOut, "PPP")
              ) : (
                <span className="text-muted-foreground">Check-out date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* Guests */}
      <div className="w-full md:w-32">
        <div className="flex items-center">
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-gray-400" />
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
      </div>
      
      {/* Search Button */}
      <Button 
        type="submit" 
        className="bg-secondary text-white hover:bg-secondary/90 h-10 px-8"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
