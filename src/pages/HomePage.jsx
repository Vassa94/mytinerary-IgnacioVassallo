/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Carousel from "../components/Carousel";
import SplineWorld from "../components/Spline";
import { Link } from "react-router-dom";
import cities from './../components/cities';

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
        className="w-100 d-flex hero"
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
          <Link className="btn view-more-btn-home" to="cities" >
            View More
          </Link>
        </div>
        <div className="chevron-container" onClick={scrollToCarousel}>
        <i id="chevron" className="fa-solid fa-chevron-down" ></i>
        </div>
      </div>
      <div
        id="carousel"
        ref={carouselRef}
        className="d-flex justify-content-center section-home"
      >
        <div>
          <h3 className="text-center">Popular Mytineraries</h3>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
