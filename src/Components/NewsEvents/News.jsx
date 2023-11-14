import React from "react";
import "./News.scss";
import img from './Images/news.jpg'
const News = () => {
  return (
    <div className="NewsEvents">
      <div className="heading">
        <h2>NEWS & EVENTS</h2>
      </div>
      <div className="container">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <h6>First Terminal Exam Comming Soon</h6>
          <p>April 29,2023</p>
        </div>
      </div>
      <div className="button">
        <button>Explore more</button>
      </div>
    </div>
  );
};

export default News;
