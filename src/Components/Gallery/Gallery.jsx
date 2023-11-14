import React from "react";
import "./Gallery.scss";
import img1 from './Images/children.png'

const Gallery = () => {
  return (
    <div className="Gallery">
    <h1 className="heading">Gallery</h1>
      <div className="gallerySlider">
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
