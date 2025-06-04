import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="bg-white rounded-b-2xl shadow-lg border-b border-gray-200">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <img
                src="/assets/logo.png"
                alt="Company Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/training", label: "Training" },
              { href: "/blogs", label: "Blogs" },
              { href: "/about", label: "About Us" },
            ].map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
                <span
  className={`text-black transition-all duration-300 cursor-pointer transform hover:scale-105 px-3 py-1 rounded-md ${
    isActive(link.href)
      ? "bg-accent-yellow text-black shadow-sm"
      : "hover:bg-accent-yellow hover:text-black"
  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-accent-yellow transition duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-6 pb-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/training", label: "Training" },
              { href: "/blogs", label: "Blogs" },
            ].map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
                <span
                  className={`block px-3 py-2 rounded-md text-black transition-all duration-200 hover:bg-gray-100 ${
                    isActive(link.href)
                      ? "text-accent-yellow bg-gray-100"
                      : ""
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
