import React from "react";
import "./HeroSection.css";
import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
function HeroSection({ destination }) {
  return (
    <div className="hero-card-container">
      <p className="hero-card-featured-text">FEATURED DESTINATION</p>
      <div>
        <img
          className="hero-card-bg-img"
          src={destination.gallery[0].image}
          alt=""
        />
        <h1>{destination.country.capital}</h1>
        <div className="hero-card-coutry-section">
          <img
            className="hero-card-flag"
            src={destination.country.flag.image}
            alt=""
          />
          <h2>{destination.country.name}</h2>
        </div>
      </div>
      <p className="hero-card-info">{destination.country.shortInfo}</p>
      <Button>
        Explore {destination.country.name} <ArrowRight size={22} />
      </Button>
    </div>
  );
}

export default HeroSection;
