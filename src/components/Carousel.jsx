/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const destinationsData = [
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
    // Agrega más destinos aquí
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === destinationsData.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinationsData.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      // Rotar automáticamente cada 5 segundos
      const intervalId = setInterval(nextSlide, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    // Ajustar currentIndex para asegurar que siempre muestre 4 destinos
    let adjustedIndex = currentIndex;
    while (adjustedIndex + 3 >= destinationsData.length) {
      adjustedIndex--;
    }
  
    const visibleDestinations = destinationsData.slice(adjustedIndex, adjustedIndex + 4);
  
    
    
    return (
      <div className="carousel-container">
        <button className="prev-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
        <div className="destinations-carousel">
          {visibleDestinations.map((destination, index) => (
            <div
              key={index}
              className={`destination-box ${index === 0 ? "first" : ""} ${index === visibleDestinations.length - 1 ? "last" : ""} ${index === 1 ? "second" : ""} ${index === visibleDestinations.length - 2 ? "second-last" : ""}`}
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <h3>{destination.name}</h3>
              <div className="location-info">
                <i className="fas fa-map-marker-alt"></i>
                <p>{destination.location}</p>
              </div>
              <button className="view-more-btn" onClick={""}>View More</button>            </div>
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
      </div>
    );
  };
  
  export default Carousel;

