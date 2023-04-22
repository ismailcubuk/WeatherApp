import React, { useState, useEffect } from 'react';

function MyComponents() {
  const [value, setValue] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/find?type=like&q=${value}&appid=f816f1c7fc58061a8d4b99d210789fa3`);
      const data = await response.json();
      setCities(data.list);
    }
    if (value.length > 2) {
      fetchData();
    }
  }, [value]);

  const filteredCities = cities ? cities.filter(city => city.name.toLowerCase().includes(value.toLowerCase())) : [];

  return (
    <div>
      <label htmlFor="city-input">City:</label>
      <input id="city-input" type="text" value={value} onChange={event => setValue(event.target.value)} />
      {filteredCities.map(city => (
        <p key={city.id}>{city.name}, {city.sys.country}</p>
      ))}
    </div>
  );
}

export default MyComponents;
