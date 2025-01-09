import React from "react";
import Carousel from "./Carousel";
function App() { const sampleImages = [
    "https://via.placeholder.com/600x400/ff7f7f/333333?text=Slide+1",
    "https://via.placeholder.com/600x400/7fffd4/333333?text=Slide+2",
    "https://via.placeholder.com/600x400/87cefa/333333?text=Slide+3",
    "https://via.placeholder.com/600x400/f2bfff/333333?text=Slide+4"
  ];return (
    <div className="App">
      <h1>My Image Carousel</h1>
      <Carousel images={sampleImages} autoPlay={true} interval={2000} />
    </div>
  );
}

export default App;