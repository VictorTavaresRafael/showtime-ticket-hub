
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Find and Book Tickets for Amazing Events
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover concerts, sports, theater, comedy, and more. 
            Your next unforgettable experience is just a click away.
          </p>
          
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg flex p-1 mb-10">
            <input
              type="text"
              placeholder="Search for events, artists, or venues..."
              className="flex-grow py-3 px-4 bg-transparent text-gray-800 focus:outline-none"
            />
            <Button className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/events?category=Music">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ticket-purple">
                Music
              </Button>
            </Link>
            <Link to="/events?category=Sports">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ticket-purple">
                Sports
              </Button>
            </Link>
            <Link to="/events?category=Arts">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ticket-purple">
                Arts & Theater
              </Button>
            </Link>
            <Link to="/events?category=Comedy">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ticket-purple">
                Comedy
              </Button>
            </Link>
            <Link to="/events?category=Conference">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ticket-purple">
                Conferences
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
