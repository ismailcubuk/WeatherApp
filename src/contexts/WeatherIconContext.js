import { createContext, useState, useEffect } from "react";

const WeatherIconContext = createContext();

export const WeatherIconContextprovider = ({ children }) => {
    const [getWeather, setGetWeather] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=f816f1c7fc58061a8d4b99d210789fa3`)
            .then(response => response.json())
            .then(data => setGetWeather(data.weather))
            .catch(error => console.error(error));
    }, [])


    const weatherIcon = getWeather.map((weather) => {
        return <div key={weather.icon}>
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="" />
        </div>
    })
    const weather = getWeather.map((weather) => {
        return <div key={weather.icon}>
            {/* <div> {weather.main} </div>
            <div> {weather.description} </div> */}
        </div>
    })



    const data = {
        weatherIcon,
        weather
    }
    return (
        <WeatherIconContext.Provider value={data}>
            {children}
        </WeatherIconContext.Provider>
    )
}

export default WeatherIconContext;