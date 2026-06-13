import React from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <label htmlFor="search-bar" className="search-container">
      <Search size={20} />
      <input placeholder="Search for a country" type="text" id="search-bar" />
    </label>
  );
}

export default SearchBar;
