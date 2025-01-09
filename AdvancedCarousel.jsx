import React, { useState, useEffect, useRef } from "react";

// Example CSS classes for transitions, dot & thumbnail styling.
// You can place this in "AdvancedCarousel.css" (or inline styles if you prefer).
// See below for example CSS.

function AdvancedCarousel({
    images = [],
    autoPlay = true,
    interval = 3000,
    showDots = true,
    showThumbnails = true,
    transitionType = "fade", // 'fade' or 'slide'
  }) { const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionClass, setTransitionClass] = useState(""); 
    const touchStartX = useRef(null);
    // Auto-play effect
    useEffect(() => {
        if (!autoPlay || images.length <= 1) return;
        const slideInterval = setInterval(() => {
            handleNext();
          }, interval);
          return () => clearInterval(slideInterval);
        }, [currentIndex, autoPlay, interval, images.length]);// Apply transition class whenever the currentIndex changes
        useEffect(() => {
          if (transitionType === "fade") {   setTransitionClass("fade");
            // remove the transition class after animation completes  const timer = setTimeout(() => setTransitionClass(""), 600);
      return () => clearTimeout(timer);
    }   if (transitionType === "slide") {
        setTransitionClass("slide");   const timer = setTimeout(() => setTransitionClass(""), 600);
        return () => clearTimeout(timer);
      }