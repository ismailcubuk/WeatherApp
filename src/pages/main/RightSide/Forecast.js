import React, { useContext, useState, useEffect, useMemo } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import clearDay from '../../../assets/icons/forecast/clear-day.svg';
import clearNight from '../../../assets/icons/forecast/clear-night.svg';
import cloudyDay from '../../../assets/icons/forecast/cloudy-day.svg';
import cloudyNight from '../../../assets/icons/forecast/cloudy-night.svg';
import overcastDay from '../../../assets/icons/forecast/overcast-day.svg';
import overcastNight from '../../../assets/icons/forecast/overcast-night.svg';
import rainDay from '../../../assets/icons/forecast/rain-day.svg';
import rainNight from '../../../assets/icons/forecast/rain-night.svg';
import thunderstormsDay from '../../../assets/icons/forecast/thunderstorms-day.svg';
import thunderstormsNight from '../../../assets/icons/forecast/thunderstorms-night.svg';
import snowDay from '../../../assets/icons/forecast/snow-day.svg';
import snowNight from '../../../assets/icons/forecast/snow-night.svg';
import mist from '../../../assets/icons/forecast/mist.svg';
import cloudy from '../../../assets/icons/forecast/cloudy.svg';
import rain from '../../../assets/icons/forecast/rain.svg';



export default function Forecast() {
    const { forecastTemp, forecastIcons, days } = useContext(FetchApiContext)
    const icons = useMemo(() => ({
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
        "11d": thunderstormsDay,
        "11n": thunderstormsNight,
        "13d": snowDay,
        "13n": snowNight,
        "50d": mist,
        "50n": mist
    }), []);

    const [forecastDays, setForecastDays] = useState([]);

    useEffect(() => {
        setForecastDays(forecastIcons.map(icon => icons[icon]));
    }, [forecastIcons, icons]);
    console.log(forecastIcons);
    const day = days.map((x, index) => { return <div key={index} >{x} </div> })
    const temperature = forecastTemp.map((x, index) => {
        return <div key={index}>
            <div className='text-3xl'>{x}&deg;</div>
        </div>
    })
    const weatherIcons = forecastDays.map((x, index) => {
        return <div key={index}>
            <img alt='img' className='w-full h-full img-drop-shadow' src={x} />
        </div>
    })

    return (
        <div className='md:w-1/2 xl:w-5/12 glassmorphism p-5 flex flex-col justify-around shadow-2xl' >
            <div className='grid grid-flow-col text-center grid-cols-4'>{day}</div>
            <div className='grid grid-flow-col text-center grid-cols-4'>{temperature}</div>
            <div className='grid grid-flow-col text-center grid-cols-4'>{weatherIcons}</div>
        </div>
    )
}
