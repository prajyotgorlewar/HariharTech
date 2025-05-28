import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-primary-dark transition-all duration-300 ${
      isScrolled ? 'border-b border-gray-800 shadow-lg' : 'border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <span className="text-white text-xl font-bold hover:text-accent-yellow transition-colors duration-200">
                Harihar Tech
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" onClick={closeMobileMenu}>
                <span className={`text-white hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
                  isActive("/") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
                }`}>
                  Home
                </span>
              </Link>
              <Link href="/services" onClick={closeMobileMenu}>
                <span className={`text-white hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
                  isActive("/services") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
                }`}>
                  Services
                </span>
              </Link>
              <Link href="/about" onClick={closeMobileMenu}>
                <span className={`text-white hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
                  isActive("/about") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
                }`}>
                  About Us
                </span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-accent-yellow focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-gray-800 animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={closeMobileMenu}>
              <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
                isActive("/") ? "text-accent-yellow bg-gray-800/30" : ""
              }`}>
                Home
              </span>
            </Link>
            <Link href="/services" onClick={closeMobileMenu}>
              <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
                isActive("/services") ? "text-accent-yellow bg-gray-800/30" : ""
              }`}>
                Services
              </span>
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
                isActive("/about") ? "text-accent-yellow bg-gray-800/30" : ""
              }`}>
                About Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
