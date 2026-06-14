import React from "react";
import "./Saved.css";
import { mockDestination, compareDestination } from "../data/mockData";
import CountryCard from "../ui/CountryCard/CountryCard";

function Saved() {
  const countries = [mockDestination, compareDestination];

  return (
    <>
      <h2>Saved destinations</h2>
      <div className="saved-countries-grid">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </>
  );
}

export default Saved;
