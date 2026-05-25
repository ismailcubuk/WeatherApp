import {
  calculateWeatherMetrics,
  getDailyForecast,
  getForecastDetails,
  getVisibilityCondition,
} from "./weather";

const forecastData = {
  list: [
    {
      dt_txt: "2099-01-01 12:00:00",
      main: {
        temp_max: 12,
        temp_min: 4,
        temp: 8,
        feels_like: 7,
        humidity: 80,
        pressure: 1012,
      },
      visibility: 9000,
      weather: [{ icon: "01d" }],
    },
    {
      dt_txt: "2099-01-02 12:00:00",
      main: {
        temp_max: 16,
        temp_min: 6,
        temp: 10,
        feels_like: 9,
        humidity: 60,
        pressure: 1016,
      },
      visibility: 7000,
      weather: [{ icon: "02d" }],
    },
  ],
};

test("extracts forecast detail rows safely", () => {
  expect(getForecastDetails(forecastData)).toHaveLength(2);
  expect(getForecastDetails({})).toEqual([]);
});

test("returns upcoming noon forecasts and ignores malformed forecast data", () => {
  expect(getDailyForecast(forecastData)).toHaveLength(2);
  expect(getDailyForecast(null)).toEqual([]);
});

test("calculates metrics without producing NaN for empty data", () => {
  expect(calculateWeatherMetrics([], undefined)).toEqual({
    tempAvg: "",
    tempMax: "",
    tempMin: "",
    humidity: "",
    pressure: "",
    visibility: "",
    windSpeed: "",
    dewPoint: "",
  });

  const metrics = calculateWeatherMetrics(getForecastDetails(forecastData), {
    wind: { speed: 5 },
  });

  expect(metrics.tempAvg).toBe(9);
  expect(metrics.tempMax).toBe(16);
  expect(metrics.tempMin).toBe(4);
  expect(metrics.humidity).toBe(70);
  expect(metrics.pressure).toBe(1014);
  expect(metrics.visibility).toBe(8);
  expect(metrics.windSpeed).toBe(18);
  expect(Number.isNaN(metrics.dewPoint)).toBe(false);
});

test("maps visibility to readable conditions", () => {
  expect(getVisibilityCondition("")).toBe("");
  expect(getVisibilityCondition(8)).toBe("Good");
  expect(getVisibilityCondition(6)).toBe("Moderate");
  expect(getVisibilityCondition(3)).toBe("Poor");
  expect(getVisibilityCondition(1)).toBe("Very Poor");
  expect(getVisibilityCondition(0.2)).toBe("Near Zero");
});
