// import { useState, useEffect } from "react";
// import { Link, useLocation } from "wouter";
// import { Menu, X } from "lucide-react";

// export default function Navigation() {
//   const [location] = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const isActive = (path: string) => {
//     return location === path;
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`sticky top-0 z-50 bg-white ${
//       isScrolled ? 'border-b border-gray-800 shadow-lg' : 'border-b border-transparent'
//     }`}>
//       <div className="w-full px-6">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" onClick={closeMobileMenu}>
//               <img
//                 src="/assets/logo.png" 
//                 alt="Company Logo"
//                 className="h-16 w-auto" 
//               />
//             </Link>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <Link href="/" onClick={closeMobileMenu}>
//                 <span className={`text-black, hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
//                   isActive("/") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
//                 }`}>
//                   Home
//                 </span>
//               </Link>
//               <Link href="/services" onClick={closeMobileMenu}>
//                 <span className={`text-black hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
//                   isActive("/services") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
//                 }`}>
//                   Services
//                 </span>
//               </Link>
//               <Link href="/about" onClick={closeMobileMenu}>
//                 <span className={`text-black hover:text-accent-yellow transition-all duration-300 border-b-2 pb-1 cursor-pointer transform hover:scale-105 ${
//                   isActive("/about") ? "border-accent-yellow text-accent-yellow" : "border-transparent hover:border-accent-yellow/50"
//                 }`}>
//                   About Us
//                 </span>
//               </Link>
//             </div>
//           </div>
          
//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button 
//               onClick={toggleMobileMenu}
//               className="text-white hover:text-accent-yellow focus:outline-none transition-colors duration-200"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-primary-dark border-t border-gray-800 animate-in slide-in-from-top-2 duration-200">
//           <div className="px-6 pt-2 pb-3 space-y-1">
//             <Link href="/" onClick={closeMobileMenu}>
//               <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
//                 isActive("/") ? "text-accent-yellow bg-gray-800/30" : ""
//               }`}>
//                 Home
//               </span>
//             </Link>
//             <Link href="/services" onClick={closeMobileMenu}>
//               <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
//                 isActive("/services") ? "text-accent-yellow bg-gray-800/30" : ""
//               }`}>
//                 Services
//               </span>
//             </Link>
//             <Link href="/about" onClick={closeMobileMenu}>
//               <span className={`block px-3 py-2 text-white hover:text-accent-yellow transition-all duration-200 rounded-md hover:bg-gray-800/50 ${
//                 isActive("/about") ? "text-accent-yellow bg-gray-800/30" : ""
//               }`}>
//                 About Us
//               </span>
//             </Link>
//           </div>
//         </div>
//       )}
//       <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-[#0D1B2A] pointer-events-none" />
//     </nav>
//   );
// }

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
