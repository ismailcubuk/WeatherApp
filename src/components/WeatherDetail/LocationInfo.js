import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

export default function LocationInfo() {
  const { city, country } = useContext(WeatherContext);
  return (
    <p className=" text-sm font-semibold ml-2 pl-2">
      Weather today in {city} , {country}
    </p>
  );
}
