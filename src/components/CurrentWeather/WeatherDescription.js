import React, { useContext, useMemo } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function WeatherDescription() {
  const { getWeather } = useContext(FetchApiContext);
  const weatherDescription = useMemo(
    () => (getWeather ? getWeather.weather[0].description : ""),
    [getWeather]
  );
  
  return (
    <div className="mt-2 text-center text-2xl font-bold capitalize text-slate-800 md:text-3xl">
      {weatherDescription}
    </div>
  );
}
