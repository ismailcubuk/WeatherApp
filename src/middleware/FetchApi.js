import { createContext, useState, useEffect, useCallback } from "react";

const FetchApiContext = createContext();

export const FetchApiContextprovider = ({ children }) => {
    const [getWeather, setGetWeather] = useState()
    const [getForecast, setGetForecast] = useState([])
    const [cityName, setCityName] = useState('')
    const [name, setName] = useState('')

    // search button
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setCityName(name);
        }
    };
    const handleCity = (e) => {
        e.preventDefault()
        const searchName = e.target.value
        const upperCityName = searchName.charAt(0).toUpperCase() + searchName.slice(1).toLowerCase()
        setName(upperCityName)
    };
    const searchClick = (e) => {
        e.preventDefault()
        setCityName(name);
    }
    // search button
    const getLocationAndSetCityName = useCallback(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const data = await response.json();

            setCityName(data.city);
        });
    }, [setCityName]);

    useEffect(() => {
        getLocationAndSetCityName();
    }, [getLocationAndSetCityName]);

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
    const sunrise = getWeather ? getWeather.sys.sunrise : '';
    const sunset = getWeather ? getWeather.sys.sunset : '';

    const temp = getWeather ? Math.round(getWeather.main.temp) : '';
    const tempAvg = Math.round(detail.reduce((acc, item) => acc + item.temp, 0) / detail.length);
    const tempMax = Math.round(detail.reduce((max, item) => (item.temp_max > max ? item.temp_max : max), -Infinity));
    const tempMin = Math.round(detail.reduce((min, item) => (item.temp_min < min ? item.temp_min : min), Infinity));
    const humidity = Math.round(detail.reduce((humidity, item) => humidity + item.humidity, 0) / detail.length);
    const pressure = Math.round(detail.reduce((pressure, item) => pressure + item.pressure, 0) / detail.length);

    const visibility = detail.reduce((visibility, item) => visibility + item.visibility, 0) / detail.length / 1000;
    const windSpeed = getWeather ? Math.round(getWeather.wind.speed * 10 /detail.length) : '';
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



    // PİNNED CİTY
    const [pinnedCity, setPinnedCity] = useState([]);
    const [shows, setShows] = useState(false)
    
    const KEY_PINNED_CITY = "pinnedCity";
    useEffect(() => {
        const savedPinnedCity = localStorage.getItem(KEY_PINNED_CITY);
        if (savedPinnedCity) {
            setPinnedCity(JSON.parse(savedPinnedCity));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY_PINNED_CITY, JSON.stringify(pinnedCity));
    }, [pinnedCity]);

    const createCityPinned = () => {
        const newCityName = cityName;
        if (pinnedCity.length < 3) {
            if (!pinnedCity.some((city) => city.name === newCityName)) {
                const newCity = {
                    id: Date.now(),
                    name: newCityName,
                };
                setShows(true)
                setPinnedCity([...pinnedCity, newCity]);
            }
        }
    };

    const deleteCityPinned = (id) => {
        const updatePinnedCity = pinnedCity.filter((city) => city.id !== id);
        setPinnedCity(updatePinnedCity);
    };

    const PinnedCityLocation = (id) => {
        setCityName(id);
    };




    const [weatherCondition, setWeatherCondition] = useState('');

    const data = {
        weatherCondition,
        setWeatherCondition,
        shows,
        sunset,
        sunrise,
        handleCity,
        searchClick,
        getLocationAndSetCityName,
        PinnedCityLocation,
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
