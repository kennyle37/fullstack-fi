import React from 'react';

import Numbers from './Persons';
import Filter from './Filter';
import PersonForm from './PersonForm';


const Phonebook = ({ handleFilter, handleOnNameChange, handleOnNumberChange, handleSubmit, persons, newFilter, handleDelete, name, number }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <PersonForm 
        handleSubmit={handleSubmit} 
        handleOnNameChange={handleOnNameChange} 
        handleOnNumberChange={handleOnNumberChange} 
        name={name}
        number={number}
      />
      <h2>Numbers</h2>
      <Numbers 
        persons={persons} 
        filter={newFilter} 
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Phonebook;