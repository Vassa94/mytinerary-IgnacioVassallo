/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Carousel from "../components/Carousel";
import SplineWorld from "../components/Spline";

const HomePage = () => {

  const carouselRef = useRef(null);

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <div
        className="w-100 d-flex flex-column align-content-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="spline-canvas">
          <SplineWorld />
        </div>
        <div className="home-container ">
          <div className="text-box">
            <h2>Find the perfect destination</h2>
            <p>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
          </div>
          <button className="view-more-btn-home" onClick={scrollToCarousel}>View More</button>
        </div>
      </div>
      <div id="carousel" ref={carouselRef} className="d-flex justify-content-center section-home">
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
