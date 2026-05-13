"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PackageGallery({ mainImage, gallery }: { mainImage: string, gallery?: string[] }) {
  const displayImages = [mainImage, ...(gallery || [])];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, displayImages.length - itemsPerView);

  // Auto-slide every 3 seconds, pause on hover/touch
  useEffect(() => {
    if (displayImages.length <= itemsPerView || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [displayImages.length, isPaused, itemsPerView, maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // If there are no images, return null
  if (!displayImages.length) return null;

  return (
    <div 
      className="relative w-full h-[300px] lg:h-[400px] overflow-hidden mb-12 group cursor-pointer"
      onClick={() => setIsPaused(!isPaused)}
    >
      {/* Sliding Track */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
      >
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full lg:w-1/3 h-full flex-shrink-0 px-2 overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center scale-110"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {displayImages.length > itemsPerView && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white active:scale-95"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white active:scale-95"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  );
}
