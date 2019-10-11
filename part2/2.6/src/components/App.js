<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import axios from 'axios';

// import Numbers from './Persons';
// import Filter from './Filter';
// import PersonForm from './PersonForm';
import Phonebook from './Phonebook';
import Countries from './Countries';

const App = () => {
  const [ persons, setPersons] = useState([])
=======
import React, { useState } from 'react'
import Numbers from './Persons';
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
>>>>>>> parent of 8784b5b1... 2.11
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');
  const [ searchCountry, setSearchCountry ] = useState('');
  const [ countries, setCountries ] = useState([]);

  const handleOnNameChange = (e) => setNewName(e.target.value);
  const handleOnNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilter = (e) => setNewFilter(e.target.value);
  const verifyDuplicate = (name) => persons.every(person => person.name !== name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {};
    person['name'] = newName;
    person['number'] = newNumber;
    const verify = verifyDuplicate(person.name);
    const newPerson = persons.concat(person);
    verify ? setPersons(newPerson) : alert(`${person.name} is already in the phone book`);
  }

  const handleCountry = (e) => {
    console.log(e.target.value);
    setSearchCountry(e.target.value);
  }

  const countriesResult = () => {
    if (!searchCountry) return;
    axios.get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then(res => {
        console.log(res.data);
        setCountries(res.data);
      })
  }

  useEffect(countriesResult, [searchCountry]);

  /*
  if countries result is empty
    return our message

  if countries result is > 10
    tell them to narrow search
  
  else map out the country result
  */

  const handleCountryDisplay = () => {
    console.log('hi')
  }

  return (
    <div>
      {/* <Phonebook 
        handleFilter={handleFilter}
        handleOnNameChange={handleOnNameChange}
        handleOnNumberChange={handleOnNumberChange}
        handleSubmit={handleSubmit}
        persons={persons}
        newFilter={newFilter}
      /> */}
      <div>Find Countries: <input onChange={handleCountry} /></div>
      <Countries countries={countries} />
    </div>
  )
}

export default App