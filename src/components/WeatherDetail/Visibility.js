import React, { useContext, useEffect } from "react";
import visibilityIcon from "../../assets/icons/forecastDetail/visibility.svg";
import FetchApiContext from "../../middleware/FetchApi";
import TypingAnimation from "./TypingAnimation";
import { getVisibilityCondition } from "../../utils/weather";

export default function VisibilityCondition() {
  const { visibility, setWeatherCondition } = useContext(FetchApiContext);

  useEffect(() => {
    setWeatherCondition(getVisibilityCondition(visibility));
  }, [visibility, setWeatherCondition]);

  return (
    <div className="weather-line">
      <div className="flex">
        <img
          src={visibilityIcon}
          alt="visibilityIcon"
          className="icons visibility-icon"
        />
        <p>Visibility</p>
      </div>
      <TypingAnimation />
    </div>
  );
}
