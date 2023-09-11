import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { setCities } from "../redux/citiesSlice";

const CitiesPage = () => {
  //const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);

  useEffect(() => {
    fetch("http://localhost:3000/cities/view")
      .then((response) => response.json())
      .then((data) => dispatch(setCities(data)))
      .catch((error) => {
        console.error("Error fetching cities:", error);
        dispatch(setCities([]));
      });
  }, [dispatch]);

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  const filteredCities = cities.filter((cities) =>
    cities.city.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className={`cities-body ${isBannerVisible ? "" : "fade-out-banner"}`}>
      <div
        className={`banner-image ${isBannerVisible ? "" : "fade-out"}`}
        id="citiesBanner"
      ></div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search cities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={hideBanner}
        />
      </div>
      <div className="cities-container">
        <h3>Featured cities</h3>
        {filteredCities.length === 0 ? (
          <NotFound /> 
        ) : (
          <div className="cities-grid">
            {filteredCities.map((city) => (
              <Card key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitiesPage;
