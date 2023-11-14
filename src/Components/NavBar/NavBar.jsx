import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header>
        <div className="left"></div>
        <div className="right">
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/facilities">Facilities</NavLink>
              </li>
              <li>
                <NavLink to="/news">Events</NavLink>
              </li>
              <li>
                <NavLink to="addmission">Addmission</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
