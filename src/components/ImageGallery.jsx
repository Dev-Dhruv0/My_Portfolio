import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Memoized navigation buttons to prevent unnecessary re-renders
const NavigationButton = memo(({ direction, onClick, children }) => (
    <button
        onClick={onClick}
        className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors`}
    >
        {children}
    </button>
));

// Memoized thumbnail component
const Thumbnail = memo(({ image, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden
            ${isActive ? 'ring-2 ring-purple-500' : ''}`}
    >
        <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover"
            loading="lazy"
        />
    </button>
));

export const ImageGallery = memo(({ images, initialImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [touchStart, setTouchStart] = useState(0);

    // Memoized navigation functions
    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Memoized event handlers
    const handleKeyPress = useCallback((e) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    }, [nextImage, prevImage]);

    const handleTouchStart = useCallback((e) => {
        setTouchStart(e.touches[0].clientX);
    }, []);

    const handleTouchEnd = useCallback((e) => {
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd > 50) nextImage();
        if (touchStart - touchEnd < -50) prevImage();
    }, [touchStart, nextImage, prevImage]);

    // Slideshow effect
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(nextImage, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, nextImage]);

    // Keyboard event listeners
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full">
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
                        loading="lazy"
                    />
                </AnimatePresence>

                <NavigationButton direction="left" onClick={prevImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </NavigationButton>
                <NavigationButton direction="right" onClick={nextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </NavigationButton>
            </div>

            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                    <Thumbnail
                        key={image.id}
                        image={image}
                        isActive={currentIndex === index}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <p className="text-sm text-gray-400 mt-2">
                {images[currentIndex].caption}
            </p>

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
});
