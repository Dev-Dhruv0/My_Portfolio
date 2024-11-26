import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImageGallery = ({ images, initialImage }) => {
    // State Management
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Navigation Functions
    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard Navigation
    const handleKeyPress = (e) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    };

    // Touch Navigation
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd > 50) nextImage(); //Swipe left
        if (touchStart - touchEnd < -50) prevImage(); //Swipe right
    };

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(nextImage, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    // Add keyboard event listeners
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full">
            {/* Main Image Display */}
            <div
                className="relative aspect-video overflow-hidden rounded-lg"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex].url}
                        alt={images[currentIndex].caption}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden
                            ${currentIndex === index ? 'ring-2 ring-purple-500' : ''}`}
                    >
                        <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Caption */}
            <p className="text-sm text-gray-400 mt-2">
                {images[currentIndex].caption}
            </p>

            {/* Controls */}
            <div className="flex gap-2 mt-2">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                    {isPlaying ? 'Pause' : 'Play'} Slideshow
                </button>
            </div>
        </div>
    );
};
