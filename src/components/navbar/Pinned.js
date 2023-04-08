import React, { useContext } from 'react'
import pin from '../../assets/icons/pin/pin.svg'
import x from '../../assets/icons/pin/x.svg'
import FetchApiContext from '../../middleware/FetchApi'

export default function Pinned() {

    const { deleteCityPinned, pinnedCity, PinnedCityLocation } = useContext(FetchApiContext)
    return (
        <div className='flex gap-5 items-center border-none'>
            {pinnedCity.map((city) => (
                <div className='flex items-center h-fit w-fit rounded-lg p-1 glassmorphism glassmorphism-btn' key={city.id}>
                    <button
                        className='flex items-center  h-fit w-fit opacity-50 hover:opacity-100'
                        onClick={() => PinnedCityLocation(city.name)}
                    >
                        <img src={pin} alt='pin' className='w-6 h-6 mr-1' />
                        <div >{city.name}</div>
                    </button>
                    <button
                        className='ml-2 rounded-full hover:bg-slate-400 opacity-40 hover:opacity-90'
                        onClick={() => deleteCityPinned(city.id)}
                    >
                        <img src={x} alt='pin' className='w-6 h-6 p-0.5' />
                    </button>
                </div>
            ))}
        </div>
    )
}
