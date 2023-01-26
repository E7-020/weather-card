import React from "react";
import Img from "../assets/search.png";
import "../style/search-bar.css";

const SearchBar = ({ search, setSearch, add, city }) => {
  return (
    <div className="block">
      <h1>Weather</h1>
      <div className="search-block">
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") add();
          }}
          type="text"
          name="city"
          placeholder={"Search for a city"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <button onClick={add} className="btn">
            <img className="img" src={Img} alt="#" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
