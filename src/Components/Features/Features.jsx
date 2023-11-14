import React from "react";
import "./Features.scss";
import { GiChemicalDrop } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { BiSolidBus } from "react-icons/bi";
import {AiFillHome} from 'react-icons/ai'
const Features = () => {
  return (
    <div className="Features">
      <div className="heading">
        <h1>FEATURES AND INFRASTRUCTURE</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <GiChemicalDrop  />
          <h1>Science Lab</h1>
        </div>
        <div className="box">
          <RiComputerFill />
          <h1>Computer Lab</h1>
        </div>
        <div className="box">
          <BiSolidBus   />
          <h1>Transportation</h1>
        </div>
        <div className="box">
          <AiFillHome   />
          <h1>Hostal</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
