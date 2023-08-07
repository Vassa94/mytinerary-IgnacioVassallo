/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "../components/Carousel";

const CitiesPage = () => {
  

  return (
    <div>
      {/* Banner de imagen */}
      <div className="banner-image"></div>

      {/* Cuadro de búsqueda */}
      <div className="search-box">
        <input type="text" placeholder="Search cities..." />
      </div>

      {/* Carrusel de destinos */}
      <div className="destinations-carousel">
      <Carousel  />
      </div>
    </div>
  );
};

export default CitiesPage;