import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { WeatherIconContextprovider } from './contexts/WeatherIconContext';
import { WeatherApiContextprovider } from './contexts/WeatherApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WeatherApiContextprovider>
        <WeatherIconContextprovider>
            <App />
        </WeatherIconContextprovider>
    </WeatherApiContextprovider>
);
