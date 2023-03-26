import { useState, useEffect } from 'react';

function Location() {
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Call the reverse geocoding API to get the city name
            const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const data = await response.json();

            // Update the state with the city name
            setCityName(data.city);
        });
    }, []);

    return (
        <div>
            <h1>Your current city: {cityName}</h1>
        </div>
    );
}

export default Location;
