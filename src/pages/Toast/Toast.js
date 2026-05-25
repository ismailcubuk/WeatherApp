import React, { useContext, useEffect, useState } from "react";
import PinCityContext from "../../contexts/PinCityContext";

export default function Toast() {
  const { pinnedCity, shows, setShowToast, showToast } =
    useContext(PinCityContext);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (pinnedCity && pinnedCity.length > 0 && shows) {
      setShowToast(true);
      setProgress(2000);
      const timeout = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [pinnedCity, shows, setShowToast]);

  useEffect(() => {
    if (!showToast) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => Math.max(prevProgress - 100, 0));
    }, 100);

    return () => clearInterval(intervalId);
  }, [showToast]);

  return (
    <div
      className={`glassmorphism-toast w-full h-15 flex flex-col justify-center items-center absolute top-20 left-0 ${
        showToast ? "block" : "hidden"
      }`}
    >
      <div className="relative h-1 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-blue-500 rounded-full"
          style={{
            width: `${progress / 20}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}
