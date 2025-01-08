import React, { useState, useEffect } from "react";
function Carousel({ images = [], autoPlay = true, interval = 3000 }) {const [currentIndex, setCurrentIndex] = useState(0);  useEffect(() => { let slideInterval; if (autoPlay) {  slideInterval = setInterval(() => {handleNext();}, interval);
}return () => {
    clearInterval(slideInterval);
  };