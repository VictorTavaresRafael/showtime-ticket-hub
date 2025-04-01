
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { events, Event } from '../data/events';
import { Button } from '../components/ui/button';

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const category = searchParams.get('category');
  
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
      setFilteredEvents(events.filter(event => 
        event.category.toLowerCase() === category.toLowerCase()
      ));
    } else {
      setActiveCategory(null);
      setFilteredEvents(events);
    }
  }, [category]);
  
  const handleCategoryFilter = (cat: string | null) => {
    setActiveCategory(cat);
    
    if (cat) {
      setFilteredEvents(events.filter(event => event.category === cat));
    } else {
      setFilteredEvents(events);
    }
  };
  
  const categories = ['Music', 'Sports', 'Arts', 'Comedy', 'Conference', 'Food'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">
              {activeCategory ? `${activeCategory} Events` : 'All Events'}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant={!activeCategory ? 'default' : 'outline'}
                onClick={() => handleCategoryFilter(null)}
              >
                All
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? 'default' : 'outline'}
                  onClick={() => handleCategoryFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
            
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No events found for this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
