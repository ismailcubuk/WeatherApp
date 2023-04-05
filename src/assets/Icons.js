import React, { useContext, useEffect, useState } from 'react'
import FetchApiContext from '../middleware/FetchApi'
import clearDay from '../assets/icons/forecast/clear-day.svg';
import clearNight from '../assets/icons/forecast/clear-night.svg';
import cloudyDay from '../assets/icons/forecast/cloudy-day.svg';
import cloudyNight from '../assets/icons/forecast/cloudy-night.svg';
import overcastDay from '../assets/icons/forecast/overcast-day.svg';
import overcastNight from '../assets/icons/forecast/overcast-night.svg';
import rainDay from '../assets/icons/forecast/rain-day.svg';
import rainNight from '../assets/icons/forecast/rain-night.svg';
import thunderstromsDay from '../assets/icons/forecast/thunderstorms-day.svg';
import thunderstromsNight from '../assets/icons/forecast/thunderstorms-night.svg';
import snowDay from '../assets/icons/forecast/snow-day.svg';
import snowNight from '../assets/icons/forecast/snow-night.svg';
import mist from '../assets/icons/forecast/mist.svg';
import cloudy from '../assets/icons/forecast/cloudy.svg';
import rain from '../assets/icons/forecast/rain.svg';


export default function Icons() {
    const { weatherIcon } = useContext(FetchApiContext);
    const [image, setImage] = useState(null)

    useEffect(() => {
        const icons = {
            "01d": clearDay,
            "01n": clearNight,
            "02d": cloudyDay,
            "02n": cloudyNight,
            "03d": cloudy,
            "03n": cloudy,
            "04d": overcastDay,
            "04n": overcastNight,
            "09d": rain,
            "09n": rain,
            "10d": rainDay,
            "10n": rainNight,
            "11d": thunderstromsDay,
            "11n": thunderstromsNight,
            "13d": snowDay,
            "13n": snowNight,
            "50d": mist,
            "50n": mist
        };

        setImage(icons[weatherIcon]);
    }, [weatherIcon]);

    return (
        <div className='flex items-center justify-center border-2 w-full sm:w-3/6 '>
            <img src={image} className='m-5 glassmorphism  w-3/4 h-3/4 ' />
        </div>
    )
}
