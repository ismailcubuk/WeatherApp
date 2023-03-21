import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/input.css'
import { NavbarContextprovider } from './contexts/NavbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavbarContextprovider>
        <App />
    </NavbarContextprovider>
);
