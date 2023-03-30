import React, { useContext } from 'react'
import FetchApiContext from '../../middleware/FetchApi'
import search from '../../assets/icons/pin/search.svg'
export default function Search() {
    const { handleKeyDown } = useContext(FetchApiContext);

    return (
        <div className='h-3/6 w-6/12 min-w-[200px] flex justify-between items-center glassmorphism'>
                <input
                    className=' pl-3 pr-3 w-7/12 rounded-lg h-full text-xl min-w-[170px] font-bold outline-0 bg-transparent '
                    type="text"
                    id="search"
                    name="search"
                    onKeyDown={handleKeyDown}
                />
                <img src={search} className='w-6 h-6 mr-2'/>
        </div>

    )
}
