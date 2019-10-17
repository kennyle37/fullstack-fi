import React from 'react';

const Numbers = ({ persons, filter, handleDelete }) => {
  const handleDisplayPerson = persons.map(person => {
    if (!filter) return <div key={person.id}>{person.name} {person.number} <button onClick={handleDelete(person.id)}>delete</button></div>
    const lowerCaseName  = person.name.toLowerCase();
    const lowerCaseFilter = filter.toLowerCase();

    if (lowerCaseName.includes(lowerCaseFilter)) {
      return <div key={person.name}>{person.name} {person.number} <button onClick={handleDelete}>delete</button></div>
    }
    return <div />;
  })

  return (
    <div>
      {handleDisplayPerson}
    </div>
  );
};

export default Numbers;