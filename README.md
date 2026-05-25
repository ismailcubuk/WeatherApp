# WeatherApp

Responsive weather dashboard built with React. It lets users view current weather, search cities, use their current location, pin favorite cities, view weather details, and check a 4-day forecast with a soft dynamic UI.

Live demo: [WeatherApp](https://ismailcubuk.github.io/WeatherApp/)

![Preview](./public/images/screenshots/preveiw.png)

## Features

- Search weather by city
- Use current location
- View current temperature and weather description
- View feels-like temperature
- View high/low temperature
- View humidity
- View pressure
- View visibility condition
- View wind speed
- View dew point
- View sunrise and sunset times
- Pin up to 3 favorite cities
- Open and remove pinned cities from dropdown menus
- View 4-day forecast temperatures and icons
- Dynamic background tone based on weather condition
- Loading state while weather data is being fetched
- Responsive layout for desktop, tablet, and mobile screens

## Tech Stack

- React
- Tailwind CSS
- OpenWeather API
- BigDataCloud Reverse Geocode API
- CSS

## Project Structure

```text
src/
  assets/
    background/
    icons/
  components/
    CurrentWeather/
    Forecast/
    navbar/
    WeatherDetail/
  contexts/
    PinCityContext.js
    SearchContext.js
  middleware/
    FetchApi.js
    FetchLocation.js
  pages/
    main/
    Toast/
  utils/
    weather.js
    weather.test.js
  Api.js
  App.js
  index.css
  index.js
```
