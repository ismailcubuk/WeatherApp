import React, { useContext } from 'react'
import search from '../../assets/icons/pin/search.svg'
import SearchContext from '../../contexts/SearchContext';
export default function Search() {
    const { handleKeyDown, searchClick, handleCity } = useContext(SearchContext);

    return (
        <div className='flex h-11 w-full min-w-0 flex-1 items-center justify-between rounded-lg border border-sky-50/30 bg-slate-100/55 shadow-lg shadow-slate-950/10 backdrop-blur-xl md:min-w-[280px] md:max-w-[360px]'>
            <input
                className='h-full min-w-0 flex-1 rounded-lg bg-transparent px-3 text-sm font-semibold text-slate-950 outline-0 placeholder:text-slate-500 mbl:text-base'
                type="text"
                autoComplete='off'
                id="search"
                name="search"
                onChange={handleCity}
                onKeyDown={handleKeyDown}
                placeholder='Search City'
            />
            <button
                onClick={searchClick}
                className='mr-1 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950/90 opacity-90 transition hover:bg-sky-800 hover:opacity-100'
                aria-label='Search city'
            >
                <img src={search} alt='search-icon' className='w-6 h-6' />
            </button>

        </div>

    )
}
