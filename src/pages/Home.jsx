import { createElement, useEffect, useState } from "react";
import { mockDestination } from "../data/mockData";

import "./Home.css";
import HeroSection from "../ui/HeroSection/HeroSection";
import InfoCard from "../ui/InfoCard/InfoCard";
import {
  Briefcase,
  Car,
  Flag,
  Globe2,
  Landmark,
  Languages,
  Map,
  Phone,
  Thermometer,
  Users,
} from "lucide-react";
import { getWeatherIcon } from "../utils/weather";
import SearchBar from "../ui/SearchBar/SearchBar";
import {
  getFeaturedDestination,
  saveFeaturedDestination,
} from "../utils/featuredDestinationStorage.js";
import { getCountryByName } from "../services/countryService.js";
import { useLocation } from "react-router";

const FEATURED_COUNTRY_NAME = "Canada";

function Home() {
  const [destination, setDestination] = useState(mockDestination);
  const location = useLocation();

  useEffect(() => {
    const loadFeaturedDestination = async () => {
      try {
        const featuredDestination = getFeaturedDestination();

        if (featuredDestination) {
          setDestination(featuredDestination);
          return;
        }

        const country = await getCountryByName(FEATURED_COUNTRY_NAME);

        if (!country) return;

        setDestination(country);
        saveFeaturedDestination(country);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    const selectedDestination = location.state?.destination;
    if (selectedDestination) {
      setDestination(selectedDestination);
    } else {
      loadFeaturedDestination();
    }
  }, []);

  // const destination = mockDestination;
  const weatherIcon = getWeatherIcon(destination.weather.weatherCode);

  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    destination.population,
  );
  const formattedArea = new Intl.NumberFormat("en-US").format(
    destination.area.kilometers,
  );

  return (
    <>
      <SearchBar label={"searchbar"} setDestination={setDestination} />
      <div className="container">
        <HeroSection destination={destination} />
        <InfoCard icon={<Thermometer size={30} />} label="Weather">
          <div className="weather-card-container">
            <div className="weather-card-top">
              {createElement(weatherIcon, { size: 64 })}
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
                {destination.capital}
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
                {destination.subregion}
              </div>
            </div>
          </div>
        </InfoCard>
        <InfoCard icon={<Languages size={24} />} label="Languages">
          <div className="language-card">
            <div className="languages">
              {destination.languages.map((language, index) => (
                <p key={index}>{language.name}</p>
              ))}
            </div>
            <p className="languages-bottom-text">
              {destination.languages.length} official languages
            </p>
          </div>
        </InfoCard>
        <InfoCard icon={<Briefcase size={24} />} label="Travel Facts">
          <div className="travel-facts-card">
            <div className="travel-facts-section">
              <Car size={40} strokeWidth={1.2} />
              <div className="travel-facts-text">
                <p>Driving side</p> <p>{destination.drivingSide}</p>
              </div>
            </div>
            <div className="travel-facts-section">
              <Phone size={40} strokeWidth={1.2} />
              <div className="travel-facts-text">
                <p>Calling code</p> <p>+{destination.callingCode}</p>
              </div>
            </div>
            <div className="travel-facts-section">
              <span className="travel-fact-currensy-symbol">
                <p>{destination.currency.symbol}</p>
              </span>
              <div className="travel-facts-text">
                <p>Currency</p>{" "}
                <p>
                  {destination.currency.code} ({destination.currency.name})
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
