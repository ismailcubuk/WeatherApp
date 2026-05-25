export const hasForecastList = (forecastData) =>
  Array.isArray(forecastData?.list);

export const getForecastDetails = (forecastData) => {
  if (!hasForecastList(forecastData)) {
    return [];
  }

  return forecastData.list.slice(0, 9).map((item) => ({
    temp_max: item.main.temp_max,
    temp_min: item.main.temp_min,
    temp: item.main.temp,
    feels_like: item.main.feels_like,
    humidity: item.main.humidity,
    pressure: item.main.pressure,
    visibility: item.visibility,
  }));
};

export const getDailyForecast = (forecastData) => {
  if (!hasForecastList(forecastData)) {
    return [];
  }

  const today = new Date().toISOString().slice(0, 10);

  return forecastData.list
    .filter(
      (item) =>
        item.dt_txt.includes("12:00:00") && !item.dt_txt.startsWith(today)
    )
    .slice(0, 4);
};

export const average = (items, selector) => {
  if (!items.length) {
    return null;
  }

  return items.reduce((sum, item) => sum + selector(item), 0) / items.length;
};

export const calculateWeatherMetrics = (detail, getWeather) => {
  if (!detail.length) {
    return {
      tempAvg: "",
      tempMax: "",
      tempMin: "",
      humidity: "",
      pressure: "",
      visibility: "",
      windSpeed: "",
      dewPoint: "",
    };
  }

  const tempAvg = Math.round(average(detail, (item) => item.temp));
  const tempMax = Math.round(
    detail.reduce(
      (max, item) => (item.temp_max > max ? item.temp_max : max),
      -Infinity
    )
  );
  const tempMin = Math.round(
    detail.reduce(
      (min, item) => (item.temp_min < min ? item.temp_min : min),
      Infinity
    )
  );
  const humidity = Math.round(average(detail, (item) => item.humidity));
  const pressure = Math.round(average(detail, (item) => item.pressure));
  const visibility = average(detail, (item) => item.visibility) / 1000;
  const windSpeed = getWeather ? Math.round(getWeather.wind.speed * 3.6) : "";

  const dewPoint =
    humidity > 0 && tempAvg !== ""
      ? Math.round(
          (237.7 *
            (Math.log(humidity / 100) +
              (17.27 * tempAvg) / (237.7 + tempAvg))) /
            (17.27 -
              Math.log(humidity / 100) -
              (17.27 * tempAvg) / (237.7 + tempAvg))
        )
      : "";

  return {
    tempAvg,
    tempMax,
    tempMin,
    humidity,
    pressure,
    visibility,
    windSpeed,
    dewPoint,
  };
};

export const getVisibilityCondition = (visibility) => {
  if (visibility === "" || visibility === null || Number.isNaN(visibility)) {
    return "";
  }

  if (visibility >= 8) return "Good";
  if (visibility > 5) return "Moderate";
  if (visibility > 1.6) return "Poor";
  if (visibility > 0.5) return "Very Poor";
  return "Near Zero";
};
