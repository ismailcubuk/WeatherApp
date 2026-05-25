import React, { useContext } from "react";
import FetchApiContext from "../../middleware/FetchApi";

export default function LocationInfo() {
  const { city, country } = useContext(FetchApiContext);
  const location = [city, country].filter(Boolean).join(", ");

  return (
    <p className="px-2 pb-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-700">
      {location ? `Weather today in ${location}` : "Weather data"}
    </p>
  );
}
