import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
    return (
        <div className='h-3/6 w-6/12 min-w-[200px] flex justify-between items-center'>
            <input
                className='border-gray-900 border-2 pl-2 pr-2 w-7/12 rounded-3xl h-full text-center text-xl min-w-[170px] font-bold'
                type="text"
                id="search"
                name="search"
            />
            <FontAwesomeIcon icon={faSearchLocation} className='h-4/6' />
        </div>

    )
}
