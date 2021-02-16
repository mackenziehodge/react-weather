import React from "react";
import WeatherSearch from "./WeatherSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

export default function App() {
  return (
    <div className="App"><div className="container">
      <h1>Weather</h1>
      <WeatherSearch />
    </div>
    <div className="footer"><a href="https://github.com/mackenziehodge/react-weather" className="code-link">
         Open Sourced Code {""}
      </a> 
       by <a href="https://www.petraits.org"> Mackenzie Hodge</a>
      </div>
      </div>
  );
}
