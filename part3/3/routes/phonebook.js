const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Phonebook = require('../models/phonebook')

router
  .get('/', (req, res) => {
    Phonebook.find({})
      .then(entry => {
        if (entry) {
          res.json(entry)
        } else {
          res.status(404).end()
        }
      })
      .catch(err => {
        console.log(err)
        res.status(400).send({ error: 'unable to fetch '})
      })
  })

router
  .get('/:id', (req, res) => {
    Phonebook.findById(req.params.id)
      .then(entry => {
        if (entry) {
          res.json(entry)
        } else {
          res.status(404).end()
        }
      })
      .catch(err => {
        console.log(err)
        res.status(400).send({ error: 'unable to fetch '})
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
          res.status(200).json({ 'added': newEntry })
          return response;
        })
    })

router
  .delete('/:id', (req, res) => {
    Phonebook
      .findByIdAndDelete(req.params.id)
      .then(response => {
        res.status(200).json("content deleted");
        return response;
      })
      .catch(error => console.error(error))
    ;
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
      .then(response => {
        res.status(200).json({'updated': payload })
        return response;
      })
      .catch(err => console.error('THIS IS ERROR', err))
  })

module.exports = router;
