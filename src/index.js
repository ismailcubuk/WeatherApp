import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { FetchApiContextprovider } from './middleware/FetchApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <FetchApiContextprovider>
                <App />
        </FetchApiContextprovider>

);
