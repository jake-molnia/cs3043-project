"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';


// Testimonial data with images
const testimonials = [
  {
    id: 1,
    name: "Benjamin Greenwood",
    role: "",
    text: "Our ability to repair and reuse is an essential skill for us to promote in order to create a sustainable society. It is in our own interest to learn how to repair and service equipment that we ourselves own. I believe that it is also in a company's interest to encourage and facilitate repair because it incentives loyalty and future purchases.",
    image: "/cs3043-project/testimonials/placeholder1.jpg"
  },
  {
    id: 2,
    name: "Astrella Brown",
    role: "Student at WPI",
    text: "Overall I believe right to repair is a great thing! In a town near my small hometown, there used to be many fast food places and many many chain restaurants, recently many restaurants have been going out of business, which I can imagine right to repair had a part in. Overall I think right to repair can support local business owners and is overall good!",
    image: "/cs3043-project/testimonials/placeholder2.png"
  },
  {
    id: 3,
    name: "Adam Field",
    role: "Physics Student at WPI ",
    text: "For me, the right to repair isn't just about convenience. It's about fairness, sustainability, and the freedom to truly own the things we buy. Because in my mind, if I can't fix it, do I really own it at all?",
    image: "/cs3043-project/testimonials/placeholder1.jpg"
  },
  {
    id: 4,
    name: "Rio Blumenthal",
    role: "CS Student at WPI ",
    text: "I think that a side of the issue that doesn't get talked about enough is E-Waste. Too often, when a company intentionally makes something hard to repair, it's just not worth attempting to repair it or paying steep prices to have it repaired at the source, which often leads to them ending up in landfills, contributing to pollution and resource depletion. Extending the lifespan of electronics reduces waste and conserves resources.",
    image: "/cs3043-project/testimonials/placeholder1.jpg"
  },
  {
    id: 5,
    name: "Shreyas Potnuru",
    role: "ECE Student at WPI ",
    text: "Right to Repair matters because it empowers consumers to fix and maintain their devices without being forced into expensive, manufacturer-controlled services. It drives down costs, reduces electronic waste by extending device lifespans, and fosters a competitive repair market that can spark innovation and better service options.",
    image: "/cs3043-project/testimonials/placeholder1.jpg"
  }
];

const TestimonialsSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Create a ref for the form
  const formRef = useRef<HTMLFormElement>(null);

  // This function now validates the form but doesn't prevent submission
  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - we want the form to submit to Formspree
    
    // Simple form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      e.preventDefault(); // Only prevent if validation fails
      setError('Please fill out all fields');
      return;
    }
    
    // Clear any previous error
    setError('');
    
    // Set submitting state - this is just for UI feedback
    setIsSubmitting(true);
    
    // The form will actually submit to Formspree
    // We'll show a thank you message after the form reloads
    // For a better UX, you might want to handle this with AJAX instead
    
    // We can simulate the form submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after successful submission
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset the submitted message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Community Voices</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Hear from people who are passionate about the Right to Repair movement and 
          how it has made a difference in their lives and communities.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-card transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-60 relative overflow-hidden">
                { /* eslint-disable-next-line @next/next/no-img-element */ }
                <img 
                  src={testimonial.image} 
                  alt={`Photo of ${testimonial.name}`}
                  className="w-full h-full object-cover object-center"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0'
                  }}
                  onError={(e) => {
                    // Fallback for missing images - using placeholder image with initials
                    const initials = testimonial.name.split(' ').map(n => n[0]).join('');
                    (e.target as HTMLImageElement).src = `/cs3043-project/api/placeholder/400/300?text=${encodeURIComponent(initials)}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{testimonial.role}</p>
                <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
          <p className="mb-6">We&apos;d love to hear why the right to repair matters to you. Your testimony could inspire others to join the movement and help strengthen our advocacy.</p>
          
          {submitted ? (
            <motion.div 
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you for sharing your story! We&apos;ll be in touch soon.
            </motion.div>
          ) : null}
          
          {error ? (
            <motion.div 
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          ) : null}
          
          <form 
            ref={formRef}
            action="https://formspree.io/f/xqaervye"
            method="POST"
            className="fade-in"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Why does the right to repair matter to you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share your experience or perspective..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <p className="text-sm text-gray-500 mt-2">
                We may feature your testimonial on our website (with your permission).
              </p>
            </div>
            
            {/* Hidden field for Formspree to know what the form is about */}
            <input type="hidden" name="_subject" value="New Right to Repair Testimonial" />
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" name="permission" className="mr-2" />
                  I agree to be contacted about my testimonial
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Your Story'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
