const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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
        .then(response => response)
      res.status(200).json({ 'added': newEntry })
    })

router
  .delete('/:id', (req, res) => {
    Phonebook
      .findByIdAndDelete(req.params.id)
      .then(response => response)
    res.status(200).json("content deleted");
  })

router
  .put('/:id', (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id)
    Phonebook
      .findByIdAndUpdate(id, {
        name: req.body.name,
        number: req.body.number
      }, { useFindAndModify: false })
      .then(response => response)
      .catch(err => console.error('THIS IS ERROR', err))
    res.status(200).json('content updated')
  })

module.exports = router;
