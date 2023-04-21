import React, { useContext } from "react";
import windIcon from "../../assets/icons/forecastDetail/wind.svg";
import FetchApiContext from "../../middleware/FetchApi";
export default function WindSpeed() {
  const { windSpeed } = useContext(FetchApiContext);

  return (
    <div className="weather-line">
      <div className="flex">
        <img src={windIcon} alt="windIcon" className="icons" />
        <p>Wind</p>
      </div>
      <p>{windSpeed} km/h</p>
    </div>
  );
}
