import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";
import { mockDestination, compareDestination } from "../../data/mockData";
import { searchCountries } from "../../api/countriesApi";
import { getImages } from "../../api/imagesApi.js";
import { mapCountry } from "../../mappers/countryMapper.js";

function SearchBar({ setDestination }) {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setCountries([]);
      return;
    }

    const timer = setTimeout(() => {
      handleSearch(query);
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = async (query) => {
    try {
      const result = await searchCountries(query);

      const countriesArray = result?.data?.objects || [];

      const mappedCountries = countriesArray.map(mapCountry);

      setCountries(mappedCountries);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = async (country) => {
    setDestination({
      ...country,
      gallery: [],
      isLoadingImages: true,
    });

    try {
      const photos = await getImages(country.name);

      setDestination((prev) => ({
        ...prev,
        gallery: photos.map((photo) => ({
          id: photo.id,
          image: photo.src.large,
        })),
        isLoadingImages: false,
      }));
    } catch (error) {
      console.error(error);

      setDestination((prev) => ({
        ...prev,
        isLoadingImages: false,
      }));
    }
    setQuery("");
  };

  return (
    <div className="search-section">
      <label htmlFor="search-bar" className="search-container">
        <Search size={20} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country"
          type="text"
          id="search-bar"
        />
      </label>
      {countries.length != 0 && (
        <div className="search-list">
          {countries.map((country, index) => (
            <div
              key={index}
              onClick={() => handleSelect(country)}
              className="search-item"
            >
              <img src={country.flag.image} alt="" />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
