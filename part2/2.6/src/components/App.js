import React, { useState } from 'react'

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
  const [ filteredPerson, setFilteredPerson ] = useState([...persons]);

  const handleOnNameChange = (e) => setNewName(e.target.value);
  const handleOnNumberChange = (e) => setNewNumber(e.target.value);
  const handleFilter = (e) => setNewFilter(e.target.value);
  const verifyDuplicate = (name) => persons.every(person => person.name !== name);
  /*
    if the filter state is empty
      display all persons

    if there is something inside the filtered state
      only display what matches the criteria
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {};
    person['name'] = newName;
    person['number'] = newNumber;
    const verify = verifyDuplicate(person.name);
    const newPerson = persons.concat(person);
    verify ? setPersons(newPerson) : alert(`${person.name} is already in the phone book`);
  }
  const handleDisplayPerson = persons.map(person => {
    if (!newFilter) return <div key={person.name}>{person.name} {person.number}</div>
    const lowerCaseName  = person.name.toLowerCase();
    const lowerCaseFilter = newFilter.toLowerCase();

    if (lowerCaseName.includes(lowerCaseFilter)) {
      return <div key={person.name}>{person.name} {person.number}</div>
    }
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
      <div>filter by name: <input onChange={handleFilter} /></div>
        <h2>Add new:</h2>
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