import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import SearchContext from "../contexts/SearchContext";
import FetchLocation from "./FetchLocation";
import {
  buildOpenWeatherUrl,
  FORECAST_API_URL,
  OPENWEATHER_API_KEY,
  WEATHER_API_URL,
} from "../Api";
import {
  calculateWeatherMetrics,
  getDailyForecast,
  getForecastDetails,
  hasForecastList,
} from "../utils/weather";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {
  const { cityName } = useContext(SearchContext);
  const { getLocationAndSetCityName } = useContext(FetchLocation);
  const [getWeather, setGetWeather] = useState();
  const [getForecast, setGetForecast] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      if (!cityName) return;
      if (!OPENWEATHER_API_KEY) {
        setError(
          "OpenWeather API key is missing. Add REACT_APP_OPENWEATHER_API_KEY to .env.local."
        );
        setGetWeather(undefined);
        setGetForecast([]);
        setDetail([]);
        return;
      }

      setIsLoading(true);
      setError("");

      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(buildOpenWeatherUrl(WEATHER_API_URL, cityName)),
        fetch(buildOpenWeatherUrl(FORECAST_API_URL, cityName)),
      ]);
      const [weatherData, forecastData] = await Promise.all([
        weatherResponse.json(),
        forecastResponse.json(),
      ]);

      if (!weatherResponse.ok || weatherData.cod !== 200) {
        setError(weatherData.message || "City not found.");
        setGetWeather(undefined);
        setGetForecast([]);
        setDetail([]);
        return;
      }

      if (!forecastResponse.ok || !hasForecastList(forecastData)) {
        setError(forecastData.message || "Forecast data could not be loaded.");
        setGetWeather(weatherData);
        setGetForecast([]);
        setDetail([]);
        return;
      }

      setGetWeather(weatherData);
      setDetail(getForecastDetails(forecastData));
      setGetForecast(getDailyForecast(forecastData));
    } catch (error) {
      console.error(error);
      setError("Weather data could not be loaded. Please try again.");
      setGetWeather(undefined);
      setGetForecast([]);
      setDetail([]);
    } finally {
      setIsLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const temp = useMemo(
    () => (getWeather ? Math.round(getWeather.main.temp) : ""),
    [getWeather]
  );

  const metrics = useMemo(
    () => calculateWeatherMetrics(detail, getWeather),
    [detail, getWeather]
  );
  const forecastTemp = useMemo(
    () =>
      getForecast
        .map((tempArr) => tempArr.main.temp)
        .map((temp) => Math.round(temp)),
    [getForecast]
  );
  const forecastIcons = useMemo(
    () => getForecast.map((x) => x.weather[0].icon),
    [getForecast]
  );
  const country = useMemo(
    () => (getWeather ? getWeather.sys.country : ""),
    [getWeather]
  );
  const city = useMemo(() => (getWeather ? getWeather.name : ""), [getWeather]);

  const data = {
    city,
    country,
    error,
    getWeather,
    isLoading,
    weatherCondition,
    setWeatherCondition,
    getLocationAndSetCityName,
    forecastTemp,
    forecastIcons,
    dewPoint: metrics.dewPoint,
    windSpeed: metrics.windSpeed,
    visibility: metrics.visibility,
    pressure: metrics.pressure,
    humidity: metrics.humidity,
    temp,
    tempMin: metrics.tempMin,
    tempMax: metrics.tempMax,
  };
  return (
    <FetchApiContext.Provider value={data}>{children}</FetchApiContext.Provider>
  );
};

export default FetchApiContext;
