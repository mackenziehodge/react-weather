import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css"

export default function App() {
  return (
    <div className="body"><div className="App">
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
