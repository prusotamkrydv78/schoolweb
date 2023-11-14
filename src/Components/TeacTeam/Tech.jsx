import React, { useState } from "react";
import img1 from "./Images/children.png";
import './Tech.scss'
const Tech = () => {
    const [value,setValue] = useState(0)
    setInterval(() => {
        setValue(value+300)
        console.log(value);
    }, 3000);
  return (
    <div className="teacherTeam">
    <h1 className="heading">Our Teacher Team</h1>
      <div className="techSlider">
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>

        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
        <div className="slide1">
          <img src={img1} alt="..." />
        </div>
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

export default Tech;
