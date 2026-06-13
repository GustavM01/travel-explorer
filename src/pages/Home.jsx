import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import { mockDestination } from "../data/mockData";

import "./Home.css";
import HeroSection from "../ui/HeroSection/HeroSection";
import InfoCard from "../ui/InfoCard/InfoCard";
import {
  Banknote,
  Briefcase,
  Calendar,
  Car,
  Clock,
  Flag,
  Globe2,
  Landmark,
  Languages,
  Map,
  Phone,
  Sun,
  Users,
} from "lucide-react";
import { getWeatherIcon } from "../utils/weather";
import SearchBar from "../ui/SearchBar/SearchBar";

function Home() {
  const destination = mockDestination;
  const Icon = getWeatherIcon(destination.weather.weatherCode);

  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    destination.country.population,
  );
  const formattedArea = new Intl.NumberFormat("en-US").format(
    destination.country.area.kilometers,
  );

  return (
    <>
      <SearchBar />
      <div className="container">
        <HeroSection destination={destination} />
        <InfoCard icon={<Sun size={30} />} label="Weather">
          <div className="weather-card-container">
            <div className="weather-card-top">
              <Icon size={64} />
              <div>
                <h2>{destination.weather.temperature}°C</h2>
                <p>{destination.weather.condition}</p>
              </div>
            </div>
            <div className="weather-card-left">
              <p>High</p>
              <p> {destination.weather.highest}°C</p>
            </div>
            <div className="weather-card-right">
              <p>Low</p>
              <p>{destination.weather.lowest}°C</p>
            </div>
          </div>
        </InfoCard>
        <InfoCard icon={<Globe2 size={24} />} label="Country Info">
          <div className="country-info-container">
            <div className="country-info-section">
              <Landmark size={28} />
              <div className="country-info-text">
                <p>Capital</p>
                {destination.country.capital}
              </div>
            </div>
            <div className="country-info-section">
              <Users size={28} />
              <div className="country-info-text">
                <p>Population</p>
                {formattedPopulation}
              </div>
            </div>
            <div className="country-info-section">
              <Map size={28} />
              <div className="country-info-text">
                <p>Area</p>
                {formattedArea} km²
              </div>
            </div>
            <div className="country-info-section">
              <Flag size={28} />
              <div className="country-info-text">
                <p>Region</p>
                {destination.country.subregion}
              </div>
            </div>
          </div>
        </InfoCard>
        <InfoCard icon={<Languages size={24} />} label="Languages">
          <div className="language-card">
            <div className="languages">
              {destination.country.languages.map((language, index) => (
                <p>{language.name}</p>
              ))}
            </div>
            <p className="languages-bottom-text">
              {destination.country.languages.length} official languages
            </p>
          </div>
        </InfoCard>
        <InfoCard icon={<Briefcase size={24} />} label="Travel Facts">
          <div className="travel-facts-card">
            <div className="travel-facts-section">
              <Car size={40} strokeWidth={1.2} />
              <div className="travel-facts-text">
                <p>Driving side</p> <p>{destination.country.drivingSide}</p>
              </div>
            </div>
            <div className="travel-facts-section">
              <Phone size={40} strokeWidth={1.2} />
              <div className="travel-facts-text">
                <p>Calling code</p> <p>{destination.country.callingCode}</p>
              </div>
            </div>
            <div className="travel-facts-section">
              <span className="travel-fact-currensy-symbol">
                <p>{destination.country.currency.symbol}</p>
              </span>
              <div className="travel-facts-text">
                <p>Currency</p>{" "}
                <p>
                  {destination.country.currency.code} (
                  {destination.country.currency.name})
                </p>
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </>
  );
}

export default Home;
