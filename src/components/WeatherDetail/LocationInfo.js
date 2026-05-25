import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function LocationInfo() {
  const { city, country } = useContext(FetchApiContext);
  const location = [city, country].filter(Boolean).join(", ");

  return (
    <p className=" text-sm font-semibold ml-2 pl-2">
      {location ? `Weather today in ${location}` : "Weather data"}
    </p>
  );
}
