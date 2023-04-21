import React, { useContext } from "react";
import temperature from "../../assets/icons/forecastDetail/temperature.svg";
import FetchApiContext from "../../middleware/FetchApi";

export default function HighLow() {
  const { tempMin, tempMax } = useContext(FetchApiContext);
  return (
    <div className="weather-line">
      <div className="flex">
        <img src={temperature} alt="temperature" className="icons" />
        High/Low
      </div>
      {tempMax}&deg;/{tempMin}&deg;
    </div>
  );
}
