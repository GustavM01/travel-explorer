import { searchCountries } from "../api/countriesApi.js";
import { getImages } from "../api/imagesApi.js";
import { getWeather } from "../api/weatherApi.js";
import { mapCountry } from "../mappers/countryMapper.js";

function mapPhotosToGallery(photos) {
  return photos.map((photo) => ({
    id: photo.id,
    image: photo.src.original,
  }));
}

function mapWeather(weather) {
  return {
    temperature: weather.current.temp_c,
    highest: weather.forecast.forecastday[0].day.maxtemp_c,
    lowest: weather.forecast.forecastday[0].day.mintemp_c,
    condition: weather.current.condition.text,
    weatherCode: weather.current.condition.code,
  };
}

export async function searchDestinations(query) {
  const result = await searchCountries(query);
  const countriesArray = result?.data?.objects || [];

  return countriesArray.map(mapCountry);
}

export async function getCountryWithDetails(country) {
  const [photos, weather] = await Promise.all([
    getImages(country.name),
    getWeather(country.capital),
  ]);

  return {
    ...country,
    gallery: mapPhotosToGallery(photos),
    weather: mapWeather(weather),
  };
}

export async function getCountryByName(countryName) {
  const countries = await searchDestinations(countryName);
  const country = countries[0];

  if (!country) return null;

  return getCountryWithDetails(country);
}
