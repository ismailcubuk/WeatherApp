import React, { useContext, useState, useEffect } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import clearDay from '../../../assets/icons/clear-day.svg';
import clearNight from '../../../assets/icons/clear-night.svg';
import cloudyDay from '../../../assets/icons/cloudy-day.svg';
import cloudyNight from '../../../assets/icons/cloudy-night.svg';
import overcastDay from '../../../assets/icons/overcast-day.svg';
import overcastNight from '../../../assets/icons/overcast-night.svg';
import rainDay from '../../../assets/icons/rain-day.svg';
import rainNight from '../../../assets/icons/rain-night.svg';
import thunderstromsDay from '../../../assets/icons/thunderstorms-day.svg';
import thunderstromsNight from '../../../assets/icons/thunderstorms-night.svg';
import snowDay from '../../../assets/icons/snow-day.svg';
import snowNight from '../../../assets/icons/snow-night.svg';
import mist from '../../../assets/icons/mist.svg';
import cloudy from '../../../assets/icons/cloudy.svg';
import rain from '../../../assets/icons/rain.svg';



export default function Forecast() {
    const { city, country, forecastTemp, forecastIcons, days } = useContext(FetchApiContext)
    const [day1, setDay1] = useState(null)
    const [day2, setDay2] = useState(null)
    const [day3, setDay3] = useState(null)
    const [day4, setDay4] = useState(null)
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

        setDay1(icons[forecastIcons[0]]);
        setDay2(icons[forecastIcons[1]]);
        setDay3(icons[forecastIcons[2]]);
        setDay4(icons[forecastIcons[3]]);
    }, [forecastIcons]);
    const forecastDays = [day1, day2, day3, day4];
    return (
        <div className='border-red-500 h-2/6 border-2'>
            <p>Today's forecast for {city}, {country} </p>
            <div className='border-blue-500 border-2 '>
                <div className=' grid grid-flow-col grid-cols-4'>
                    {days.map(x => { return <div >{x} </div> })}
                </div>
                <div className=' grid grid-flow-col grid-cols-4'>
                    {forecastTemp.map(x => {
                        return <div>
                            {x}
                        </div>
                    })}
                </div>
                <div className=' grid grid-flow-col grid-cols-4'>
                    {forecastDays.map(x => {
                        return <div className='flex items-center justify-center'>
                            <img src={x} className='border-2 w-44 h-4/6 border-green-500' />
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
