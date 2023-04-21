import { createContext, useContext } from "react";
import FetchApiContext from "../middleware/FetchApi";

const WeatherContext = createContext();
export const WeatherContextprovider = ({ children }) => {
  const { getWeather } = useContext(FetchApiContext);

  const sunrise = getWeather ? getWeather.sys.sunrise : "";
  const sunset = getWeather ? getWeather.sys.sunset : "";
  const data = {
    sunrise,
    sunset,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
