import React, { useContext, useEffect, useRef, useState } from 'react'
import dropDown from '../../assets/icons/pin/dropDown.svg'
import pin from '../../assets/icons/pin/pin.svg'
import x from '../../assets/icons/pin/x.svg'
import trash from '../../assets/icons/pin/trash.svg'
import del from '../../assets/icons/pin/del.svg'
import del2 from '../../assets/icons/pin/del2.svg'
import arrowDown from '../../assets/icons/pin/arrowDown.svg'
import FetchApiContext from '../../middleware/FetchApi';
import PinCityContext from '../../contexts/PinCityContext'

export default function DropDown() {
    const { city } = useContext(FetchApiContext);
    const { deleteCityPinned, pinnedCity, PinnedCityLocation } = useContext(PinCityContext);

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
    return (
        <div className='w-48 h-14 rounded-md relative '>
            <span className='count-animation absolute flex justify-center items-center top-2 right-5 mt-[-15px] glassmorphism-count border-none opacity-80 rounded-3xl w-6 h-6'>
                <span className='flex justify-center' style={{ "--value": pinnedCity.length }}></span>
            </span>
            <button className='flex glassmorphism-nav h-full w-full glassmorphism-btn border-none justify-between items-center' onClick={toggleMenu} ref={buttonRef}>
                <div className='w-10/12'>{city}</div>
                <img src={arrowDown} alt='search-icon' className='h-6 w-2/12' />
            </button>
            {isMenuOpen && (
                <ul className=' border-none relative z-40 w-48 ' ref={menuRef}>
                    {pinnedCity.map((city) => (
                        <div className='flex justify-around rounded-md glassmorphism-btn glassmorphism-nav backdrop-blur-md border-none p-1' key={city.id}>
                            <button
                                className='flex p-2 w-full items-center'
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