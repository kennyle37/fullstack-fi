import React, { useState, useEffect } from 'react'
import axios from 'axios';

// import Numbers from './Persons';
// import Filter from './Filter';
// import PersonForm from './PersonForm';
import Phonebook from './Phonebook';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');
  const [ searchCountry, setSearchCountry ] = useState('');
  const [ countries, setCountries ] = useState([]);

  const handleOnNameChange = (e) => setNewName(e.target.value);
  const handleOnNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilter = (e) => setNewFilter(e.target.value);
  const verifyDuplicate = (name) => persons.every(person => person.name !== name);

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('response', response.data);
        setPersons(response.data);
      })
  }

  useEffect(hook, []);

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
      <div>{displayCountries}</div>
    </div>
  )
}

export default App