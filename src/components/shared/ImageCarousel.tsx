"use client";

import { useState, useEffect } from "react";

export default function ImageCarousel({ images, fallbackImage }: { images?: string[], fallbackImage: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImages = images && images.length > 0 ? images : [fallbackImage];

  useEffect(() => {
    if (displayImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 2000); // 2 seconds per picture
    
    return () => clearInterval(interval);
  }, [displayImages.length]);

  return (
    <div className="aspect-[4/5] rounded-[3rem] shadow-2xl relative overflow-hidden group">
      {displayImages.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url('${img}')`,
            transform: `translateX(${(idx - currentIndex) * 100}%)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
}
