import React, { useContext } from 'react'
import SearchContext from '../../contexts/SearchContext'

function Forecast() {
  const { weatherIcon } = useContext(SearchContext);
  return (
    <div className='flex flex-col w-5/12'>
      <div className='border-blue-700 border-2 h-4/6'>
        img
        {/* <img src={`https://openweathermap.org/img/wn/${locations.weather[0].icon}@2x.png`} alt="" /> */}



        {
         weatherIcon
        }



      </div>
      <div className='border-red-500 border-2 h-2/6'>
        <p>Today's forecast for Amsterdam,Netherlaneds</p>

      </div>
    </div>
  )
}

export default Forecast