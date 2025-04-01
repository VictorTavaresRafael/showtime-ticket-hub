
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Music',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop',
    description: 'From rock concerts to classical orchestras',
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop',
    description: 'Live action from your favorite teams',
  },
  {
    name: 'Arts',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop',
    description: 'Theater, dance, exhibitions, and more',
  },
  {
    name: 'Comedy',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=1000&auto=format&fit=crop',
    description: 'Stand-up specials and comedy shows',
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
          <p className="text-gray-600 mt-2">Explore events based on your interests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/events?category=${category.name}`}
              className="group rounded-lg overflow-hidden shadow-md relative h-64 block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
