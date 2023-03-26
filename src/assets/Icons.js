import React, { useContext, useEffect, useState } from 'react'
import FetchApiContext from '../middleware/FetchApi'
import clearDay from '../assets/icons/clear-day.svg';
import clearNight from '../assets/icons/clear-night.svg';
import cloudyDay from '../assets/icons/cloudy-day.svg';
import cloudyNight from '../assets/icons/cloudy-night.svg';
import overcastDay from '../assets/icons/overcast-day.svg';
import overcastNight from '../assets/icons/overcast-night.svg';
import rainDay from '../assets/icons/rain-day.svg';
import rainNight from '../assets/icons/rain-night.svg';
import thunderstromsDay from '../assets/icons/thunderstorms-day.svg';
import thunderstromsNight from '../assets/icons/thunderstorms-night.svg';
import snowDay from '../assets/icons/snow-day.svg';
import snowNight from '../assets/icons/snow-night.svg';
import mist from '../assets/icons/mist.svg';
import cloudy from '../assets/icons/cloudy.svg';
import rain from '../assets/icons/rain.svg';


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
        <div className='w-3/6 border-2 h-full flex items-center justify-center border-none'>
            <img src={image} className='border-2 h-full border-none' />
        </div>
    )
}
