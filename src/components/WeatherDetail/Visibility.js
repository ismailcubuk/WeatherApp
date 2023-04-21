import React, { useContext, useEffect } from "react";
import visibilityIcon from "../../assets/icons/forecastDetail/visibility.svg";
import FetchApiContext from "../../middleware/FetchApi";
import TypingAnimation from "./TypingAnimation";

export default function VisibilityCondition() {
  const { visibility, setWeatherCondition } = useContext(FetchApiContext);

  useEffect(() => {
    switch (true) {
      case visibility >= 8:
        setWeatherCondition("Good");
        break;
      case visibility > 5 && visibility < 8:
        setWeatherCondition("Moderate");
        break;
      case visibility > 1.6 && visibility < 5:
        setWeatherCondition("Poor");
        break;
      case visibility > 0.5 && visibility < 1.6:
        setWeatherCondition("Very Poor");
        break;
      case visibility < 0.5:
        setWeatherCondition("Near Zero");
        break;
      default:
        setWeatherCondition("");
    }
  }, [visibility, setWeatherCondition]);

  return (
    <div className="weather-line">
      <div className="flex">
        <img
          src={visibilityIcon}
          alt="visibilityIcon"
          className="icons visibility-icon"
        />
        Visibility
      </div>
      <TypingAnimation />
    </div>
  );
}
