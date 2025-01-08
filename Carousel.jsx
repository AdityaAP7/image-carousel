import React, { useState, useEffect } from "react";
function Carousel({ images = [], autoPlay = true, interval = 3000 }) {