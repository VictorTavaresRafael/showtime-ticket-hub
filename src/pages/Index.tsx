
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedEvents from '../components/FeaturedEvents';
import CategoryShowcase from '../components/CategoryShowcase';
import HowItWorks from '../components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedEvents />
        <CategoryShowcase />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
