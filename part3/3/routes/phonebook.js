const express = require('express');
const router = express.Router();

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

router
  .get('/', (req, res) => {
    res.json(phonebook)
  })

router.
  post('/', (req, res) => {
    const person = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: req.body.name,
      number: req.body.number
    };
    phonebook = phonebook.concat(person)
    res.status(200).json(phonebook);
  })

router
  .delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    phonebook = phonebook.filter(person => person.id !== id);
    res.status(200).json(phonebook)
  })

router
  .put('/:id', (req, res) => {
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

module.exports = router;
