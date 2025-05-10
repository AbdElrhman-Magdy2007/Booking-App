
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">StayHub</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/search" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Hotels
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons on Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/auth?mode=login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/auth?mode=signup">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-20">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              <Link 
                to="/" 
                className="py-3 font-medium text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/search" 
                className="py-3 font-medium text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                Hotels
              </Link>
              <Link 
                to="/about" 
                className="py-3 font-medium text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="py-3 font-medium text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 mt-4">
                <Link to="/auth?mode=login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/auth?mode=signup" onClick={toggleMenu}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
