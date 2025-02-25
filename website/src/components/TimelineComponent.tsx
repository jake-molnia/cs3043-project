"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  link: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function TimelineComponent({ events }: TimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const sortedEvents = [...events].sort((a, b) => a.year - b.year);
  
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
      
      {/* Timeline Events */}
      <div className="relative">
        {sortedEvents.map((event, index) => (
          <motion.div 
            key={event.id}
            className={`mb-16 flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Content */}
            <div className={`w-5/12 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer border-2 transition-colors ${
                  hoveredEvent === event.id ? 'border-blue-600' : 'border-transparent'
                }`}
              >
                <h3 className="text-xl font-bold text-blue-600">{event.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.description.substring(0, 120)}...</p>
                <p className="mt-2 text-blue-600 font-medium">Click to learn more</p>
              </motion.div>
            </div>
            
            {/* Center Point */}
            <div className="w-2/12 flex justify-center">
              <motion.div 
                className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"
                animate={{ 
                  scale: hoveredEvent === event.id ? 1.25 : 1,
                  backgroundColor: hoveredEvent === event.id ? '#2563EB' : '#3B82F6'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              />
            </div>
            
            {/* Empty space */}
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Modal for selected event */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">{selectedEvent.year}: {selectedEvent.title}</h3>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-white hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                <div className="flex justify-end">
                  <a 
                    href={selectedEvent.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
