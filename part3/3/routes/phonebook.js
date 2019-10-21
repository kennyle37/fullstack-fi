const express = require('express');
const router = express.Router();
const Phonebook = require('../models/phonebook')

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
    Phonebook.find({}).then(entry => {
      res.json(entry)
    })
  })

router.
  post('/', (req, res) => {
    Phonebook.findOne({
      name: req.body.name
    })
    .then(entry => {
      console.log(entry)
      if (entry === null) {
        const newEntry = new Phonebook({
          "name": req.body.name,
          "number": req.body.number
        })
        newEntry
          .save()
          .then(response => {
            console.log('saved', response)
            mongoose.connection.close()
            res.status(200).json('Created entry', response);
          })
          .catch(error => {
            console.error(error)
          })
        } else {
          res.json('User already exists!')
          res.status(400);
        }
      })
      .catch(err => {
        console.error('unable to create', err)
      })

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
