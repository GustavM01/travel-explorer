import React from "react";
import "./CountryCard.css";
import { MapPin, Trash2 } from "lucide-react";
import { removeSavedDestinaion } from "../../utils/cache";

function CountryCard({
  country,
  removeCountry,
  onClick,
  showRemoveBtn = true,
}) {
  return (
    <div onClick={onClick} className="country-card-container">
      <img
        src={country.gallery[0].image}
        alt=""
        className="country-card-bg-img"
      />
      {showRemoveBtn && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeCountry(country);
          }}
          className="country-card-trashcan"
        >
          <Trash2 size={20} />
        </button>
      )}
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
