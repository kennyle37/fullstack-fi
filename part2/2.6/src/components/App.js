import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '510-798-9177' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('');

  const handleOnNameChange = (e) => setNewName(e.target.value);
  const handleOnNumberChange = (e) => setNewNumber(e.target.value);
  const verifyDuplicate = (name) => persons.every(person => person.name !== name);
  const handleDisplayPerson = persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)

  const handleOnNameSubmit = (e) => {
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
      <form onSubmit={handleOnNameSubmit}>
        <div>
          name: <input onChange={handleOnNameChange} />
        </div>
        <div>
          number: <input onChange={handleOnNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{handleDisplayPerson}</div>
    </div>
  )
}

export default App