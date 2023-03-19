import axios from "axios";
import { useState,useEffect } from "react";

function App() {
  const [weather, setWeather] = useState()
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  
  const getWeatherData = async (lat, lon) => {
    const key = "f816f1c7fc58061a8d4b99d210789fa3";
    try{
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
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
      longitude && latitude && getWeatherData(longitude,latitude)
    }, [longitude,latitude]);

console.log(weather,longitude,latitude);

  return (
    <div>
      <div>
      long = {longitude}
      </div>
      <div>
      lat = {latitude}
      </div>
    </div>
  );
}

export default App;
