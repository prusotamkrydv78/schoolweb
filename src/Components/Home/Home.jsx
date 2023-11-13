import React from "react";
import img1 from "./Images/children.png";
import "./Home.scss";
import Features from "../Features/Features";
import News from "../NewsEvents/News";
import Tech from "../TeacTeam/Tech";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <>
      <div className="slider">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="welcomePart">
        <div className="left">
          <h1>Welcome To New Oxford English Bording School</h1>

          <p className="desc">
            The New Oxford English Boarding School is a new institution located
            in the bustling city of Janakpur-14, Rajaul. The school has been
            established with the aim of providing high-quality education to
            students from Nursery to Class 8. The school boasts state-of-the-art
            facilities that cater to the needs of its students. The classrooms
            are spacious and well-lit, providing a comfortable and conducive
            environment for learning. The school also has a well-equipped
            library that is stocked with…
          </p>
          <button className="button">Read more</button>
        </div>
        <div className="right">
          <img src={img1} className="welcomeImg" alt="" />
        </div>
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="news">
        <News/>
      </div>
      <div className="teacherTeam">
        <Tech/>
      </div>
      <div className="gallery">
        <Gallery/>
      </div>
      <div className="Contact">
        <Contact/>
      </div>
    </>
  );
};

export default Home;
