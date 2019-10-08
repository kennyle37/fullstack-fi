import React from 'react';
import Note from './Note';

const App = ({ notes }) => {
  const content = notes.map(note => <Note key={note.id} content={note.content} />)
  
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
