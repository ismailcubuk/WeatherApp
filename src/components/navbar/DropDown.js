import React, { useContext, useEffect, useRef, useState } from 'react'
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
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, buttonRef]);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { deleteCityPinned, pinnedCity, PinnedCityLocation, city } = useContext(FetchApiContext)
    return (
        <div className='flex justify-center items-center w-48 h-14 rounded-md relative'>
            <button className='flex glassmorphism h-full w-full justify-between items-center' onClick={toggleMenu} ref={buttonRef}>
                <div className='w-10/12'>{city}</div>
                <img src={arrowDown} alt='search-icon' className='h-6 w-2/12' />
            </button>
            {isMenuOpen && (
                <ul className='glassmorphism border-none absolute top-14 left-0 w-48 ' ref={menuRef}>
                    {pinnedCity.map((city) => (
                        <div className='flex justify-around hover:bg-white hover:opacity-40 rounded-md' key={city.id}>
                            <button
                                className='flex p-2 w-full items-center opacity-50 hover:opacity-100 disabled:bg-white disabled:opacity-40'
                                onClick={() => PinnedCityLocation(city.name)}
                            >
                                <img src={pin} alt='pin' className='w-6 h-6 mr-1' />
                                <div>{city.name}</div>
                            </button>
                            <button className='opacity-40 flex items-center justify-center w-4/12 hover:opacity-100' onClick={() => deleteCityPinned(city.id)}>
                                <img src={x} alt='pin' className='w-6 h-6' />
                            </button>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}



{/* DÜZENLENECEK BUTTON HOVERLAR */ }
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