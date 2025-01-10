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
      }  }, [currentIndex, transitionType]);
      const handlePrevious = () => { const slideInterval = setInterval(() => {
            handleNext();  const jumpToIndex = (index) => {
        setCurrentIndex(index);
      };
          }, interval);
          return () => clearInterval(slideInterval);
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );      const handlePrevious = () => { const slideInterval = setInterval(() => {
            handleNext();  const jumpToIndex = (index) => {
        setCurrentIndex(index);
      };
      };  const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }; // Dot navigation: jump directly to an index
      const jumpToIndex = (index) => {
        setCurrentIndex(index);
      };
     // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;   // Decide threshold distance for a valid swipe:
    if (distance > 50) { handlePrevious();
    } else if (distance < -50) {  handleNext();
    }
    touchStartX.current = null;
  };   const jumpToIndex = (index) => {   const touchEndX = e.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;   // Decide threshold distance for a valid swipe:
        setCurrentIndex(index);
      };
  if (!images.length) {
    return <p>No images to display.</p>;
  }  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    ></div><button className="arrow-button" onClick={handlePrevious}>
    &lt;
  </button>
  <div className="carousel-slide">
  <img
    src={images[currentIndex]}
    alt={`carousel-${currentIndex}`}
    className={`carousel-image ${transitionClass}`}
  />  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;   // Decide threshold distance for a valid swipe:
    if (distance > 50) { handlePrevious();
    } else if (distance < -50) {  handleNext();
    }
</div>     <button className="arrow-button" onClick={handleNext}>
        &gt;
      </button> {/* Dot-based navigation */}
      {showDots && (
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => jumpToIndex(index)}
              className={`dot ${currentIndex === index ? "active" : ""}`}
            >
              ●    {showThumbnails && (
        <div className="thumbnails-container">
          {images.map((img, index) => ( <img
            key={index}
            </span>
          ))}
        </div>
      )}   {/* Thumbnails */}
      {showThumbnails && (
        <div className="thumbnails-container">
          {images.map((img, index) => ( <img
            key={index}
            src={img}
            alt={`thumbnail-${index}`}
            className={`thumbnail ${
              currentIndex === index ? "selected-thumbnail" : ""
            }`}
            onClick={() => jumpToIndex(index)}
          />
        ))}
      </div>
    )}
  </div>
);
}

export default AdvancedCarousel;
