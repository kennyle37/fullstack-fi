import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfo = ({ name, capital, population, languages, flag, exact }) => {
  const [ display, setDisplay ] = useState(false);
  const [ weather, setWeather ] = useState({ temperature: 0, weatherIcon: '', windSpeed: 0, windDirection: '',});

  const handleToggleDisplay = () => setDisplay(!display);
  const displayLanguages = languages.map(language => <li key={language}>{language}</li>)
  
  const weatherQuery = () => {
    if (!capital) return;
    axios.get(`http://api.weatherstack.com/current?access_key=3497b0963dad34eeb37979d2c8531661&query=${capital}`)
      .then(res => {
        console.log(res)
        const { temperature, wind_speed, wind_dir } = res.data.current
        setWeather({
          temperature: temperature,
          weatherIcon: res.data.current.weather_icons[0],
          windSpeed: wind_speed,
          windDirection: wind_dir,
        });
      })
  }
  useEffect(weatherQuery, []);

  if (display || exact) {
    const { temperature, windSpeed, windDirection, weatherIcon } = weather;

    return (
      <div>
        <div>
          <h1>{name} <button onClick={handleToggleDisplay}>hide</button></h1>
        </div>
        <div>Capital: {capital}</div>
        <div>Population: {population}</div>
        <h1>Languages</h1>
        {displayLanguages}
        <img src={flag} alt="flag" height={100}/>
        <h1>Weather in {capital}</h1>
        <div><b>Temperature:</b>{temperature} Celcius</div>
        <img src={weatherIcon} alt={'weather_icon'} />
        <div><b>Wind:</b> {windSpeed} kph direction {windDirection}</div>
      </div>
    );    
  }
  return (
    <div>
      <div>
        <h1>{name} <button onClick={handleToggleDisplay}>show</button></h1>
      </div>
    </div>
  );  

};

export default CountryInfo;