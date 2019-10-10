import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const content = notes.map(note => <Note key={note.id} content={note.content} />)
  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise.fulfilled')
        setNotes(response.data);
      })
  }

  useEffect(hook, []);
  console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {content}
      </ul>
    </div>
  )
}

export default App;
