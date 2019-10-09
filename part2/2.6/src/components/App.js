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
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <PersonForm 
        handleSubmit={handleSubmit} 
        handleOnNameChange={handleOnNameChange} 
        handleOnNumberChange={handleOnNumberChange} 
      />
      <h2>Numbers</h2>
      <Numbers 
        persons={persons} 
        filter={newFilter} 
      />
    </div>
  )
}

export default App