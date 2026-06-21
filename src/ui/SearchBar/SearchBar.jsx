import { useEffect, useState } from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";
import {
  getCountryWithDetails,
  searchDestinations,
} from "../../services/countryService.js";

function SearchBar({ setDestination }) {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  async function handleSearch(query) {
    try {
      const countries = await searchDestinations(query);
      setCountries(countries);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query.length < 3) {
      return;
    }

    const timer = setTimeout(() => {
      handleSearch(query);
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = async (country) => {
    setDestination({
      ...country,
      gallery: [],
      isLoadingImages: true,
    });

    try {
      const countryWithDetails = await getCountryWithDetails(country);

      setDestination({
        ...countryWithDetails,
        isLoadingImages: false,
      });
    } catch (error) {
      console.error(error);

      setDestination((prev) => ({
        ...prev,
        isLoadingImages: false,
      }));
    }
    setQuery("");
    setCountries([]);
  };

  return (
    <div className="search-section">
      <label htmlFor="search-bar" className="search-container">
        <Search size={20} />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);

            if (e.target.value.length < 3) {
              setCountries([]);
            }
          }}
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
