import React from "react";
import Button from "../ui/Button/Button";
import { mockDestination } from "../data/mockData";

import "./Home.css";
import HeroSection from "../ui/HeroSection/HeroSection";
import InfoCard from "../ui/InfoCard/InfoCard";

function Home() {
  const destination = mockDestination;

  return (
    <div className="container">
      <HeroSection destination={destination} />
      <InfoCard label="WEATHER"></InfoCard>
      <InfoCard label="BEST TIME TO VISIT"></InfoCard>
      <InfoCard label="LOCAL TIME"></InfoCard>
    </div>
  );
}

export default Home;
