import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showTemperature(response) {
    setWeather({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
      icon: response.data.weather[0].icon
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d077de28ca0d9666603e584385e14f50";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weatherApp">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="searchInput"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="btn" />
      </form>
      <Weather data={weather} />
    </div>
  );
}
