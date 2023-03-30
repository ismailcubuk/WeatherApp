import React, { useContext } from 'react'
import pin from '../../assets/icons/pin/pin.svg'
import FetchApiContext from '../../middleware/FetchApi'

export default function Pinned() {
    
    const { deleteCityPinned, pinnedCity } = useContext(FetchApiContext)
    return (
        <div className='flex gap-5 items-center h-full'>
            {pinnedCity.map((city) => (
                <button className='flex items-center h-fit w-fit' key={city.id} name={city.name} onClick={() => deleteCityPinned(city.id)}>
                    <img src={pin} alt='pin' className='icons' />
                    {city.name}
                </button>
            ))}
        </div>
    )
}
