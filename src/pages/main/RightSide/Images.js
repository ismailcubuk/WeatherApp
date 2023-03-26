import React, { useContext } from 'react'
import Icons from '../../../assets/Icons';
import FetchApiContext from '../../../middleware/FetchApi';

function Images() {
  const { city, country } = useContext(FetchApiContext);
  return (
    <div>
      <Icons/>
    </div>
  )
}

export default Images