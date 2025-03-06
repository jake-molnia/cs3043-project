"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with no SSR for the component that uses jsPDF
const CongressionalLetterTemplate = dynamic(
  () => import('@/components/CongressionalLetterTemplate'),
  { ssr: false }
);

const LetterTemplateSection = () => {
  return (
    <div className="mb-12 fade-in-card">
      <h2 className="text-2xl font-bold mb-6 text-center">Take Action: Contact Your Representative</h2>
      <p className="text-center text-lg mb-6 max-w-3xl mx-auto">
        One of the most effective ways to support the Right to Repair movement is to contact your elected officials. 
        Use the template below to create a personalized letter to your representative.
      </p>
      <CongressionalLetterTemplate />
    </div>
  );
};

export default LetterTemplateSection;