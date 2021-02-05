import React from "react"
import axios from "axios"
import Loader from "react-loader-spinner";


export default function Weather(props){
    function handleResponse(response){
        alert(`the weather in ${props.city} is ${response.data.main.temp}°C`)
    }
    let apikey="d077de28ca0d9666603e584385e14f50"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`
axios.get(apiUrl).then(handleResponse);
    return (
    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />);
}