export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
export const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
export const LOCATION_API_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const OPENWEATHER_API_KEY =
  process.env.REACT_APP_OPENWEATHER_API_KEY ||
  "f816f1c7fc58061a8d4b99d210789fa3";

export const buildOpenWeatherUrl = (baseUrl, cityName) => {
  const params = new URLSearchParams({
    q: cityName,
    appid: OPENWEATHER_API_KEY,
    units: "metric",
  });

  return `${baseUrl}?${params.toString()}`;
};

export const buildReverseGeocodeUrl = (latitude, longitude) => {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    localityLanguage: "en",
  });

  return `${LOCATION_API_URL}?${params.toString()}`;
};
