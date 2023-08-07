/* eslint-disable no-unused-vars */
import React from "react";

const DestinationPage = () => {
  // Información de prueba
  const destinationData = {
    name: "Destino 1",
    location: "Ubicación 1, País 1",
    image: "ruta-imagen-destino-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget lacus feugiat, tristique urna ut, sollicitudin quam. Integer id tincidunt est.",
  };

  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    contentSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Banner de imagen */}
      <div className="destination-banner" style={{ backgroundImage: `url(${destinationData.image})` }}>
        <h2>{destinationData.name}</h2>
        <p>{destinationData.description}</p>
      </div>

      {/* Información del destino */}
      <div className="destination-info">
        <p>{destinationData.location}</p>
        
        <button className="view-itineraries-btn" onClick={scrollToContent}>
          View Itineraries <i className="fas fa-chevron-down"></i>
        </button>
      </div>

      {/* Agregar el componente de itinerarios aquí */}
      {/* <ItinerariesComponent /> */}
    </div>
  );
};

export default DestinationPage;
