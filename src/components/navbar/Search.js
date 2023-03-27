import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import FetchApiContext from '../../middleware/FetchApi'
export default function Search() {
    const { handleChange,handleKeyDown } = useContext(FetchApiContext);

    return (
        <div className='h-3/6 w-6/12 min-w-[200px] flex justify-between items-center'>
            <form>
                <input
                    className='border-gray-900 border-2 p-1 pl-3 pr-3 w-7/12 rounded-3xl h-full  text-xl min-w-[170px] font-bold'
                    type="text"
                    id="search"
                    name="search"
                    onKeyDown={handleKeyDown}
                />
            </form>
            {/* <FontAwesomeIcon icon={faSearchLocation} className='h-4/6' /> */}
        </div>

    )
}
