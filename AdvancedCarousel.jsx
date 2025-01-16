import React, { useState, useEffect, useRef } from "react";
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
