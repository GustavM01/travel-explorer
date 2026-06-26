import { useEffect, useState } from "react";
import "./CountryCard.css";
import { MapPin, Trash2 } from "lucide-react";

function CountryCard({
  country,
  removeCountry,
  onClick,
  showRemoveBtn = true,
}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    try {
      if (country) {
        setImage(country.gallery[0].image);
      }
    } catch {}
  }, [country]);

  if (!country)
    return (
      <div className="placeholder">
        <div className="country-card-bg-img" />
      </div>
    );
  return (
    <div onClick={onClick} className="country-card-container">
      {image ? (
        <img src={image} alt="" className="country-card-bg-img" />
      ) : (
        <div></div>
      )}
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
