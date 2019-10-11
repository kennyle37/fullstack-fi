import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './Note';

const App = ({ notes }) => {
  const [ newNote, setNewNote ] = useState('');
  const [ serverNotes, setServerNotes ] = useState([]);

  const content = notes.map(note => <Note key={note.id} notes={note.content} />)
  const handleInput = (e) => {
    setNewNote(e.target.value)
  }

  const displayNote = serverNotes.map(note => <Note key={note.id} notes={note.content} />)

  const noteQuery = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(res => {
        setServerNotes(res.data)
      })
  }

  useEffect(noteQuery, [])

  const addNote = e => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(res => {
        setServerNotes(serverNotes.concat(res.data))
        setNewNote('');
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {content}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleInput} />
        <button type="submit">submit note</button>
      </form>
      <h1>Server Notes</h1>
      <div>{displayNote}</div>
    </div>
  )
}

export default App;
