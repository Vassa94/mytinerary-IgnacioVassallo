import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItineraryCard from "../components/ItineraryCard";

const DestinationPage = () => {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState({});
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cities/find/${cityId}`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data);
        setItineraries(data.itineraries);
      })
      .catch((error) => console.error("Error fetching city:", error));
  }, [cityId]);

  const scrollToContent = (elementId) => {
    const contentSection = document.getElementById(elementId);
    contentSection.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div>
      <div
        className="destination-banner"
        style={{ backgroundImage: `url(${cityData.photo})` }}
      >
        <div className="back-arrow">
          <Link className="text-decoration-none" to="/cities">
            <i className="fa-regular fa-hand-point-left"></i>
          </Link>
        </div>
        <div className="banner-text">
          <h2>{cityData.city}</h2>
          <p>{cityData.country}</p>
          <p>{cityData.smalldescription}</p>
        </div>
      </div>
      <div
        className="chevron-container"
        onClick={() => scrollToContent("destination-info")}
      >
        <i id="chevron" className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="destination-info" id="destination-info">
        <h2>More Information</h2>
        <p>Featured Location: {cityData.featuredLocation}</p>
        <p>City: {cityData.city}</p>
        <p>Population: {cityData.population}</p>
        <p>Foundation: {formatDate(cityData.fundation)}</p>
        <p>{cityData.description}</p>
      </div>
      <div className="section-content">
        <div className="d-flex justify-content-center gap-5">
          <button
            className="view-itineraries-btn"
            onClick={() => scrollToContent("itineraries-section")}
          >
            <i className="fa-solid fa-map-location-dot fa-flip"></i> View
            Itineraries
          </button>          
        </div>
        <h2 className="text-center mt-5 mb-5">Itineraries</h2>
        <div id="itineraries-section">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
        <div id="activities-section">
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
