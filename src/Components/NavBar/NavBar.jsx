import React from "react";
import "./NavBar.scss";  
const NavBar = () => {
  return (
    <>
      <header>
        <div className="left"></div>
        <div className="right">
          <div className="navbar">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Facilities</li>
              <li>Events</li>
              <li>Admission</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
