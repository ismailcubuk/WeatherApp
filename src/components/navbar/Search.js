import React, { useContext } from 'react'
import search from '../../assets/icons/pin/search.svg'
import SearchContext from '../../contexts/SearchContext';
export default function Search() {
    const { handleKeyDown, searchClick, handleCity } = useContext(SearchContext);

    return (
        <div className='h-3/6 w-6/12 min-w-[150px] mbl:min-w-[200px] flex justify-between items-center glassmorphism'>
            <input
                className=' pl-3 pr-3 w-7/12 rounded-lg h-full text-xl min-w-[120px] mbl:min-w-[170px] font-bold outline-0 bg-transparent '
                type="text"
                autoComplete='off'
                id="search"
                name="search"
                onChange={handleCity}
                onKeyDown={handleKeyDown}
                placeholder='Search City'
            />
            <button onClick={searchClick} className='mr-2 opacity-40 hover:opacity-100'>
                <img src={search} alt='search-icon' className='w-6 h-6' />
            </button>

        </div>

    )
}
