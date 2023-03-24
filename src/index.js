import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { SearchContextprovider } from './contexts/SearchContext';
import { WeatherApiContextprovider } from './contexts/WeatherApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WeatherApiContextprovider>
        <SearchContextprovider>
            <App />
        </SearchContextprovider>
    </WeatherApiContextprovider>
);
