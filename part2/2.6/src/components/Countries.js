import React from 'react';

const Countries = ({ countries }) => {
  if (countries.length === 0) {
    return <div>Please search for a country</div>
  } else if (countries.length > 10) {
    return <div>Please narrow your search</div>
  } else if (countries.length === 1) {
    const { name, capital, population, flag } = countries[0];
    const displayLanguages = countries[0].languages.map(language => <div key={language.name}>{language.name}</div>)
    return (
      <div>
        <h1>{name}</h1>
        <div>Capital: {capital}</div>
        <div>Population: {population}</div>
        <h1>Languages</h1>
        {displayLanguages}
        <img src={flag} height={100}/>
      </div>
    )
  }
  const displayCountries = countries.map(country => <div key={country.name}>{country.name}</div>)

  return (
    <div>
      {displayCountries}
    </div>
  );
};

export default Countries;