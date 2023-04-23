import { createContext, useContext, useMemo } from "react";
import FetchApiContext from "../middleware/FetchApi";

const WeatherContext = createContext();
export const WeatherContextprovider = ({ children }) => {
  const { getWeather } = useContext(FetchApiContext);
  const country = useMemo(
    () => (getWeather ? getWeather.sys.country : ""),
    [getWeather]
  );
  const city = useMemo(() => (getWeather ? getWeather.name : ""), [getWeather]);

  const data = {
    country,
    city,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
