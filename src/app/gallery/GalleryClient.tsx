"use client";

import React, { useState } from 'react';
import { GALLERY_IMAGES } from '@/lib/data';

const categories = ['All Work', 'Bridal', 'Makeup', 'Hair', 'Mehndi', 'Engagement', 'Party'];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially (or 3, but 6 fills the grid nicely)

  const filteredImages = activeCategory === 'All Work' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6); // Reset visible count when changing category
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center mb-12 animate-on-scroll">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 text-xs tracking-widest uppercase font-light border transition-colors ${
              activeCategory === cat 
                ? 'bg-emerald text-gold border-emerald' 
                : 'border-gold/30 text-charcoal-muted hover:border-gold hover:text-emerald'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {visibleImages.map((img, i) => (
          <div 
            key={`${img.id}-${i}`} 
            className="animate-on-scroll break-inside-avoid group relative overflow-hidden cursor-pointer" 
            style={{ animationDelay: `${(i % 8) * 60}ms` }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/50 transition-all duration-300 flex flex-col items-center justify-center">
              <p className="text-cream text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-center px-3">
                {img.alt}
              </p>
              <p className="text-gold text-xs uppercase tracking-widest font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredImages.length && (
        <div className="text-center mt-10">
          <button 
            onClick={handleShowMore}
            className="px-8 py-3 border border-gold text-charcoal tracking-widest uppercase text-xs hover:bg-gold hover:text-emerald transition-colors"
          >
            Show More
          </button>
        </div>
      )}

      <div className="text-center mt-14 animate-on-scroll">
        <div className="inline-block border border-gold/25 p-8 max-w-md">
          <p className="font-display text-charcoal text-2xl font-light mb-2">See More on Instagram</p>
          <p className="text-charcoal-muted/60 font-light text-sm mb-5">Follow us for daily bridal inspiration and behind-the-scenes looks.</p>
          <a href="https://instagram.com/gomathibridal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-emerald-dark text-xs tracking-widest uppercase font-medium px-6 py-3 hover:bg-gold-light transition-colors">
            @gomathibridal
          </a>
        </div>
      </div>
    </>
  );
}
