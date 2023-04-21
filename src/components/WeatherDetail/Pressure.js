import React, { useContext } from "react";
import pressures from "../../assets/icons/forecastDetail/pressures.svg";
import FetchApiContext from "../../middleware/FetchApi";

export default function Pressure() {
  const { pressure } = useContext(FetchApiContext);
  return (
    <div className="weather-line">
      <div className="flex">
        <img src={pressures} alt="pressureIcon" className="icons" />
        Pressure
      </div>
      {pressure}mb
    </div>
  );
}
