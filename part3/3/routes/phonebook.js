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
    const payload = {
      name: req.body.name,
      number: req.body.number
    }
    const option = { useFindAndModify: false }
    Phonebook
      .findByIdAndUpdate(id, payload, option)
      .then(response => response)
      .catch(err => console.error('THIS IS ERROR', err))
    res.status(200).json({'updated': payload })
  })

module.exports = router;
