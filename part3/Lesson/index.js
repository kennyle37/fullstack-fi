const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.post('/notes', (req, res) => {
  const note = req.body;
  console.log(note);
  res.json(note);
})

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
})

app.get('/notes', (req, res) => {
  res.json(notes);
})

app.get('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find(note => {
    console.log('note id', typeof note.id);
    console.log('id', typeof id)
    return note.id === id
  }
  );
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
  console.log(note)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)