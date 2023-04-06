import React, { useContext } from 'react'
import FetchApiContext from '../../../middleware/FetchApi'
import temperature from '../../../assets/icons/forecastDetail/temperature.svg';
import humidityIcon from '../../../assets/icons/forecastDetail/humidity.svg'
import windIcon from '../../../assets/icons/forecastDetail/wind.svg'
import devPointIcon from '../../../assets/icons/forecastDetail/dew-point.svg'
import pressures from '../../../assets/icons/forecastDetail/pressures.svg'
import Visibility from '../../../components/navbar/Visibility';


function WeatherDetail() {
    const { city, country, feelsLike, tempMin, tempMax, humidity, pressure, windSpeed, dewPoint } = useContext(FetchApiContext);
    return (

        <div className='glassmorphism shadow-2xl flex flex-col m-10md:m-0 md:w-1/2 md:justify-around md:h-auto xl:w-5/12 ' >
            <p className=' text-sm font-semibold ml-2 pl-2'>Weather today in {city} , {country}</p>
            <div className='flex justify-between ml-2 pl-2 mr-2 pr-2'>
                <div>
                    <div className='text-4xl font-semibold'> {feelsLike}&deg; </div>
                    <p className='text-sm text-gray-500'>feels like</p>
                </div>
                <div>
                    sun timer
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className=' md:w-1/2'>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={temperature} alt='temperature' className='icons' />
                            </div>
                            <p>
                                High/Low
                            </p>
                        </div>
                        <p>
                            {tempMax}&deg;/{tempMin}&deg;
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={humidityIcon} alt='humidityIcon' className='icons' />
                            </div>
                            <p>
                                Humidity
                            </p>
                        </div>
                        <p>
                            {humidity}%
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={pressures} alt='pressureIcon' className='icons' />
                            </div>
                            <p>
                                Pressure
                            </p>
                        </div>
                        <p>
                            {pressure}mb
                        </p>
                    </div>
                </div>

                <div className=' md:w-1/2'>
                    <Visibility/>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div>
                                <img src={windIcon} alt='windIcon' className='icons' />
                            </div>
                            <p>
                                Wind
                            </p>
                        </div>
                        <p>
                            {windSpeed} km/h
                        </p>
                    </div>
                    <div className='weather-line'>
                        <div className='flex'>
                            <div className='flex'>
                                <img src={devPointIcon} alt='devPointIcon' className='icons' />
                            </div>
                            <p>
                                Dew Point
                            </p>
                        </div>
                        <p>
                            {dewPoint}&deg;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail