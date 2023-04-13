import React, { useContext, useEffect, useState } from 'react'
import sunsetIcon from '../../assets/icons/forecastDetail/sunset.svg'
import sunriseIcon from '../../assets/icons/forecastDetail/sunrise.svg'
import sun from '../../assets/icons/forecastDetail/sun.svg'
import WeatherContext from '../../contexts/WeatherContext';

export default function DayTimer() {
    const { sunset, sunrise } = useContext(WeatherContext);
    const [formattedSunrise, setFormattedSunrise] = useState('');
    const [formattedSunset, setFormattedSunset] = useState('');

    useEffect(() => {
        const formatDate = (timestampInSeconds) => {
            const date = new Date(timestampInSeconds * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const amPm = hours >= 12 ? 'pm' : 'am';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            return `${formattedHours}:${formattedMinutes} ${amPm}`;
        };

        if (sunrise) {
            setFormattedSunrise(formatDate(sunrise));
        }

        if (sunset) {
            setFormattedSunset(formatDate(sunset));
        }
    }, [sunrise, sunset]);

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={sun} alt='sun' className='w-20 h-5' />
            </div>
            <div className='flex gap-3'>
                <div className='flex justify-center items-center'>
                    <img src={sunriseIcon} alt='sunriseIcon' className='w-10 h-10' />
                    <p>{formattedSunrise}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={sunsetIcon} alt='sunsetIcon' className='w-10 h-10' />
                    <p>{formattedSunset}</p>
                </div>
            </div>
        </div>

    )
}
