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
    countryOne.population,
  );
  const formattedAreaOne = new Intl.NumberFormat("en-US").format(
    countryOne.area.kilometers,
  );

  const formattedPopulationTwo = new Intl.NumberFormat("en-US").format(
    countryTwo.population,
  );
  const formattedAreaTwo = new Intl.NumberFormat("en-US").format(
    countryTwo.area.kilometers,
  );
  return (
    <>
      <h2>Compare destinations</h2>
      <div className="compare-grid">
        <div className="compare-first">
          <CountryCard showRemoveBtn={false} country={countryOne} />
        </div>
        <div className="compare-second">
          <CountryCard showRemoveBtn={false} country={countryTwo} />
        </div>
        <div className="compare-info-section">
          {/* <div className="compare-info-header">
            <div>
              <img src={countryOne.country.flag.image} alt="" />
              <p>{countryOne.name}</p>
            </div>
            <div>
              <img src={countryTwo.country.flag.image} alt="" />
              <p>{countryTwo.name}</p>
            </div>
          </div> */}

          <div className="compare-info-feild">
            <p>{countryOne.capital}</p>
            <p className="compare-info-title">
              <Landmark /> Capital
            </p>
            <p>{countryTwo.capital}</p>
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
            <p>{countryOne.subregion}</p>
            <p className="compare-info-title">
              <Flag /> Region
            </p>
            <p>{countryTwo.subregion}</p>
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
              {countryOne.currency.code} ({countryOne.currency.name})
            </p>
            <p className="compare-info-title">
              <Banknote /> Currenecy
            </p>
            <p>
              {countryTwo.currency.code} ({countryTwo.currency.name})
            </p>
          </div>

          <div className="compare-info-feild">
            <p>{countryOne.drivingSide}</p>
            <p className="compare-info-title">
              <Car /> Driving side
            </p>
            <p>{countryTwo.drivingSide}</p>
          </div>

          <div className="compare-info-feild">
            <p>+{countryOne.callingCode}</p>
            <p className="compare-info-title">
              <Phone /> Calling code
            </p>
            <p>+{countryTwo.callingCode}</p>
          </div>

          <div className="compare-info-feild">
            <p>
              {countryOne.languages.map((language) => language.name).join(", ")}
            </p>
            <p className="compare-info-title">
              <Languages /> Language
            </p>
            <p>
              {countryTwo.languages.map((language) => language.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
