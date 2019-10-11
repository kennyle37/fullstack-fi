import React from 'react';

const Note = ({ notes, toggleImportance }) => {
  const label = notes.important
    ? `make not important` : `make important`

  return (
    <li>{notes}
    <button onClick={toggleImportance}>{label}</button>
    </li>
  )
};

export default Note;