import { createContext, useState, useEffect, useCallback } from "react";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {
    const [getWeather, setGetWeather] = useState()
    const [getForecast, setGetForecast] = useState([])
    const [cityName, setCityName] = useState('istanbul')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setCityName(e.target.value);
        }
    };

    const getLocationAndSetCityName = useCallback(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const data = await response.json();

            setCityName(data.city);
        });
    }, []);

    useEffect(() => {
        getLocationAndSetCityName();
    }, [getLocationAndSetCityName]);

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

                const filteredData = forecastData.list.filter(
                    (item) => item.dt_txt.includes("12:00:00") && !item.dt_txt.includes(new Date().toISOString().slice(0, 8))
                );
                setGetForecast(filteredData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [cityName]);



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

    const [pinnedCity, setPinnedCity] = useState([]);

    const createCityPinned = () => {
        const newCityName = cityName;
        if (!pinnedCity.some(sa => sa.name === newCityName)) {
            const newCity = {
                id: Date.now(),
                name: newCityName
            };
            setPinnedCity([...pinnedCity, newCity]);
        }
    };

    const deleteCityPinned = (id) => {
        const updatePinnedCity = pinnedCity.filter(city => city.id !== id);
        setPinnedCity(updatePinnedCity);
    };




    const data = {
        deleteCityPinned,
        pinnedCity,
        createCityPinned,
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