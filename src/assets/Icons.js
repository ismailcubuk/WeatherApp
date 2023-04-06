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
        <div className='flex justify-center w-3/6 mb-5 mt-5 md:mb-0 md:mt-0 md:w-1/2 xl:w-5/12 ' >
            <img src={image} className='glassmorphism w-full h-full shadow-2xl md:w-3/5' />
        </div>
    )
}
