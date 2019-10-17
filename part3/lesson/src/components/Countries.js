import React from 'react';
import CountryInfo from './CountryInfo';

const Countries = ({ countries }) => {
  const handleDisplayLanguages = (country) => country.languages.map(language => language.name)

  if (countries.length === 0) {
    return <div>Please search for a country</div>
  } else if (countries.length > 10) {
    return <div>Please narrow your search</div>
  } else if (countries.length === 1) {
    const { name, capital, population, flag } = countries[0];
    const languages = handleDisplayLanguages(countries[0]);

    return (
      <CountryInfo 
        name={name} 
        capital={capital} 
        population={population}
        languages={languages} 
        flag={flag} 
        exact={true}
      />
    )
  }
  const displayCountries = countries.map(country => {
    const { name, capital, population, flag } = country;
    const languages = handleDisplayLanguages(country);

    return (
      <CountryInfo 
        name={name} 
        capital={capital} 
        population={population}
        languages={languages} 
        flag={flag} 
      />
    )
  })

  return (
    <div>
      {displayCountries}
    </div>
  );
};

export default Countries;