654321987654321trewq987654321654321qimport React, { useState, useEffect, useRef } from "react";
function AdvancedCarousel({
  images = [],
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showThumbnails = true,
  transitionType = "fade", // 'fade' or 'slide'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const touchStartX = useRef<number | null>(null);

  // -----------------------------
  // 1. Auto-play effect
  // -----------------------------
useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const slideInterval = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval, images.length]);
 // -----------------------------
  // 2. Transition effect
  // -----------------------------
  useEffect(() => {
    if (transitionType === "fade") {
      setTransitionClass("fade");
      const timer = setTimeout(() => setTransitionClass(""), 600);
     return () => clearTimeout(timer);
    }
    if (transitionType === "slide") {
      setTransitionClass("slide");
      const timer = setTimeout(() => setTransitionClass(""), 600);
      return () => clearTimeout(timer);
