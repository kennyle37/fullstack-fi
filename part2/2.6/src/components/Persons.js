import React from 'react';

const Numbers = ({ persons, filter }) => {
  const handleDisplayPerson = persons.map(person => {
    const lowerCaseName  = person.name.toLowerCase();
    const lowerCaseFilter = filter.toLowerCase();

    if (!filter) {
      return <div key={person.name}>{person.name} {person.number}</div>
    } else if (lowerCaseName.includes(lowerCaseFilter)) {
        return <div key={person.name}>{person.name} {person.number}</div>
    } 
      return true;
  })

  return (
    <div>
      {handleDisplayPerson}
    </div>
  );
};

export default Numbers;