import React from "react";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  if (props.data) {
    return (
      <div>
        <p>Current weather in: {props.data.city}</p>
        <ul>
          <li>Temperature: {props.data.temp}ºC</li>
          <li>Description: {props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="Weather Icon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <Loader
        type="Circles"
        color="pink"
        height={50}
        width={50}
        timeout={10000}
      />
    );
  }
}
