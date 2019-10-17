const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());

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

let phonebook = [
  {
    "name": "Arty",
    "number": "123 45",
    "id": 1
  },
  {
    "name": "Kyle",
    "number": "142",
    "id": 2
  }
]

app.get('/phonebook', (req, res) => {
  res.json(phonebook)
})

app.post('/phonebook', (req, res) => {
  const person = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: req.body.name,
    number: req.body.number
  };
  phonebook = phonebook.concat(person)
  res.status(200).json(phonebook);
})

app.delete('/phonebook/:id', (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(person => person.id !== id);
  res.status(200).json(phonebook)
})

app.put('/phonebook/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedPhonebook = phonebook.map(person => {
    if (person.id === id) {
      return {
        id: id,
        name: req.body.name,
        number: req.body.number
      }
    } else {
      return person
    }
  })
  phonebook = updatedPhonebook;
  res.status(200).json(updatedPhonebook);
})

app.post('/notes', (req, res) => {
  res.json(note);
})

app.get('/', (req, res) => {
  res.send('<h1>Hello Lesson</h1>');
})

app.get('/notes', (req, res) => {
  res.json(notes);
})

app.get('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find(note => {
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