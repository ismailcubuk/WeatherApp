import { createContext, useState, useEffect } from "react";

const SearchContext = createContext();

export const SearchContextprovider = ({ children }) => {
    const [getWeatherIcon, setGetWeatherIcon] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=f816f1c7fc58061a8d4b99d210789fa3`)
            .then(response => response.json())
            .then(data => setGetWeatherIcon(data.weather))
            .catch(error => console.error(error));
    }, [])
    

    const weatherIcon = getWeatherIcon.map((weather) => {
        return <div key={weather}>
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </div>
    })



    const data = {
        weatherIcon
    }
    return (
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;