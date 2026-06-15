import React from "react";
import "./HeroSection.css";
import { ArrowRight, MapPin } from "lucide-react";
import Button from "../Button/Button";
function HeroSection({ destination }) {
  return (
    <div className="hero-card-container">
      <img
        className="hero-card-bg-img"
        src={destination.gallery?.[0]?.image}
        alt=""
      />
      <p className="hero-card-featured-text">FEATURED DESTINATION</p>
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
        <Button>
          Explore {destination.name} <ArrowRight size={22} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
