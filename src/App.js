
import { useState, useEffect } from "react";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import WeatherDetail from "./components/current-weather/WeatherDetail";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/navbar/Navbar";

function App() {
 

  






  return (
    <div>
      <Navbar />
      <div className="flex border-black border-2">
        <div className=" border-red-600 border-2 w-7/12">
          <CurrentWeather />
          <WeatherDetail />
        </div>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
