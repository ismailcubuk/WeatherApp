import { createContext, useState, useEffect } from "react";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {
    const [getWeather, setGetWeather] = useState()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`)
        // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=ankara&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`)
            .then(response => response.json())
            .then(data => setGetWeather(data))
            .catch(error => console.error(error));
    }, [])

    console.log(getWeather);


    const weatherDescription = getWeather ? getWeather.weather[0].description : '';

    const weatherIcon = getWeather ? getWeather.weather[0].icon : '';
    const feelsLike = getWeather ? Math.round(getWeather.main.feels_like) : '';
    const temp = getWeather ? Math.round(getWeather.main.temp) : '';
    
    const country = getWeather ? getWeather.sys.country : '';
    const city = getWeather ? getWeather.name : '';

    const tempMin = getWeather ? Math.round(getWeather.main.temp_min) : '';
    const tempMax = getWeather ? Math.round(getWeather.main.temp_max) : '';

    const humidity = getWeather ? getWeather.main.humidity : '';
    const pressure = getWeather ? getWeather.main.pressure : '';


    const visibility = getWeather ? Math.round(getWeather.visibility/1000) : '';

    const windSpeed = getWeather ? Math.round(getWeather.wind.speed*10) : '';


    const dewPoint = Math.round((237.7 * (Math.log(humidity/100) + ((17.27 * temp) / (237.7 + temp)))) / (17.27 - Math.log(humidity/100) - ((17.27 * temp) / (237.7 + temp))));





    const data = {
        weatherIcon,
        dewPoint,
        windSpeed,
        visibility,
        pressure,
        humidity,
        temp,
        tempMin,
        tempMax,
        feelsLike,
        country,
        city,
        weatherDescription,
        weatherIcon
    }
    return (
        <FetchApiContext.Provider value={data}>
            {children}
        </FetchApiContext.Provider>
    )
}

export default FetchApiContext;