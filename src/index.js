import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { FetchApiContextprovider } from './middleware/FetchApi';
import { FetchLocationprovider } from './middleware/FetchLocation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FetchLocationprovider>
        <FetchApiContextprovider>
                <App />
        </FetchApiContextprovider>
    </FetchLocationprovider>

);
