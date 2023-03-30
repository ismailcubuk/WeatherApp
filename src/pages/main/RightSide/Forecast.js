import React, { useContext, useState, useEffect } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import clearDay from '../../../assets/icons/forecast/clear-day.svg';
import clearNight from '../../../assets/icons/forecast/clear-night.svg';
import cloudyDay from '../../../assets/icons/forecast/cloudy-day.svg';
import cloudyNight from '../../../assets/icons/forecast/cloudy-night.svg';
import overcastDay from '../../../assets/icons/forecast/overcast-day.svg';
import overcastNight from '../../../assets/icons/forecast/overcast-night.svg';
import rainDay from '../../../assets/icons/forecast/rain-day.svg';
import rainNight from '../../../assets/icons/forecast/rain-night.svg';
import thunderstromsDay from '../../../assets/icons/forecast/thunderstorms-day.svg';
import thunderstromsNight from '../../../assets/icons/forecast/thunderstorms-night.svg';
import snowDay from '../../../assets/icons/forecast/snow-day.svg';
import snowNight from '../../../assets/icons/forecast/snow-night.svg';
import mist from '../../../assets/icons/forecast/mist.svg';
import cloudy from '../../../assets/icons/forecast/cloudy.svg';
import rain from '../../../assets/icons/forecast/rain.svg';



export default function Forecast() {
    const { forecastTemp, forecastIcons, days } = useContext(FetchApiContext)
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
        <div className=' w-2/6 glassmorphism p-2' >
            <div>
                <div className='weather-grid pt-2'>
                    {days.map((x, index) => { return <div key={index} className='weather-text' >{x} </div> })}
                </div>
                <div className='weather-grid'>
                    {forecastTemp.map((x, index) => {
                        return <div key={index} className='weather-text'>
                            <div className='text-3xl'>{x}&deg;</div>
                        </div>
                    })}
                </div>
                <div className='weather-grid '>
                    {forecastDays.map((x, index) => {
                        return <div key={index} className='images'>
                            <img alt='img' src={x} />
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
