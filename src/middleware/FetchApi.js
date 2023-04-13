import { createContext, useState, useEffect, useCallback, useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import FetchLocation from "./FetchLocation";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {

    const { handleKeyDown, searchClick, handleCity, cityName } = useContext(SearchContext);
    const { getLocationAndSetCityName } = useContext(FetchLocation);

    const [getWeather, setGetWeather] = useState()
    const [getForecast, setGetForecast] = useState([])
    const [weatherCondition, setWeatherCondition] = useState('');
    const [detail, setDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!cityName) return;
                const [weatherResponse, forecastResponse] = await Promise.all([
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`),
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`)
                ]);

                const [weatherData, forecastData] = await Promise.all([weatherResponse.json(), forecastResponse.json()]);

                setGetWeather(weatherData);

                const filteredDetail = forecastData.list.slice(0, 9).map((item) => {
                    return {
                        temp_max: item.main.temp_max,
                        temp_min: item.main.temp_min,
                        temp: item.main.temp,
                        feels_like: item.main.feels_like,
                        humidity: item.main.humidity,
                        pressure: item.main.pressure,
                        visibility: item.visibility,
                    };
                });
                setDetail(filteredDetail);

                const filteredData = forecastData.list.filter(
                    (item) => item.dt_txt.includes("12:00:00") && !item.dt_txt.includes(new Date().toISOString())
                ).slice(0, 4);
                setGetForecast(filteredData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [cityName]);
    // DATE

    const temp = getWeather ? Math.round(getWeather.main.temp) : '';
    const tempAvg = Math.round(detail.reduce((acc, item) => acc + item.temp, 0) / detail.length);
    const tempMax = Math.round(detail.reduce((max, item) => (item.temp_max > max ? item.temp_max : max), -Infinity));
    const tempMin = Math.round(detail.reduce((min, item) => (item.temp_min < min ? item.temp_min : min), Infinity));
    const humidity = Math.round(detail.reduce((humidity, item) => humidity + item.humidity, 0) / detail.length);
    const pressure = Math.round(detail.reduce((pressure, item) => pressure + item.pressure, 0) / detail.length);

    const visibility = detail.reduce((visibility, item) => visibility + item.visibility, 0) / detail.length / 1000;
    const windSpeed = getWeather ? Math.round(getWeather.wind.speed * 10 / detail.length) : '';
    const dewPoint = Math.round((237.7 * (Math.log(humidity / 100) + ((17.27 * tempAvg) / (237.7 + tempAvg)))) / (17.27 - Math.log(humidity / 100) - ((17.27 * tempAvg) / (237.7 + tempAvg))));

    const today = new Date();
    const options = { weekday: 'long' };
    const days = [];
    for (let i = 1; i < 5; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        days.push(day.toLocaleDateString('en-US', options));
    }
    const forecastTemp = getForecast.map(tempArr => tempArr.main.temp).map(temp => Math.round(temp))
    const forecastIcons = getForecast.map(x => x.weather[0].icon);

    const weatherDescription = getWeather ? getWeather.weather[0].description : '';
    const weatherIcon = getWeather ? getWeather.weather[0].icon : '';
    const feelsLike = getWeather ? Math.round(getWeather.main.feels_like) : '';
    const country = getWeather ? getWeather.sys.country : '';
    const city = getWeather ? getWeather.name : '';

    const data = {
        getWeather,
        weatherCondition,
        setWeatherCondition,
        handleCity,
        searchClick,
        getLocationAndSetCityName,
        handleKeyDown,
        forecastTemp,
        forecastIcons,
        days,
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
    }
    return (
        <FetchApiContext.Provider value={data}>
            {children}
        </FetchApiContext.Provider>
    )
}

export default FetchApiContext;
