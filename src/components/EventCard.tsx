
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { formatDate } from '../utils/dateFormatter';
import { formatCurrency } from '../utils/currencyFormatter';
import { Event } from '../data/events';
import { Button } from './ui/button';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {event.featured && (
          <div className="absolute top-0 right-0 bg-ticket-accent text-white px-3 py-1 text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{event.title}</h3>
        <div className="text-sm text-gray-600 flex items-center mb-1">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>{formatDate(event.date)} • {event.time}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center mb-3">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 line-clamp-3 mb-4">{event.description}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-ticket-purple font-bold">{formatCurrency(event.price)}</span>
          <Link to={`/events/${event.id}`}>
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
