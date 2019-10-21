const express = require('express');
const router = express.Router();
const Phonebook = require('../models/phonebook')

router
  .get('/', (req, res) => {
    Phonebook.find({}).then(entry => {
      res.json(entry)
    })
  })

router
    .post('/', (req, res) => {
      const newEntry = new Phonebook({
        "name": req.body.name,
        "number": req.body.number
      })
      newEntry
        .save()
        .then(response => {
          mongoose.connection.close()
        })
      res.status(200).json({ "content created": newEntry })
    })

router
  .delete('/:id', (req, res) => {
    Phonebook
      .findByIdAndDelete(req.params.id)
      .then(response => {
        mongoose.connection.close()
      })
    res.status(200).json("content deleted");
  })

router
  .put('/:id', (req, res) => {
    Phonebook
      .findByIdAndUpdate(req.params.id, {
        "name": req.body.name,
        "number": req.body.number
      })
      .then(response => {
        mongoose.connection.close()
      })
      .catch(err => console.error(err))
    res.status(200).json("content updated!")
  })

module.exports = router;
