import React from "react";
import "./Compare.css";
import { mockDestination, compareDestination } from "../data/mockData";
import CountryCard from "../ui/CountryCard/CountryCard";
import {
  Banknote,
  Car,
  CloudSunIcon,
  Flag,
  Landmark,
  Languages,
  Map,
  Phone,
  Thermometer,
  Users,
} from "lucide-react";
import { getWeatherIcon } from "../utils/weather";

function Compare() {
  const countries = [mockDestination, compareDestination];
  const countryOne = countries[0];
  const countryTwo = countries[1];

  const IconOne = getWeatherIcon(countryOne.weather.weatherCode);
  const IconTwo = getWeatherIcon(countryTwo.weather.weatherCode);

  const formattedPopulationOne = new Intl.NumberFormat("en-US").format(
    countryOne.country.population,
  );
  const formattedAreaOne = new Intl.NumberFormat("en-US").format(
    countryOne.country.area.kilometers,
  );

  const formattedPopulationTwo = new Intl.NumberFormat("en-US").format(
    countryTwo.country.population,
  );
  const formattedAreaTwo = new Intl.NumberFormat("en-US").format(
    countryTwo.country.area.kilometers,
  );
  return (
    <>
      <h2>Compare destinations</h2>
      <div className="compare-grid">
        <div className="compare-first">
          <CountryCard country={countryOne} />
        </div>
        <div className="compare-second">
          <CountryCard country={countryTwo} />
        </div>
        <div className="compare-info-section">
          {/* <div className="compare-info-header">
            <div>
              <img src={countryOne.country.flag.image} alt="" />
              <p>{countryOne.country.name}</p>
            </div>
            <div>
              <img src={countryTwo.country.flag.image} alt="" />
              <p>{countryTwo.country.name}</p>
            </div>
          </div> */}

          <div className="compare-info-feild">
            <p>{countryOne.country.capital}</p>
            <p className="compare-info-title">
              <Landmark /> Capital
            </p>
            <p>{countryTwo.country.capital}</p>
          </div>

          <div className="compare-info-feild">
            <p>{formattedPopulationOne}</p>
            <p className="compare-info-title">
              <Users /> Population
            </p>
            <p>{formattedPopulationTwo}</p>
          </div>

          <div className="compare-info-feild">
            <p>{formattedAreaOne} km²</p>
            <p className="compare-info-title">
              <Map /> Area
            </p>
            <p>{formattedAreaTwo} km²</p>
          </div>

          <div className="compare-info-feild">
            <p>{countryOne.country.region}</p>
            <p className="compare-info-title">
              <Flag /> Region
            </p>
            <p>{countryTwo.country.region}</p>
          </div>

          <div className="compare-info-feild">
            <div className="compare-weather-section">
              <IconOne />
              <p>{countryOne.weather.temperature}C°</p>
              <p>{countryOne.weather.condition}</p>
            </div>
            <p className="compare-info-title">
              <Thermometer /> Weather
            </p>
            <div className="compare-weather-section">
              <IconTwo />
              <p>{countryTwo.weather.temperature}C°</p>
              <p>{countryTwo.weather.condition}</p>
            </div>
          </div>

          <div className="compare-info-feild">
            <p>
              {countryOne.country.currency.code} (
              {countryOne.country.currency.name})
            </p>
            <p className="compare-info-title">
              <Banknote /> Currenecy
            </p>
            <p>
              {countryTwo.country.currency.code} (
              {countryTwo.country.currency.name})
            </p>
          </div>

          <div className="compare-info-feild">
            <p>{countryOne.country.drivingSide}</p>
            <p className="compare-info-title">
              <Car /> Driving side
            </p>
            <p>{countryTwo.country.drivingSide}</p>
          </div>

          <div className="compare-info-feild">
            <p>{countryOne.country.callingCode}</p>
            <p className="compare-info-title">
              <Phone /> Calling code
            </p>
            <p>{countryTwo.country.callingCode}</p>
          </div>

          <div className="compare-info-feild">
            <p>
              {countryOne.country.languages
                .map((language) => language.name)
                .join(", ")}
            </p>
            <p className="compare-info-title">
              <Languages /> Language
            </p>
            <p>
              {countryTwo.country.languages
                .map((language) => language.name)
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
