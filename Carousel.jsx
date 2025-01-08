import React, { useState, useEffect } from "react";
function Carousel({ images = [], autoPlay = true, interval = 3000 }) {const [currentIndex, setCurrentIndex] = useState(0);  useEffect(() => { let slideInterval; if (autoPlay) {  slideInterval = setInterval(() => {handleNext();}, interval);
}return () => {
    clearInterval(slideInterval);
  };  }, [currentIndex, autoPlay, interval]);const handlePrevious = () => { setCurrentIndex((prevIndex) =>  prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};