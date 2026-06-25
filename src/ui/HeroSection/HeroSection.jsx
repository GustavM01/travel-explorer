import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import Button from "../Button/Button";
import {
  getSavedDestinations,
  removeSavedDestinaion,
  saveDestination,
} from "../../utils/cache";
function HeroSection({ destination }) {
  const [isFeatured, setIsFeatured] = useState(true);
  const [isSaved, setIsSaved] = useState(
    getSavedDestinations().some(
      (savedDestination) => savedDestination.name === destination.name,
    ),
  );

  useEffect(() => {
    if (destination.name === "Canada") {
      setIsFeatured(true);
    } else {
      setIsFeatured(false);
    }
  }, [destination]);

  return (
    <div className="hero-card-container">
      <img
        className="hero-card-bg-img"
        src={destination.gallery?.[0]?.image}
        alt=""
      />
      <p
        style={{ visibility: isFeatured ? "visible" : "hidden" }}
        className="hero-card-featured-text"
      >
        FEATURED DESTINATION
      </p>
      <div className="hero-card-content">
        <div>
          <div className="hero-card-coutry-section">
            <img
              className="hero-card-flag"
              src={destination.flag.image}
              alt=""
            />
            <h1>{destination.name}</h1>
          </div>
          <div className="hero-card-capital-section">
            <MapPin />
            <h2>{destination.capital}</h2>
          </div>
        </div>
        <p className="hero-card-info">{destination.shortInfo}</p>
        {isSaved ? (
          <Button
            onClick={() => {
              removeSavedDestinaion(destination);
              setIsSaved(false);
            }}
          >
            <Heart fill="tomato" style={{ color: "tomato" }} size={22} /> Remove
            destination
          </Button>
        ) : (
          <Button
            onClick={() => {
              saveDestination(destination);
              setIsSaved(true);
            }}
          >
            <Heart size={22} /> Save destination
          </Button>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
