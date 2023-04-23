import React, { useContext, useMemo } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function FeelsLike() {
  const { getWeather } = useContext(FetchApiContext);
  const feelsLike = useMemo(
    () => (getWeather ? Math.round(getWeather.main.feels_like) : ""),
    [getWeather]
  );
  return (
    <div>
      <div className="text-4xl font-semibold"> {feelsLike}&deg; </div>
      <p className="text-sm text-gray-500 ">feels like</p>
    </div>
  );
}
