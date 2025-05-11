import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Moon, Sun, Globe, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';

// مكون منفصل لعنصر التنقل
const NavItem = ({ item, isActive, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={item.path}
      className={`font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors ${
        isActive ? 'text-primary dark:text-primary-light' : ''
      }`}
      onClick={onClick}
    >
      {item.label}
    </Link>
  </motion.div>
);

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock auth state
  const location = useLocation();
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  // Change language
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  // Handle search
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  }, [searchQuery]);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Navigation items
  const navItems = [
    { path: '/', label: t('home') },
    { path: '/search', label: t('hotels') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center" aria-label={t('header.logo')}>
            <h1 className="text-2xl font-bold text-primary dark:text-primary-light">
              StayHub
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label={t('header.mainNavigation')}>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              isActive={location.pathname === item.path}
              onClick={() => {}}
            />
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Auth/User Section */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t('profile')}>
                  <User size={20} className="text-gray-700 dark:text-gray-200" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/profile">{t('profile')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bookings">{t('bookings')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>
                  {t('logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/auth?mode=login">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    {t('login')}
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/auth?mode=signup">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    {t('signup')}
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md md:hidden z-20"
              ref={menuRef}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('header.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      aria-label={t('header.searchPlaceholder')}
                      ref={searchRef}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </form>

                {/* Mobile Navigation */}
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    item={item}
                    isActive={location.pathname === item.path}
                    onClick={toggleMenu}
                  />
                ))}

                {/* Mobile Auth/User Section */}
                <div className="flex flex-col space-y-3 mt-4">
                  {isAuthenticated ? (
                    <>
                      <Link to="/profile" onClick={toggleMenu}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                          {t('profile')}
                        </Button>
                      </Link>
                      <Link to="/bookings" onClick={toggleMenu}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                          {t('bookings')}
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                          setIsAuthenticated(false);
                          toggleMenu();
                        }}
                      >
                        {t('logout')}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth?mode=login" onClick={toggleMenu}>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                          {t('login')}
                        </Button>
                      </Link>
                      <Link to="/auth?mode=signup" onClick={toggleMenu}>
                        <Button className="w-full bg-primary text-white hover:bg-primary/90">
                          {t('signup')}
                        </Button>
                      </Link>
                    </>
                  )}
                </div>

          
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;