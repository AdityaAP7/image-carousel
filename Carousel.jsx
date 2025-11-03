21import React, { useState, useEffect } from "react";
1function Carousel({ images = [], autoPlay = true, interval = 3000 }) {const [currentIndex, setCurrentIndex] = useState(0);  useEffect(() => { let slideInterval; if (autoPlay) {  slideInterval = setInterval(() => {handleNext();}, interval);
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
          style={styles.image}  };if (!images.length) {
    return <p>No images to display.</p>;
  }  return (
    <div style={styles.carouselContainer}></div> <button onClick={handlePrevious} style={styles.button}>
    &lt;
        /> </div>      <button onClick={handleNext} style={styles.button}>   &gt;
      </button>};  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) %     return <p>No images to display.</p>;
  }  return (
    <div style={styles.carouselContainer}></div> <button onClick={handlePrevious} style={styles.button}>
    &lt;images.length);
  };if (!images.length) {
    return <p>No images to display.</p>;
  }  return (
    <div style={styles.carouselContainer}></div> <button onClick={handlePrevious} style={styles.button}>
  </div>
);
}
const styles = {
  carouselContainer: {
    position: "relative",    display: "flex",
    alignItems: "center",
    justifyContent: "center",width: "600px",
    margin: "auto",
    overflow: "hidden",
  }, button: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    zIndex: 2,
  },imageWrapper: {
    width: "100%",
    textAlign: "center",
  }, image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  },
};

export default Carousel;
