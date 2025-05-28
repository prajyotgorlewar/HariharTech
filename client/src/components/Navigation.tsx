import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary-dark border-b border-gray-800">
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
              <Link href="/">
                <a className={`text-white hover:text-accent-yellow transition-colors duration-200 border-b-2 pb-1 ${
                  isActive("/") ? "border-accent-yellow" : "border-transparent"
                }`}>
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a className={`text-white hover:text-accent-yellow transition-colors duration-200 border-b-2 pb-1 ${
                  isActive("/services") ? "border-accent-yellow" : "border-transparent"
                }`}>
                  Services
                </a>
              </Link>
              <Link href="/about">
                <a className={`text-white hover:text-accent-yellow transition-colors duration-200 border-b-2 pb-1 ${
                  isActive("/about") ? "border-accent-yellow" : "border-transparent"
                }`}>
                  About Us
                </a>
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
        <div className="md:hidden bg-primary-dark border-t border-gray-800">
          <div className="px-6 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a 
                className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a 
                className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </Link>
            <Link href="/about">
              <a 
                className="block px-3 py-2 text-white hover:text-accent-yellow transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
