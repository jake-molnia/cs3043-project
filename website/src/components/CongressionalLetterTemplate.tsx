"use client";

import React, { useState, useEffect } from 'react';

// Declare global interface for window object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global {
  interface Window {
    jspdf: any;
  }
}
import Script from 'next/script';

const CongressionalLetterTemplate = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [repName, setRepName] = useState('');
  const [billName, setBillName] = useState('');
  const [votePref, setVotePref] = useState('in favor of');
  const [impact, setImpact] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [, setPdfLibLoaded] = useState(false);
  
  useEffect(() => {
    // Check if jsPDF is loaded
    const checkJsPDF = setInterval(() => {
      if (typeof window !== 'undefined' && window.jspdf) {
        setPdfLibLoaded(true);
        clearInterval(checkJsPDF);
      }
    }, 1000);
    
    return () => clearInterval(checkJsPDF);
  }, []);
  
  const generateLetterText = () => {
    return `${name}
${address}

${new Date().toLocaleDateString()}

${repName}
United States Congress
Washington, DC

Greetings ${repName},

I hope this letter finds you well. I am writing to you as a concerned citizen of ${district}. I strongly urge you to vote ${votePref} ${billName} which is currently under consideration. This matter is of great importance to our community and requires your attention.

This law would directly affect me as a consumer. ${impact}

Thank you for your service to the community, and for taking the time to consider my perspective by reading this. I look forward to your response and hope to see your support in this issue.

Sincerely,
${name}`;
  };

  const downloadLetter = async () => {
    setIsGenerating(true);
    
    try {
      // Access the jsPDF library from global scope (loaded via CDN)
      if (window.jspdf && window.jspdf.jsPDF) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "letter"
        });
        
        // Set font size and styles
        doc.setFont("Helvetica");
        doc.setFontSize(12);
        
        // Add letter content with proper formatting
        const letterText = generateLetterText();
        const paragraphs = letterText.split('\n\n');
        
        let yPosition = 20; // Start position from top in mm
        const lineHeight = 7;
        const margin = 20; // Left margin in mm
        const pageWidth = doc.internal.pageSize.getWidth();
        const maxWidth = pageWidth - (margin * 2); // Maximum width of text in mm
        
        paragraphs.forEach((paragraph) => {
          // Handle empty paragraphs (just add space)
          if (!paragraph.trim()) {
            yPosition += lineHeight;
            return;
          }
          
          // Handle multi-line paragraphs
          const lines = paragraph.split('\n');
          lines.forEach((line) => {
            if (!line.trim()) {
              yPosition += lineHeight;
              return;
            }
            
            // Split long lines to fit page width
            const textLines = doc.splitTextToSize(line, maxWidth);
            textLines.forEach((textLine: string) => {
              // Check if we need to start a new page
              if (yPosition > doc.internal.pageSize.getHeight() - 20) {
                doc.addPage();
                yPosition = 20;
              }
              
              doc.text(textLine, margin, yPosition);
              yPosition += lineHeight;
            });
          });
          
          // Add extra space after paragraphs
          yPosition += lineHeight;
        });
        
        // Save the PDF
        doc.save("letter_to_representative.pdf");
      } else {
        throw new Error("jsPDF not loaded");
      }
    } catch (error) {
      // Fallback to plain text if PDF generation fails
      console.error("PDF generation failed, falling back to text file", error);
      const element = document.createElement('a');
      const file = new Blob([generateLetterText()], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "letter_to_representative.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" strategy="lazyOnload" />
      <h3 className="text-xl font-bold mb-4">Write to Your Representative</h3>
      <p className="mb-4">Use this template to generate a letter to your representative about Right to Repair legislation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Address</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, City, State ZIP"
            rows={2}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your District/State</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Massachusetts 5th District"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Representative&apos;s Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={repName}
            onChange={(e) => setRepName(e.target.value)}
            placeholder="Representative Jane Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bill Name/Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
            placeholder="Right to Repair Act (H.R. 1234)"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vote Preference</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={votePref}
            onChange={(e) => setVotePref(e.target.value)}
          >
            <option value="in favor of">In Favor</option>
            <option value="against">Against</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">How This Affects You</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
          placeholder="Explain how this legislation impacts you personally or professionally. For example: 'As a small business owner who repairs electronics, this legislation would allow me to access repair manuals and parts, resulting in more affordable and timely repairs for my customers.'"
          rows={4}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={downloadLetter}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 flex items-center justify-center"
          disabled={!name || !address || !district || !repName || !billName || !impact || isGenerating}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>Download Letter as PDF</>
          )}
        </button>
        
        {(!name || !address || !district || !repName || !billName || !impact) && (
          <p className="text-sm text-orange-600">Please fill out all fields to enable download.</p>
        )}
        
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-medium">Tips for effective communication:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Be respectful and concise</li>
            <li>Personalize your message with specific examples</li>
            <li>Clearly state what action you want them to take</li>
            <li>Print and mail your letter or send via email to your representative&apos;s office</li>
            <li>Find your representative at <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">house.gov</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CongressionalLetterTemplate;