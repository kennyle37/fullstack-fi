import React, { useState, useEffect } from 'react'
import axios from 'axios';
import phoneBookservice from '../services/phonebook'
// import Numbers from './Persons';
// import Filter from './Filter';
// import PersonForm from './PersonForm';
import Phonebook from './Phonebook';
import Countries from './Countries';


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

  useEffect(() => {
    phoneBookservice
      .getAll()
      .then(res => setPersons(res))
      .catch(err => console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const verify = verifyDuplicate(newName);
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (verify) {
      phoneBookservice
        .createItem(newPerson)
        .then(res => {
          setPersons(persons.concat(res))
          setNewName('')
          setNewNumber('')
        })
    } else {
      return alert(`${newName} is already in the phone book`)
    }
  }

  const handleDelete = (e, id) => {
    console.log(person)
    e.preventDefault();
    phoneBookservice
      .deleteItem(id)
      .then(res => {
        console.log('deleted', res)
      })
  }

  const handleCountry = (e) => setSearchCountry(e.target.value);

  const countriesQuery = () => {
    if (!searchCountry) return;
    axios.get(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
      .then(res => {
        setCountries(res.data);
      })
  }

  useEffect(countriesQuery, [searchCountry]);

  return (
    <div>
      <Phonebook 
        handleFilter={handleFilter}
        handleOnNameChange={handleOnNameChange}
        handleOnNumberChange={handleOnNumberChange}
        handleSubmit={handleSubmit}
        persons={persons}
        newFilter={newFilter}
        handleDelete={handleDelete}
      />
      {/* <div>Find Countries: <input onChange={handleCountry} /></div>
      <Countries countries={countries} /> */}
    </div>
  )
}

export default App