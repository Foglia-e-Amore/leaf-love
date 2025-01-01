import React, { useState, useEffect, useRef } from "react";
import './Homepage.css'
import cows from "../../images/cows.png";

function Homepage() {
    const images = [
        "https://via.placeholder.com/800x400/FF5733/ffffff?text=Slide+1",
        "https://via.placeholder.com/800x400/33FF57/ffffff?text=Slide+2",
        "https://via.placeholder.com/800x400/3357FF/ffffff?text=Slide+3",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isPaused, setIsPaused] = useState(false);
      const intervalRef = useRef(null);
    
      useEffect(() => {
        if (!isPaused) {
          intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 5000);
        }
    
        return () => {
          clearInterval(intervalRef.current);
        };
      }, [isPaused, images.length]);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePauseToggle = () => {
        setIsPaused((prevState) => !prevState);
      };    

  return(
    <div className="Homepage">
      <div className="slideshow">
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slide-image" style={{ display: currentIndex === index ? "block" : "none",}}/>))}
        </div>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
        <button className="pause" onClick={handlePauseToggle}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  )
}



export default Homepage;