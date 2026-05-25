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
      <div className="text-5xl font-black leading-none text-slate-950">
        {feelsLike}&deg;
      </div>
      <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em] text-slate-600">
        feels like
      </p>
    </div>
  );
}
