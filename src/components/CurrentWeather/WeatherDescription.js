import React, { useContext, useMemo } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function WeatherDescription() {
  const { getWeather } = useContext(FetchApiContext);
  const weatherDescription = useMemo(
    () => (getWeather ? getWeather.weather[0].description : ""),
    [getWeather]
  );
  
  return (
    <div className="text-3xl font-semibold text-center">
      {weatherDescription}
    </div>
  );
}
