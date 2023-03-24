import React, { useContext } from 'react'
import WeatherIconContext from '../../contexts/WeatherIconContext'

function Forecast() {
  const { weatherIcon, weather } = useContext(WeatherIconContext);
  return (
    <div className='flex flex-col w-5/12'>
      <div className='border-blue-700 border-2 h-4/6'>

        {
          weatherIcon
        }
        {/* {
          weather
        } */}


      </div>
      <div className='border-red-500 border-2 h-2/6'>
        <p>Today's forecast for Amsterdam,Netherlaneds</p>

      </div>
    </div>
  )
}

export default Forecast