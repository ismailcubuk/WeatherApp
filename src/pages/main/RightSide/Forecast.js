import React, { useContext } from 'react'
import Icons from '../../../assets/Icons';
import FetchApiContext from '../../../middleware/FetchApi';

function Forecast() {
  const { weatherIcon,weatherIcons } = useContext(FetchApiContext);
  return (
    <div className='flex flex-col w-5/12'>
      <div className='border-blue-700 border-2'>
      <Icons/>
      </div>
      <div className='border-red-500 border-2'>
        <p>Today's forecast for Amsterdam,Netherlaneds</p>
      </div>
    </div>
  )
}

export default Forecast