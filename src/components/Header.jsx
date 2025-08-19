import React from 'react';
import { Link } from 'react-router-dom';

// Custom SVG Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md sticky top-0 z-50 w-full">
        {/* Full width container with internal max-width constraint */}
        <div className="w-full px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 focus:outline-none">
              {/* Logo Image */}
              <img
                src="/logo.jpg"
                alt="WAMU BRANDS Logo"
                className="h-10 w-10 rounded-md object-cover"
                loading="lazy"
              />
              {/* Optional Text Logo */}
              <span className="text-xl font-bold hidden sm:inline hover:text-blue-300 transition-colors">
                WAMU BRANDS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <Link to="/shop" className="hover:text-blue-300 transition-colors">Shop</Link>
              <Link to="/courses" className="hover:text-blue-300 transition-colors">Courses</Link>
              <Link to="/convert" className="hover:text-blue-300 transition-colors">Convert</Link>
              <Link to="/about-us" className="hover:text-blue-300 transition-colors">About us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full width dropdown */}
        {isMenuOpen && (
          <div className="w-full bg-black text-white shadow-lg animate-fadeIn md:hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="space-y-4 py-4">
                <Link
                  to="/"
                  className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/courses"
                  className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/convert"
                  className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Convert
                </Link>
                <Link
                  to="/about-us"
                  className="block py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Custom Animation for Mobile Menu */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}