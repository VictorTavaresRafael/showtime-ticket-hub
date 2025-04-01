
import { create } from 'zustand';

export interface CartItem {
  eventId: string;
  title: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (eventId: string) => void;
  updateQuantity: (eventId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addToCart: (item) => set((state) => {
    const existingItem = state.items.find(i => i.eventId === item.eventId);
    
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.eventId === item.eventId 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        )
      };
    }
    
    return { items: [...state.items, item] };
  }),
  
  removeFromCart: (eventId) => set((state) => ({
    items: state.items.filter(i => i.eventId !== eventId)
  })),
  
  updateQuantity: (eventId, quantity) => set((state) => ({
    items: state.items.map(i => 
      i.eventId === eventId ? { ...i, quantity } : i
    )
  })),
  
  clearCart: () => set({ items: [] }),
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }
}));
