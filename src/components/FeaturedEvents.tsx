
import React from 'react';
import { getFeaturedEvents } from '../data/events';
import EventCard from './EventCard';

const FeaturedEvents = () => {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <p className="text-gray-600 mt-2">Discover our handpicked selection of must-attend events</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
