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
  const verifyDuplicateName = (name) => persons.every(person => person.name !== name);
  const verifyDuplicateNumber = (number) => persons.every(person => person.number !== number);
  const handleCountry = (e) => setSearchCountry(e.target.value);

  useEffect(() => {
    phoneBookservice
      .getAll()
      .then(res => setPersons(res))
      .catch(err => console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const verifyName = verifyDuplicateName(newName);
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (verifyName) {
      handleCreate(newPerson);
    } else if (!verifyName) {
      const personToUpdate = persons.find(person => person.name === newName)
      handleUpdate(personToUpdate.id, newPerson);
    } else {
      return alert(`${newName} is already in the phone book`)
    }
  }

  const handleCreate = (newPerson) => {
    return phoneBookservice
      .createItem(newPerson)
      .then(res => {
        setPersons(persons.concat(res))
        setNewName('')
        setNewNumber('')
      })  
  }

  const handleUpdate = (id, payload) => {
    if (window.confirm(`Do you want to update ${newName}'s number?`))
    return phoneBookservice
      .updateItem(id, payload)
      .then(res => {
        const newPerson = persons.map(person => {
          if (person.id === id) {
            return {
              id: id,
              ...payload
            }
          }
          return person
        })
        setPersons(newPerson);
        setNewName('');
        setNewNumber('');
      })
  }

  const handleDelete = (id) => () => {
    if (window.confirm(`Do you want to delete ${newName}?`)) {
      phoneBookservice
        .deleteItem(id)
        .then(res => {
          const oldPersonList = persons.filter(person => {
            if (person.id !== id) {
              return person
            }
          });
          setPersons(oldPersonList)
          setNewName('')
          setNewNumber('');
        })
    }
  }

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
        name={newName}
        number={newNumber}
      />
      {/* <div>Find Countries: <input onChange={handleCountry} /></div>
      <Countries countries={countries} /> */}
    </div>
  )
}

export default App