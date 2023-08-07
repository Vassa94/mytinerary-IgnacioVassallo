/* eslint-disable no-unused-vars */
import React from "react";
import CarouselHome from "../components/CarouselHome";
import SplineWorld from "../components/Spline";

const HomePage = () => {
  return (
    <div className="w-100 d-flex justify-content-center" style={{ height: "100vh" }}>
      <div className="spline-canvas">
        <SplineWorld />
      </div>
      <div className="home-container ">
        <div className="content-box">
          <div className="text-box">
            <h2>Find the perfect destination</h2>
            <p >
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
          </div>
          <button className="view-more-btn-home">View More</button>
        </div>
        <div className="image-box">
          <CarouselHome />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
