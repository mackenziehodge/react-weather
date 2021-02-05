import React, { useState } from "react";
import axios from "axios";


export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const[loaded, setLoaded]=useState(false)
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true)
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind:response.data.wind.speed * 3.6,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d077de28ca0d9666603e584385e14f50";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
let form=(
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="btn" />
      </form>
);
if (loaded){
  return(
    <div>{form}
   <ul>
     <li>Temperature:{Math.round(weather.temperature)}°C</li>
     <li>Description: {weather.description}</li>
     <li>Humidity: {weather.humidity}%</li>
     <li>Wind:{Math.round(weather.wind)}km/h</li>
     <li><img src={weather.icon}alt={weather.description}/></li>
     </ul> 
    </div>
  );}else{
    return form;
  }
  }