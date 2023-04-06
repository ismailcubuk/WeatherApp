import React, { useContext, useState } from 'react'
import dropDown from '../../assets/icons/pin/dropDown.svg'
import pin from '../../assets/icons/pin/pin.svg'
import x from '../../assets/icons/pin/x.svg'
import trash from '../../assets/icons/pin/trash.svg'
import del from '../../assets/icons/pin/del.svg'
import del2 from '../../assets/icons/pin/del2.svg'
import arrowDown from '../../assets/icons/pin/arrowDown.svg'
import FetchApiContext from '../../middleware/FetchApi';

export default function DropDown() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { deleteCityPinned, pinnedCity, PinnedCityLocation, city } = useContext(FetchApiContext)
    return (
        <div className=' flex justify-center items-center w-48 h-14 rounded-md relative'>
            <button className='flex glassmorphism h-full w-full justify-between items-center' onClick={toggleMenu} >
                <div className=' w-10/12'>{city}</div>
                <img src={arrowDown} alt='search-icon' className='h-6 w-2/12 ' />
            </button>
            {isMenuOpen && (
                <ul className="glassmorphism border-none absolute top-14 left-0 w-48">
                    {pinnedCity.map((citys) => (
                        <div className='flex justify-around hover:bg-white hover:opacity-40 rounded-md'>
                            <button
                                className='flex p-2 w-full items-center opacity-50 hover:opacity-100 disabled:bg-white disabled:opacity-40'
                                onClick={() => PinnedCityLocation(citys.name)}
                            >
                                <img src={pin} alt='pin' className='w-6 h-6 mr-1' />
                                <div>{citys.name}</div>
                            </button>
                            <button
                                className='opacity-40 flex items-center justify-center w-4/12 hover:opacity-100'
                                onClick={() => deleteCityPinned(citys.id)}
                            >
                                <img src={x} alt='pin' className='w-6 h-6' />
                            </button>
                            {/* DÜZENLENECEK BUTTON HOVERLAR */}
                            {/* {city === citys.name ?
                                <button

                                    className='flex items-center justify-center w-4/12 hover:opacity-90 bg-white opacity-40'
                                    onClick={() => deleteCityPinned(citys.id)}
                                >
                                    <img src={x} alt='pin' className='w-6 h-6' />
                                </button>
                                :
                                <button

                                    className='opacity-40 flex items-center justify-center w-4/12 hover:opacity-90'
                                    onClick={() => deleteCityPinned(citys.id)}
                                >
                                    <img src={x} alt='pin' className='w-6 h-6' />
                                </button>
                            } */}

                        </div>
                    ))}
                </ul>
            )}
        </div>

    )
}
