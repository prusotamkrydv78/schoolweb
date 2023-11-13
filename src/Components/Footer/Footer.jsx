import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="mainFooter">
        <div className="footer">
          <div className="fotBox"></div>
          <div className="fotBox">
            <div className="fotHeading">
              <h4>Links</h4>
            </div>
            <div className="links">
              <li>Home</li>
              <li>Contact Us</li>
              <li>Gallery</li>
              <li>News & Event</li>
            </div>
          </div>
          <div className="fotBox">
            <div className="fotHeading">
              <h4>About Us</h4>
            </div>
            <div className="links">
              <li>Message From Founder</li>
              <li>Message From Vice Principal</li>
              <li>Mission & Vission</li>
            </div>
          </div>
          <div className="fotBox">
            <div className="fotHeading">
              <h4>Admission</h4>
            </div>
            <div className="links">
              <li>Addmission Form</li>
            </div>
          </div>
        </div>
        <div className="bottomFot">
          <h5>
            2067 All rights reserved Shree Sunrise English Boarding School
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
