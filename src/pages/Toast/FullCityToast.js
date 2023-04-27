import React, { useContext, useEffect, useState } from "react";
import PinCityContext from "../../contexts/PinCityContext";

export default function FullCityToast() {
  const { pinnedCity, shows2, setShowToast2, showToast2,setShows2 } =
    useContext(PinCityContext);
  const [progress, setProgress] = useState();
  useEffect(() => {
    if (shows2 === true) {
      setShowToast2(true);
      setProgress(2000);
      const timeout = setTimeout(() => setShowToast2(false), 2000);
      const timeout2 = setTimeout(() => setShows2(false), 2000);
      return () => clearTimeout(timeout,timeout2);
    }
  }, [ shows2 ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 100);
      if (progress <= 0) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [pinnedCity, progress]);

  return (
    <div
      className={`glassmorphism-toast w-full h-15 flex flex-col justify-center items-center absolute left-0 ${
        showToast2 ? "block" : "hidden"
      }`}
    >
        <div>Pin city 3/3</div>
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
