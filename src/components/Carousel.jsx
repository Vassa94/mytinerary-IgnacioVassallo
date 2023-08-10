/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import destinationsData from "./cities";

/* const destinationsData = [
    {
        name: "Calafate",
        location: "Argentina",
        image: "src/assets/img/Calafate.png",
    },
    {
        name: "Rio de Janeiro",
        location: "Brasil",
        image: "src/assets/img/Rio.png",
    },
    {
        name: "Gran Muralla",
        location: "China",
        image: "src/assets/img/Muralla.png",
    },
    {
        name: "Cataratas de Iguazu",
        location: "Argentina",
        image: "src/assets/img/Cataratas.png",
    },
    {
        name: "Piramides",
        location: "Egipto",
        image: "src/assets/img/Egipto.png",
    },
]; */

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cantSlides, setCantSlides] = useState(4);

  useEffect(() => {
    const updateCantSlides = () => {
      if (window.innerWidth <= 681) {
        setCantSlides(1);
      } else if (window.innerWidth <= 1021) {
        setCantSlides(2);
      } else if (window.innerWidth <= 1367) {
        setCantSlides(3);
      } else {
        setCantSlides(4);
      }
    };
    updateCantSlides();
    window.addEventListener("resize", updateCantSlides);
    return () => {
      window.removeEventListener("resize", updateCantSlides);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + cantSlides;
      return newIndex >= destinationsData.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cantSlides;
      return newIndex < 0 ? destinationsData.length - cantSlides : newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let adjustedIndex = currentIndex;
  while (adjustedIndex + (cantSlides - 1) >= destinationsData.length) {
    adjustedIndex--;
  }

  const visibleDestinations = destinationsData.slice(
    adjustedIndex,
    adjustedIndex + cantSlides
  );

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="destinations-carousel">
        {visibleDestinations.map((destination, index) => (
          <div
            key={index}
            className={`destination-box ${index === 0 ? "first" : ""} ${
              index === visibleDestinations.length - 1 ? "last" : ""
            } ${index === 1 ? "second" : ""} ${
              index === visibleDestinations.length - 2 ? "second-last" : ""
            }`}
            style={{ backgroundImage: `url(${destination.photo})` }}
          >
            <h3>{destination.featuredLocation}</h3>
            <div className="location-info">
              <i className="fas fa-map-marker-alt"></i>
              <p>{destination.country}</p>
            </div>
            {/* <button className="view-more-btn"  onClick={""}>View More</button>   */}{" "}
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
