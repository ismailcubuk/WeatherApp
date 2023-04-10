import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { FetchApiContextprovider } from './middleware/FetchApi';
import { WeatherContextprovider } from './contexts/WeatherContext';
import { SearchContextprovider } from './contexts/SearchContext';
import { PinCityContextprovider } from './contexts/PinCityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <SearchContextprovider>
                <PinCityContextprovider>
                        <FetchApiContextprovider>
                                <WeatherContextprovider>
                                        <App />
                                </WeatherContextprovider>
                        </FetchApiContextprovider>
                </PinCityContextprovider>
        </SearchContextprovider>

);
