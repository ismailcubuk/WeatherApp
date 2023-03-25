import { createContext, useState, useEffect } from "react";
import axios from "axios";
const FetchLocation = createContext();

export const FetchLocationprovider = ({ children }) => {
    const [weather, setWeather] = useState()
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const getWeatherData = async (lat, lon) => {
        const key = "f816f1c7fc58061a8d4b99d210789fa3";
        try {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
                // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
            );
            setWeather(data)
        } catch {
            alert("Can't get data")
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            (error) => {
                console.error(error);
            }
        );
        longitude && latitude && getWeatherData(longitude, latitude)
    }, [longitude, latitude]);

    const data = {
        weather,
        latitude,
        longitude,
    }
    return (
        <FetchLocation.Provider value={data}>
            {children}
        </FetchLocation.Provider>
    )
}

export default FetchLocation;