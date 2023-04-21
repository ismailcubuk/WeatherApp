import React, { useContext } from "react";
import humidityIcon from "../../assets/icons/forecastDetail/humidity.svg";
import FetchApiContext from "../../middleware/FetchApi";

export default function Humidity() {
  const { humidity } = useContext(FetchApiContext);
  return (
    <div className="weather-line">
      <div className="flex">
        <img src={humidityIcon} alt="humidityIcon" className="icons" />
        Humidity
      </div>
      {humidity}%
    </div>
  );
}
