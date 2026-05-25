import React, { useContext, useEffect, useMemo, useState } from "react";
import FetchApiContext from "../../../middleware/FetchApi";
import clearDay from "../../../assets/icons/forecast/clear-day.svg";
import clearNight from "../../../assets/icons/forecast/clear-night.svg";
import cloudyDay from "../../../assets/icons/forecast/cloudy-day.svg";
import cloudyNight from "../../../assets/icons/forecast/cloudy-night.svg";
import overcastDay from "../../../assets/icons/forecast/overcast-day.svg";
import overcastNight from "../../../assets/icons/forecast/overcast-night.svg";
import rainDay from "../../../assets/icons/forecast/rain-day.svg";
import rainNight from "../../../assets/icons/forecast/rain-night.svg";
import thunderstromsDay from "../../../assets/icons/forecast/thunderstorms-day.svg";
import thunderstromsNight from "../../../assets/icons/forecast/thunderstorms-night.svg";
import snowDay from "../../../assets/icons/forecast/snow-day.svg";
import snowNight from "../../../assets/icons/forecast/snow-night.svg";
import mist from "../../../assets/icons/forecast/mist.svg";
import cloudy from "../../../assets/icons/forecast/cloudy.svg";
import rain from "../../../assets/icons/forecast/rain.svg";

export default function Images() {
  const { getWeather } = useContext(FetchApiContext);

  const [image, setImage] = useState(null);
  const weatherIcon = useMemo(
    () => (getWeather ? getWeather.weather[0].icon : ""),
    [getWeather]
  );
  
  useEffect(() => {
    const icons = {
      "01d": clearDay,
      "01n": clearNight,
      "02d": cloudyDay,
      "02n": cloudyNight,
      "03d": cloudy,
      "03n": cloudy,
      "04d": overcastDay,
      "04n": overcastNight,
      "09d": rain,
      "09n": rain,
      "10d": rainDay,
      "10n": rainNight,
      "11d": thunderstromsDay,
      "11n": thunderstromsNight,
      "13d": snowDay,
      "13n": snowNight,
      "50d": mist,
      "50n": mist,
    };

    setImage(icons[weatherIcon]);
  }, [weatherIcon]);

  if (!image) {
    return <div className="hidden md:block" />;
  }

  return (
    <div className="flex min-h-[220px] w-full items-center justify-center rounded-lg border border-white/25 bg-white/10 p-5 backdrop-blur-sm md:h-full md:min-h-0">
      <img
        src={image}
        alt="icons"
        className="h-auto w-3/5 max-w-[280px] img-drop-shadow md:w-3/5"
        loading="lazy"
      />
    </div>
  );
}
