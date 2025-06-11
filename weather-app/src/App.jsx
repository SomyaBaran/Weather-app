import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"; 
import WeatherCard from "./components/WeatherCard";
import InputComponent from "./components/InputComponent";


function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData() {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=[SECRET_KEY]&units=metric`)
      console.log("data is : ", data);
      setWeatherData(data);
    } catch (err) {
      console.log("Error in fetching in weather data");
    }
  }

  return (
    <div className="app">
    

      <InputComponent locationName={location} setLocation={setLocation} fetchWeatherData={fetchWeatherData}/>

      <WeatherCard weatherData={weatherData}/>
     </div>
  
  );
}

export default App;
