import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./style/app.css";

function App() {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("Grozny");
  const [error, setError] = useState("");

  const add = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${search}`
    );
    const data = await response.json();
    if (response.ok) {
      setCity([data, ...city]);
      setSearch("");
      setError("");
    } else {
      setSearch("");
      setError(data.error.message);
    }
  };
  useEffect(() => {
    add();
  }, []);

  return (
    <div className="app">
      <SearchBar add={add} search={search} setSearch={setSearch} />
      <div className="error">{error}</div>
      {city.map((item) => (
        <WeatherCard key={city.id} item={item} />
      ))}
    </div>
  );
}

export default App;
