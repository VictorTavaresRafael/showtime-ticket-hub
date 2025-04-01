
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../data/events';
import { useCartStore, CartItem } from '../data/cart';
import { formatDate } from '../utils/dateFormatter';
import { formatCurrency } from '../utils/currencyFormatter';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../components/ui/use-toast';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = getEventById(id || '');
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, the event you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/events')}>Browse Events</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      eventId: event.id,
      title: event.title,
      price: event.price,
      quantity: quantity,
      imageUrl: event.imageUrl
    };
    
    addToCart(cartItem);
    
    toast({
      title: 'Added to cart',
      description: `${quantity} ticket${quantity > 1 ? 's' : ''} for ${event.title} added to your cart`,
    });
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[300px] lg:h-[400px] w-full relative">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              {event.featured && (
                <div className="absolute top-4 right-4 bg-ticket-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                <span className="text-2xl font-bold text-ticket-purple">{formatCurrency(event.price)}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-ticket-purple mr-2" />
                  <div>
                    <h3 className="text-sm text-gray-500">Date</h3>
                    <p className="font-medium">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-ticket-purple mr-2" />
                  <div>
                    <h3 className="text-sm text-gray-500">Time</h3>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-ticket-purple mr-2" />
                  <div>
                    <h3 className="text-sm text-gray-500">Location</h3>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 ticket-pattern">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Ticket className="w-5 h-5 mr-2" /> 
                      Tickets Available
                    </h3>
                    <p className="text-gray-600">{event.availableTickets} remaining</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <select 
                      className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ticket-purple"
                      value={quantity}
                      onChange={handleQuantityChange}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'ticket' : 'tickets'}
                        </option>
                      ))}
                    </select>
                    
                    <Button 
                      onClick={handleAddToCart}
                      className="text-white w-full sm:w-auto"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
