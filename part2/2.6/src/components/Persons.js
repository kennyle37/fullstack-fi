import React from 'react';

const Numbers = ({ persons, filter }) => {
  const handleDisplayPerson = persons.map(person => {
    if (!filter) return <div key={person.name}>{person.name} {person.number}</div>
    const lowerCaseName  = person.name.toLowerCase();
    const lowerCaseFilter = filter.toLowerCase();

    if (lowerCaseName.includes(lowerCaseFilter)) {
      return <div key={person.name}>{person.name} {person.number}</div>
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