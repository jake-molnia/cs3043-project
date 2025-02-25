"use client";

import Link from 'next/link';
import { useEffect } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  useEffect(() => {
    // This effect ensures the component is only rendered on the client side
    // No need to track mounted state as we're not conditionally rendering
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 floating-bubble"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 fade-in" style={{ animationDelay: '0.3s' }}>
          {subtitle}
        </p>
        
        <div className="fade-in" style={{ animationDelay: '0.6s' }}>
          <Link 
            href={ctaLink}
            className="inline-block px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="w-8 h-12 border-2 border-white rounded-full p-1 animate-bounce">
            <div className="w-1 h-3 bg-white rounded-full mx-auto"></div>
          </div>
          <p className="mt-2 text-sm">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
