
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../data/cart';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-ticket-purple">ShowTime</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-ticket-purple transition">Home</Link>
            <Link to="/events" className="text-gray-700 hover:text-ticket-purple transition">Events</Link>
            <Link to="/about" className="text-gray-700 hover:text-ticket-purple transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-ticket-purple transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-ticket-purple transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-ticket-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
            <Button className="hidden md:inline-flex">Sign Up</Button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-ticket-purple transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-ticket-purple transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-ticket-purple transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-ticket-purple transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline">Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
