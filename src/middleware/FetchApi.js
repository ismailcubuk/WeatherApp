import { createContext, useState, useEffect } from "react";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {
    const [getWeather, setGetWeather] = useState()
    const [getForecast, setGetForecast] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=izmir&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`)
            .then(response => response.json())
            .then(data => setGetWeather(data))
            .catch(error => console.error(error));
    }, [])
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=ankara&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric`)
    //         .then(response => response.json())
    //         .then(data => setGetForecast(data))
    //         .catch(error => console.error(error));
    // }, [])
    // useEffect(() => {
    //     if (getForecast.list) {
    //         getForecast.list.map(item => {
    //             console.log("Temperature:", item.main.temp);
    //             console.log("Main:", item.weather[0].icon);
    //         });
    //     }
    // }, [getForecast]);
    // useEffect(() => {
    //     if (getForecast.list) {
    //       const filteredDates = getForecast.list.filter(item => {
    //         const dateTime = new Date(item.dt_txt);
    //         const currentDate = new Date();
    //         const targetDate = new Date();
    //         targetDate.setDate(currentDate.getDate() + 1);
    //         return dateTime.getDate() === targetDate.getDate() && dateTime.getHours() === 12;
    //       });
    //       const temperatures = filteredDates.map(item => item.main.temp);
    //       const dates = filteredDates.map(item => item.dt_txt);
    //       console.log("Temperatures:", temperatures);
    //       console.log("Dates:", dates);
    //     }
    //   }, [getForecast]);

    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=izmir&appid=f816f1c7fc58061a8d4b99d210789fa3&units=metric"
        )
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.list.filter(
                    (item) =>
                        item.dt_txt.includes("12:00:00") &&
                        !item.dt_txt.includes(new Date().toISOString().slice(0, 10))
                );
                setGetForecast(filteredData);
            })
            .catch((error) => console.error(error));
    }, []);

    // console.log("forecast", getForecast);


    const today = new Date();
    const options = { weekday: 'long' };
    const days = [];
    for (let i = 1; i < 5; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        days.push(day.toLocaleDateString('en-US', options));
    }
    console.log(days);


    
    const forecastTemp = getForecast.map(tempArr => tempArr.main.temp).map(temp=>Math.round(temp))
    const forecastIcons = getForecast.map(x => x.weather[0].icon);






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
    const visibility = getWeather ? Math.round(getWeather.visibility / 1000) : '';
    const windSpeed = getWeather ? Math.round(getWeather.wind.speed * 10) : '';
    const dewPoint = Math.round((237.7 * (Math.log(humidity / 100) + ((17.27 * temp) / (237.7 + temp)))) / (17.27 - Math.log(humidity / 100) - ((17.27 * temp) / (237.7 + temp))));





    const data = {
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
        weatherIcon
    }
    return (
        <FetchApiContext.Provider value={data}>
            {children}
        </FetchApiContext.Provider>
    )
}

export default FetchApiContext;