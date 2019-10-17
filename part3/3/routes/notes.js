const express = require('express');
const router = express.Router();

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

router
  .post('/', (req, res) => {
    res.json(notes);
  })

router
  .get('/', (req, res) => {
    res.json(notes);
  })

router
  .get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).end();
    }
  })

module.exports = router;