"use client";
import React from 'react';
import USAMap from './USAMap';

const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Right to Repair Legislation Map</h2>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Explore the current status of Right to Repair legislation across the United States. 
          Hover over or tap on a state to see detailed information about its legislation status.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <USAMap />
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/resources" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Explore More Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;