import React from "react";

const ItineraryCard = ({ itinerary }) => {

  const renderPriceIcons = (price) => {
    const icons = [];
    for (let i = 0; i < price; i++) {
      icons.push(
        <i
          key={i}
          className="fa-solid fa-money-bill-1-wave"
          style={{ color: "green", marginRight: "5px" }}
        ></i>
      );
    }
    return icons;
  };


  return (
    <div key={itinerary.id}>
      <div className="itinerary-card">
        <div>
          <img src={itinerary.photo} width={200} alt="" />
        </div>
        <div>
          <h3>{itinerary.title}</h3>
          <div className="d-flex">
            <span className="p-3 flex-grow-1">User: {itinerary.user}</span>
            <span className="p-3">Duration: {itinerary.duration}</span>
            <span className="p-3">Price: {renderPriceIcons(itinerary.price)}</span>
          </div>
          <p>{itinerary.description}</p>
          <div className="d-flex justify-content-end mt-2">
            <button className="view-activities-btn">
              <i className="fa-solid fa-person-hiking fa-flip"></i>
              Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
