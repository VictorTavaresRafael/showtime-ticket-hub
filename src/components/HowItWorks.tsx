
import React from 'react';
import { Search, Ticket, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: 'Find Events',
    description: 'Search events by category, date, or location to find exactly what you\'re looking for.',
  },
  {
    icon: <Ticket className="h-10 w-10" />,
    title: 'Book Tickets',
    description: 'Select your preferred seats and easily purchase tickets for your chosen event.',
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: 'Attend & Enjoy',
    description: 'Receive tickets by email, simply show them at the venue, and enjoy the experience!',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-2">Three simple steps to your next amazing experience</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="bg-ticket-lightPurple p-4 rounded-full text-ticket-purple mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block h-0.5 w-12 bg-gray-300 absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
