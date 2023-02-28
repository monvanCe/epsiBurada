import React from "react";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-body">
        <div className="carousel-content-text">
          <p className="carousel-content-text-light"></p>
          <p className="carousel-content-text-bold"></p>
        </div>
        <div className="carousel-content-image"></div>
        <button className="carousel-left-button-mobile"></button>
        <button className="carousel-right-button-mobile"></button>
      </div>
      <div className="carousel-footer">
        <button className="carousel-left-button-desktop"></button>
        <button className="carousel-right-button-desktop"></button>
      </div>
    </div>
  );
};
export default Carousel;
