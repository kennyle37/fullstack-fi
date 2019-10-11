import React from 'react';

const CountryInfo = ({ name, capital, population, languages, flag }) => {
  const displayLanguages = languages.map(language => <div key={language}>{language}</div>)

  return (
    <div>
      <h1>{name}</h1>
      <div>Capital: {capital}</div>
      <div>Population: {population}</div>
      <h1>Languages</h1>
      {displayLanguages}
      <img src={flag} alt="flag" height={100}/>
    </div>
  );
};

export default CountryInfo;