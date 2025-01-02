import React, { useState, useEffect, useRef } from "react";
import './Homepage.css'


function Homepage() {
  const images = [
    "C:\Users\nikhi\OneDrive\Documents\TSA-Webmaster\leaf-love\public\images\vegrest.png",
    "C:\Users\nikhi\OneDrive\Documents\TSA-Webmaster\leaf-love\public\images\cows.png",
    "C:\Users\nikhi\OneDrive\Documents\TSA-Webmaster\leaf-love\public\images\cows.png",
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
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${
                index === currentIndex ? "active" : "inactive"
              }`}
            />
          ))}
        </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
      <button className={`pause ${isPaused ? "paused" : "playing"}`} onClick={handlePauseToggle}>
        <img 
          src= {isPaused ? "../../images/play-button.png" : "../../images/pause.png" }
          alt= {isPaused ? "Play" : "Pause"}
          className="pause-icon"
        />
      </button>
      </div>
      <div className="menusect">
        <div class="slantbar"/>
        <div className="slantbartext">
            
        </div>
      </div>
    </div>
  )
}



export default Homepage;