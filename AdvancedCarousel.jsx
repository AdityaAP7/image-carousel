import React, { useState, useEffect, useRef } from "react";
function AdvancedCarousel({
  images = [],
  autoPlay = true,
  interval = 3000,
