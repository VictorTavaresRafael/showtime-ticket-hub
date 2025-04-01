
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCartStore } from '../data/cart';
import { formatCurrency } from '../utils/currencyFormatter';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed Successfully",
      description: "Thank you for your purchase! You will receive an email with your tickets shortly.",
    });
    
    clearCart();
    navigate('/');
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">You haven't added any tickets to your cart yet.</p>
            <Button onClick={() => navigate('/events')}>Browse Events</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {items.map((item) => (
                <div key={item.eventId} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 mb-4">
                  <div className="w-full md:w-32 h-24 mb-4 md:mb-0 mr-0 md:mr-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to={`/events/${item.eventId}`} className="hover:text-ticket-purple">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-ticket-purple font-bold mb-4">
                      {formatCurrency(item.price)} per ticket
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.eventId, Math.max(1, item.quantity - 1))}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-3 w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.eventId, item.quantity + 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="mr-6 font-semibold">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.eventId)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.eventId} className="flex justify-between text-sm">
                      <span>{item.title} (x{item.quantity})</span>
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(getTotalPrice())}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full"
                >
                  Checkout
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3"
                  onClick={() => navigate('/events')}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
