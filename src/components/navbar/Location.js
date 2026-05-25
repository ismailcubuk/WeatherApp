import React, { useContext } from 'react'
import location from '../../assets/icons/pin/location.svg'
import FetchApiContext from '../../middleware/FetchApi'
export default function Location() {
    const { getLocationAndSetCityName } = useContext(FetchApiContext)
    return (
        <button
            className='flex h-11 w-11 items-center justify-center rounded-lg border border-sky-50/30 bg-slate-100/55 shadow-lg shadow-slate-950/10 backdrop-blur-xl transition hover:bg-slate-50/75'
            onClick={getLocationAndSetCityName}
            aria-label='Use current location'
        >
            <img src={location} alt='location' className='h-6 w-6' />
        </button>
    )
}
