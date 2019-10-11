import React from 'react';

/*
  name
  capital
  pop 

  languages
*/

const Countries = ({ countries }) => {
  if (countries.length === 0) {
    return <div>Please search for a country</div>
  } else if (countries.length > 10) {
    return <div>Please narrow your search</div>
  } else if (countries.length === 1) {
    const displayLanguages = countries[0].languages.map(language => <div key={language.name}>{language.name}</div>)
    return (
      <div>
        <h1>{countries[0].name}</h1>
        <div>Capital: {countries[0].capital}</div>
        <div>Population: {countries[0].population}</div>
        <h1>Languages</h1>
        {displayLanguages}
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