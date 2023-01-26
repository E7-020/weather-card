import React from "react";
import "../style/weather.css";

const WeatherCard = ({ item }) => {
  return (
    <>
      <div className={`blocks ${item.current.is_day ? `day` : `nigth`}`}>
        <div className="first-block">
          <p className="city">{item.location.name}</p>
          <p className="region">{item.location.region}</p>
          <p className="time">{item.location.localtime}</p>
        </div>
        <div className="second-block">
          <img className="img" src={item.current.condition.icon} alt="" />
          <p className="degree">{item.current.temp_c}С</p>
          <p className="fahrenheit">{item.current.temp_f}ºF</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;