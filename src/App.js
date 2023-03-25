
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import CurrentWeather from "./pages/main/LeftSide/CurrentWeather";
import WeatherDetail from "./pages/main/LeftSide/WeatherDetail";
import Forecast from "./pages/main/RightSide/Forecast";

function App() {









  return (
    <div>
      <Navbar />
      <div className="flex border-black border-2">
        <div className=" border-red-600 border-2 w-7/12">
          <CurrentWeather/>
          <WeatherDetail />
        </div>
        <Forecast/>
      </div>
    </div>
  );
}

export default App;
