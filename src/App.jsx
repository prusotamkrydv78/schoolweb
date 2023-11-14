import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "./App.scss";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";
import News from "./Components/NewsEvents/News";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <>
      <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About/>} */}
          <Route path="facilities" element={<Features />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes> 
      <Footer />
    </>
  );
};

export default App;
