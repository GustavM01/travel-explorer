import React, { useState } from "react";
import "./Saved.css";
import { mockDestination, compareDestination } from "../data/mockData";
import CountryCard from "../ui/CountryCard/CountryCard";
import { getSavedDestinations, removeSavedDestinaion } from "../utils/cache";
import { useNavigate } from "react-router";

function Saved() {
  const [countries, setCountries] = useState(getSavedDestinations());

  const navigate = useNavigate();

  const removeCountry = (country) => {
    removeSavedDestinaion(country);
    setCountries((prev) => prev.filter((saved) => saved.name !== country.name));
  };
  return (
    <>
      <h2>Saved destinations</h2>
      <div className="saved-countries-grid">
        {countries.map((country, index) => (
          <CountryCard
            onClick={() => navigate("/", { state: { destination: country } })}
            key={index}
            country={country}
            removeCountry={removeCountry}
          />
        ))}
      </div>
    </>
  );
}

export default Saved;
