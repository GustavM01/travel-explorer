import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import { mockDestination } from "../data/mockData";

import "./Home.css";
import HeroSection from "../ui/HeroSection/HeroSection";
import InfoCard from "../ui/InfoCard/InfoCard";
import { Banknote, Calendar, Clock, Sun } from "lucide-react";
import { getWeatherIcon } from "../utils/weather";

function Home() {
  const destination = mockDestination;
  const Icon = getWeatherIcon(destination.weather.weatherCode);

  return (
    <div className="container">
      <HeroSection destination={destination} />
      <InfoCard icon={<Sun size={30} />} label="Weather">
        <div className="weather-card-container">
          <div className="weather-card-top">
            <Icon size={80} />
            <div>
              <h2>{destination.weather.temperature}°C</h2>
              <p>{destination.weather.condition}</p>
            </div>
          </div>
          <div className="weather-card-left">
            <p>Hight</p>
            <p> {destination.weather.highest}°C</p>
          </div>
          <div className="weather-card-right">
            <p>Low</p>
            <p>{destination.weather.lowest}°C</p>
          </div>
        </div>
      </InfoCard>
      <InfoCard
        icon={<Calendar size={24} />}
        label="Best time to visit"
      ></InfoCard>
      <InfoCard icon={<Clock size={24} />} label="Local time"></InfoCard>
      <InfoCard icon={<Banknote size={24} />} label="Currency"></InfoCard>
    </div>
  );
}

export default Home;
