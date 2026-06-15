import React from "react";
import "./CountryCard.css";
import { MapPin, Trash2 } from "lucide-react";

function CountryCard({ country }) {
  return (
    <div className="country-card-container">
      <img
        src={country.gallery[0].image}
        alt=""
        className="country-card-bg-img"
      />
      <div className="country-card-trashcan">
        <Trash2 size={18} />
      </div>
      <div>
        <div className="country-card-section">
          <img className="country-card-flag" src={country.flag.image} alt="" />
          <p>{country.name}</p>
        </div>
        <div className="country-card-capital-section">
          <MapPin size={16} />
          <p>{country.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
