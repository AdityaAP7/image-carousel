import React, { useState, useEffect } from "react";
function Carousel({ images = [], autoPlay = true, interval = 3000 }) {const [currentIndex, setCurrentIndex] = useState(0);  useEffect(() => { let slideInterval; if (autoPlay) {  slideInterval = setInterval(() => {handleNext();}, interval);
}return () => {
    clearInterval(slideInterval);
  };  }, [currentIndex, autoPlay, interval]);const handlePrevious = () => { setCurrentIndex((prevIndex) =>  prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };if (!images.length) {
    return <p>No images to display.</p>;
  }  return (
    <div style={styles.carouselContainer}></div> <button onClick={handlePrevious} style={styles.button}>
    &lt;
  </button>   <div style={styles.imageWrapper}><img
          src={images[currentIndex]}
          alt={`carousel-${currentIndex}`}
          style={styles.image}
        /> </div>