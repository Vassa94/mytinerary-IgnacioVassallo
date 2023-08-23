import React from "react";
import { Link } from "react-router-dom";

const Card = ({ city }) => {
  const cardStyle = {
    backgroundImage: `url(${city.photo})`, 
  };

  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body" style={overlayStyle}>
        <div className="d-flex align-items-center ">
          <div>
            <h5 className="card-title">{city.city}</h5>
            <p className="card-text">{city.country}</p>
          </div>
          <Link  className="ms-auto btn btn-primary" to={`/destination/${city._id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;


