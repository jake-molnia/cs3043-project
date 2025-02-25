"use client";

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  icon?: string;
}

export default function Card({ title, content, icon }: CardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {icon && (
        <div className="text-4xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </motion.div>
  );
}
