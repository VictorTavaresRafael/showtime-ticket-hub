
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  price: number;
  featured: boolean;
  category: string;
  availableTickets: number;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Music Festival 2023",
    date: "2023-12-15",
    time: "18:00",
    location: "Central Park, New York",
    description: "A night of amazing music with top artists performing live on stage. Join us for an unforgettable experience with spectacular performances and a vibrant atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    price: 89.99,
    featured: true,
    category: "Music",
    availableTickets: 500
  },
  {
    id: "2",
    title: "Comedy Night Special",
    date: "2023-12-20",
    time: "20:00",
    location: "Laugh Factory, Los Angeles",
    description: "Laugh out loud with our lineup of hilarious comedians. This special event brings together the funniest stand-up performers for a night of entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=2071&auto=format&fit=crop",
    price: 49.99,
    featured: true,
    category: "Comedy",
    availableTickets: 200
  },
  {
    id: "3",
    title: "Tech Conference 2023",
    date: "2023-12-25",
    time: "09:00",
    location: "Convention Center, San Francisco",
    description: "Join industry experts for discussions on the latest technological innovations. Network with professionals and gain insights into emerging trends.",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    price: 199.99,
    featured: false,
    category: "Conference",
    availableTickets: 1000
  },
  {
    id: "4",
    title: "Basketball Championship Final",
    date: "2023-12-30",
    time: "15:30",
    location: "Sports Arena, Chicago",
    description: "Witness the thrilling finale of this year's basketball championship. Experience the intensity and excitement as top teams compete for the title.",
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    price: 120.00,
    featured: false,
    category: "Sports",
    availableTickets: 5000
  },
  {
    id: "5",
    title: "Broadway Musical: Phantom",
    date: "2024-01-05",
    time: "19:30",
    location: "Grand Theater, Broadway",
    description: "Experience the magic of this classic Broadway musical. Let the mesmerizing performances and enchanting music transport you to another world.",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
    price: 150.00,
    featured: true,
    category: "Arts",
    availableTickets: 300
  },
  {
    id: "6",
    title: "Food & Wine Festival",
    date: "2024-01-10",
    time: "12:00",
    location: "Waterfront Park, Seattle",
    description: "Indulge in a culinary journey with gourmet dishes and fine wines. Meet celebrity chefs and enjoy cooking demonstrations throughout this delightful festival.",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop",
    price: 75.00,
    featured: false,
    category: "Food",
    availableTickets: 1500
  }
];

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter(event => event.category === category);
}

export function getFeaturedEvents(): Event[] {
  return events.filter(event => event.featured);
}
