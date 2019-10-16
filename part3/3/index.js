const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

persons = [
  {
    name: "Arto Hellas",
    number: "123-456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "123-456",
    id: 2
  },
  {  
    name: "Dan Abramov",
    number: "123-456",
    id: 3
  },
  {  
    name: "Mary Poppendieck",
    number: "123-456",
    id: 3
  }
]

app.use(bodyParser.json());

// app.use(assignId)

morgan.token('body', (req) => JSON.stringify(req.body))
morgan.token('status', (res) => res.statusCode)

app.use(morgan(':method :url :status :response-time MS :body :status'))

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

app.get('/persons', (req, res) => {
  res.json(persons);
})

app.get('/info/', (req, res) => {
  const n = persons.length;
  const date = Date();
  res.send(`Phonebook has info for ${n} people. <br><br>${date}`)
})

app.get('/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);

  if (person) {
    res.send(person)
  } else {
    res.status(404).send('Retrieved unsucessful')
  }
})

const handleDuplicates = (key, value) => {
  return persons.every(person => {
    return person[key] !== value
  })
}

app.post('/persons', (req, res) => {
  const body = req.body;
  const id = Math.floor(Math.random() * 1000) + 1 
  const person = {
    id: id,
    name: body.name,
    number: body.number
  }
  const duplicateName = handleDuplicates("name", body.name)
  const duplicateNumber = handleDuplicates("number", body.number)

  if (!duplicateName) res.status(400).json({ 'error': 'duplicate name'})
  if (!duplicateNumber) res.status(400).json({ 'error': 'duplicate number'})

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'missing content'
    })
  }

  persons = persons.concat(person);
  res.status(200).json(persons);
})

app.delete('/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(200).json('User deleted');
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})